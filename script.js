const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const projectCards = document.querySelectorAll(".project-card[data-href]");

for (const card of projectCards) {
  const href = card.getAttribute("data-href");

  if (!href) {
    continue;
  }

  card.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      return;
    }

    window.location.href = href;
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.location.href = href;
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (revealItems.length > 0) {
  if (reduceMotion || !("IntersectionObserver" in window)) {
    for (const item of revealItems) {
      item.classList.add("is-visible");
    }
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    let revealIndex = 0;

    for (const item of revealItems) {
      item.style.setProperty("--reveal-delay", `${Math.min(revealIndex * 45, 220)}ms`);
      revealObserver.observe(item);
      revealIndex += 1;
    }
  }
}

const galleries = document.querySelectorAll("[data-gallery]");

for (const gallery of galleries) {
  const track = gallery.querySelector(".gallery-track");
  const prevButton = gallery.querySelector(".gallery-button-prev");
  const nextButton = gallery.querySelector(".gallery-button-next");
  const dotsContainer = gallery.querySelector(".gallery-dots");

  if (!(track instanceof HTMLElement) || !(dotsContainer instanceof HTMLElement)) {
    continue;
  }

  const slides = Array.from(track.querySelectorAll(".gallery-slide"));

  if (slides.length === 0) {
    continue;
  }

  const dots = slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "gallery-dot";
    dot.setAttribute("aria-label", `Go to image ${index + 1}`);
    dot.addEventListener("click", () => {
      track.scrollTo({
        left: track.clientWidth * index,
        behavior: "smooth",
      });
    });
    dotsContainer.appendChild(dot);
    return dot;
  });

  const updateActiveDot = () => {
    const index = Math.round(track.scrollLeft / Math.max(track.clientWidth, 1));

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
    });
  };

  prevButton?.addEventListener("click", () => {
    track.scrollBy({
      left: -track.clientWidth,
      behavior: "smooth",
    });
  });

  nextButton?.addEventListener("click", () => {
    track.scrollBy({
      left: track.clientWidth,
      behavior: "smooth",
    });
  });

  track.addEventListener("scroll", updateActiveDot, { passive: true });
  updateActiveDot();
}
