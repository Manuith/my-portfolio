<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio — Mind Map</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* DESIGN: Nokia Design Archive — Dark Terminal / Digital Cartography */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html, body, #root {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        body {
            background: #0e0e0e;
            color: rgba(255,255,255,0.92);
            font-family: 'JetBrains Mono', 'Courier New', monospace;
            cursor: crosshair;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        /* Mind Map Canvas */
        .mindmap-canvas {
            position: fixed;
            inset: 0;
            background: #0e0e0e;
            overflow: hidden;
        }

        .mindmap-canvas::after {
            content: '';
            position: absolute;
            inset: 0;
            background: repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.04) 2px,
                rgba(0,0,0,0.04) 4px
            );
            pointer-events: none;
            z-index: 10;
        }

        /* HUD Counter */
        .hud-counter {
            position: fixed;
            top: 16px;
            left: 16px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            color: rgba(255,255,255,0.4);
            z-index: 50;
            letter-spacing: 0.05em;
            line-height: 1.6;
        }

        /* Zoom Controls */
        .zoom-controls {
            position: fixed;
            top: 72px;
            left: 16px;
            z-index: 50;
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .zoom-btn {
            width: 30px;
            height: 30px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.10);
            color: rgba(255,255,255,0.5);
            font-family: 'JetBrains Mono', monospace;
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background 0.15s ease, color 0.15s ease;
            user-select: none;
            line-height: 1;
        }

        .zoom-btn:hover {
            background: rgba(255,255,255,0.10);
            color: #fff;
            border-color: rgba(255,255,255,0.2);
        }

        .zoom-btn:active {
            transform: scale(0.94);
        }

        /* Node tooltip */
        .node-tooltip {
            position: fixed;
            font-family: 'JetBrains Mono', monospace;
            font-size: 9px;
            color: rgba(255,255,255,0.4);
            pointer-events: none;
            z-index: 200;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            background: rgba(14,14,14,0.9);
            padding: 3px 8px;
            border: 1px solid rgba(255,255,255,0.06);
        }

        /* Side Panel */
        .side-panel {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 420px;
            background: rgba(11, 11, 11, 0.98);
            border-left: 1px solid rgba(255,255,255,0.07);
            z-index: 100;
            transform: translateX(100%);
            transition: transform 0.38s cubic-bezier(0.23, 1, 0.32, 1);
            overflow-y: auto;
            overflow-x: hidden;
            padding: 32px 24px;
        }

        .side-panel.open {
            transform: translateX(0);
        }

        .side-panel-close {
            position: absolute;
            top: 16px;
            right: 16px;
            background: transparent;
            border: none;
            color: rgba(255,255,255,0.5);
            font-size: 24px;
            cursor: pointer;
            z-index: 101;
            transition: color 0.2s ease;
        }

        .side-panel-close:hover {
            color: #fff;
        }

        .panel-title {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 600;
            font-size: 22px;
            letter-spacing: -0.02em;
            color: #ffffff;
            line-height: 1.2;
            margin-bottom: 8px;
        }

        .panel-subtitle {
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            color: rgba(255,255,255,0.38);
            text-transform: uppercase;
            letter-spacing: 0.12em;
            margin-bottom: 24px;
        }

        .panel-body {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 14px;
            line-height: 1.72;
            color: rgba(255,255,255,0.68);
        }

        .project-card {
            background: rgba(255,255,255,0.025);
            border: 1px solid rgba(255,255,255,0.06);
            padding: 16px;
            margin-bottom: 10px;
            transition: background 0.2s ease, border-color 0.2s ease;
            cursor: pointer;
        }

        .project-card:hover {
            background: rgba(255,255,255,0.055);
            border-color: rgba(255,255,255,0.12);
        }

        .project-card-title {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 14px;
            font-weight: 500;
            color: #ffffff;
            margin-bottom: 6px;
        }

        .project-card-desc {
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            color: rgba(255,255,255,0.42);
            line-height: 1.65;
        }

        .project-tag {
            display: inline-block;
            font-family: 'JetBrains Mono', monospace;
            font-size: 9px;
            padding: 2px 6px;
            border: 1px solid;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-right: 4px;
            margin-top: 8px;
        }

        .skill-bar-bg {
            height: 1px;
            background: rgba(255,255,255,0.07);
            width: 100%;
            margin-top: 5px;
            margin-bottom: 12px;
        }

        .skill-bar-fill {
            height: 1px;
            transition: width 0.9s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .contact-input {
            width: 100%;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.09);
            color: #fff;
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            padding: 10px 12px;
            outline: none;
            transition: border-color 0.2s ease, background 0.2s ease;
            resize: none;
            border-radius: 0;
            margin-bottom: 12px;
        }

        .contact-input:focus {
            border-color: rgba(255,255,255,0.25);
            background: rgba(255,255,255,0.05);
        }

        .contact-input::placeholder {
            color: rgba(255,255,255,0.2);
        }

        .contact-btn {
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            color: #fff;
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            padding: 10px 16px;
            cursor: pointer;
            transition: background 0.2s ease;
        }

        .contact-btn:hover {
            background: rgba(255,255,255,0.15);
        }

        .panel-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0);
            z-index: 90;
            pointer-events: none;
            transition: background 0.38s ease;
        }

        .panel-backdrop.active {
            background: rgba(0,0,0,0.25);
            pointer-events: auto;
        }

        .intro-overlay {
            position: fixed;
            inset: 0;
            background: #0e0e0e;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            opacity: 1;
            transition: opacity 0.8s ease;
        }

        .intro-overlay.hidden {
            opacity: 0;
            pointer-events: none;
        }

        .intro-spinner {
            width: 40px;
            height: 40px;
            border: 2px solid rgba(255,255,255,0.1);
            border-top: 2px solid rgba(255,255,255,0.5);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 32px;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .intro-text {
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            color: rgba(255,255,255,0.6);
            text-align: center;
            line-height: 1.8;
        }

        .intro-line {
            min-height: 16px;
        }

        .intro-cursor {
            display: inline-block;
            width: 2px;
            height: 12px;
            background: rgba(255,255,255,0.6);
            margin-left: 4px;
            animation: blink 1s infinite;
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }

        .bottom-hint {
            position: fixed;
            bottom: 20px;
            left: 16px;
            font-family: 'JetBrains Mono';
            font-size: 10px;
            color: rgba(255,255,255,0.18);
            letter-spacing: 0.06em;
            pointer-events: none;
            z-index: 50;
            line-height: 1.9;
            opacity: 0;
            transition: opacity 0.8s ease 0.7s;
        }

        .bottom-hint.visible {
            opacity: 1;
        }

        .active-indicator {
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-family: 'JetBrains Mono';
            font-size: 10px;
            letter-spacing: 0.08em;
            pointer-events: none;
            z-index: 50;
            transition: right 0.35s cubic-bezier(0.23, 1, 0.32, 1), color 0.3s ease, opacity 0.3s ease;
            text-transform: uppercase;
            opacity: 0;
        }

        .active-indicator.visible {
            opacity: 1;
            right: 440px;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-up {
            animation: fadeInUp 0.45s cubic-bezier(0.23, 1, 0.32, 1) both;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
    </style>
</head>
<body>
    <div id="root"></div>

    <script>
        // ============================================================================
        // Portfolio Mind Map - Standalone Version (No Build Required)
        // ============================================================================

        const NODE_COLORS = {
            root:     '#ffffff',
            home:     '#00e5cc',
            projects: '#f5a623',
            about:    '#e040fb',
            skills:   '#69ff47',
            contact:  '#ff4081',
            blog:     '#40c4ff',
            work:     '#ff6d00',
        };

        const NODES = [
            { id: 'root', label: 'PORTFOLIO', x: 0.50, y: 0.50, color: NODE_COLORS.root, size: 22, section: 'root', description: 'Welcome to my portfolio' },
            { id: 'home', label: 'Home', x: 0.50, y: 0.17, color: NODE_COLORS.home, size: 15, parentId: 'root', section: 'home', description: 'Introduction & overview' },
            { id: 'projects', label: 'Projects', x: 0.79, y: 0.31, color: NODE_COLORS.projects, size: 17, parentId: 'root', section: 'projects', description: 'Selected work & case studies' },
            { id: 'about', label: 'About', x: 0.83, y: 0.63, color: NODE_COLORS.about, size: 14, parentId: 'root', section: 'about', description: 'Who I am & my story' },
            { id: 'skills', label: 'Skills', x: 0.50, y: 0.83, color: NODE_COLORS.skills, size: 16, parentId: 'root', section: 'skills', description: 'Technical expertise' },
            { id: 'contact', label: 'Contact', x: 0.21, y: 0.63, color: NODE_COLORS.contact, size: 14, parentId: 'root', section: 'contact', description: 'Get in touch' },
            { id: 'blog', label: 'Blog', x: 0.17, y: 0.31, color: NODE_COLORS.blog, size: 13, parentId: 'root', section: 'blog', description: 'Articles & insights' },
            { id: 'work', label: 'Experience', x: 0.25, y: 0.17, color: NODE_COLORS.work, size: 15, parentId: 'root', section: 'work', description: 'Work history' },
            // Ambient nodes
            { id: 'a1', label: '', x: 0.15, y: 0.25, color: '#666', size: 4, section: 'root' },
            { id: 'a2', label: '', x: 0.35, y: 0.12, color: '#666', size: 3, section: 'root' },
            { id: 'a3', label: '', x: 0.75, y: 0.15, color: '#666', size: 5, section: 'root' },
            { id: 'a4', label: '', x: 0.85, y: 0.45, color: '#666', size: 3, section: 'root' },
            { id: 'a5', label: '', x: 0.70, y: 0.75, color: '#666', size: 4, section: 'root' },
            { id: 'a6', label: '', x: 0.30, y: 0.75, color: '#666', size: 3, section: 'root' },
            { id: 'a7', label: '', x: 0.12, y: 0.50, color: '#666', size: 4, section: 'root' },
            { id: 'a8', label: '', x: 0.88, y: 0.75, color: '#666', size: 3, section: 'root' },
        ];

        const EDGES = NODES.filter(n => n.parentId).map(n => ({ from: n.parentId, to: n.id }));

        // ============================================================================
        // Canvas Rendering
        // ============================================================================

        const PARTICLE_COUNT = 340;
        const LERP = 0.09;

        let canvas, ctx;
        let particles = [];
        let nodeStates = new Map();
        let hoveredNode = null;
        let activeNode = null;
        let pan = { x: 0, y: 0 };
        let zoom = 1;
        let drag = { active: false, sx: 0, sy: 0, px: 0, py: 0 };
        let dashOffset = 0;
        let introComplete = false;

        function lerp(a, b, t) {
            return a + (b - a) * t;
        }

        function hexToRgb(hex) {
            const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return r ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) } : null;
        }

        function initParticles() {
            particles = Array.from({ length: PARTICLE_COUNT }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.14,
                vy: (Math.random() - 0.5) * 0.14,
                radius: Math.random() * 1.5 + 0.3,
                opacity: Math.random() * 0.28 + 0.06,
            }));
        }

        function initStates() {
            NODES.forEach(n => nodeStates.set(n.id, { id: n.id, scale: 1, targetScale: 1, glowOpacity: 0 }));
        }

        function nodePos(node) {
            return {
                x: node.x * canvas.width * zoom + pan.x,
                y: node.y * canvas.height * zoom + pan.y,
            };
        }

        function hitTest(sx, sy) {
            let best = null;
            let bestD = Infinity;
            for (const n of NODES) {
                if (!n.label) continue;
                const p = nodePos(n);
                const s = nodeStates.get(n.id)?.scale ?? 1;
                const d = Math.hypot(sx - p.x, sy - p.y);
                if (d < n.size * s * 3.2 && d < bestD) {
                    best = n;
                    bestD = d;
                }
            }
            return best;
        }

        function draw() {
            ctx.fillStyle = '#0e0e0e';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Particles
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(155,155,155,${p.opacity})`;
                ctx.fill();
            }

            // Edges
            dashOffset -= 0.22;
            for (const edge of EDGES) {
                const fn = NODES.find(n => n.id === edge.from);
                const tn = NODES.find(n => n.id === edge.to);
                if (!fn || !tn) continue;

                const fp = nodePos(fn);
                const tp = nodePos(tn);
                const isActive = activeNode?.id === tn.id || activeNode?.id === fn.id;
                const isHov = hoveredNode?.id === tn.id || hoveredNode?.id === fn.id;

                const seed = (fn.id.charCodeAt(0) * 3 + tn.id.charCodeAt(0) * 7) % 60 - 30;
                const cx = (fp.x + tp.x) / 2 + seed;
                const cy = (fp.y + tp.y) / 2 + seed * 0.6;

                ctx.save();
                ctx.beginPath();
                ctx.moveTo(fp.x, fp.y);
                ctx.quadraticCurveTo(cx, cy, tp.x, tp.y);

                if (isActive) {
                    const rgb = hexToRgb(tn.color);
                    ctx.strokeStyle = rgb ? `rgba(${rgb.r},${rgb.g},${rgb.b},0.55)` : 'rgba(255,255,255,0.3)';
                    ctx.lineWidth = 1.1;
                    ctx.setLineDash([4, 8]);
                } else if (isHov) {
                    const rgb = hexToRgb(tn.color);
                    ctx.strokeStyle = rgb ? `rgba(${rgb.r},${rgb.g},${rgb.b},0.28)` : 'rgba(255,255,255,0.15)';
                    ctx.lineWidth = 0.8;
                    ctx.setLineDash([3, 7]);
                } else {
                    ctx.strokeStyle = 'rgba(200,200,200,0.18)';
                    ctx.lineWidth = 0.8;
                    ctx.setLineDash([2, 7]);
                }

                ctx.lineDashOffset = dashOffset;
                ctx.stroke();
                ctx.setLineDash([]);
                ctx.restore();
            }

            // Lerp node states
            nodeStates.forEach(s => {
                s.scale = lerp(s.scale, s.targetScale, LERP);
                s.glowOpacity = lerp(s.glowOpacity, s.targetScale > 1 ? 1 : 0, LERP);
            });

            // Nodes
            for (const node of NODES) {
                const state = nodeStates.get(node.id);
                if (!state) continue;

                const p = nodePos(node);
                const r = node.size * state.scale;
                const isActive = activeNode?.id === node.id;
                const isHov = hoveredNode?.id === node.id;

                ctx.save();
                ctx.translate(p.x, p.y);

                // Glow
                if (state.glowOpacity > 0.04 || isActive) {
                    const rgb = hexToRgb(node.color.startsWith('#') ? node.color : '#ffffff');
                    if (rgb) {
                        const ga = isActive ? 0.22 : state.glowOpacity * 0.18;
                        const gr = r * (isActive ? 4.5 : 3.8);
                        const grad = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, gr);
                        grad.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},${ga})`);
                        grad.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`);
                        ctx.beginPath();
                        ctx.arc(0, 0, gr, 0, Math.PI * 2);
                        ctx.fillStyle = grad;
                        ctx.fill();
                    }
                }

                // Arc ring
                const gap = 0.20;
                const as = Math.PI * gap;
                const ae = Math.PI * (2 - gap);

                ctx.beginPath();
                ctx.arc(0, 0, r, as, ae);
                ctx.strokeStyle = node.color;
                ctx.lineWidth = node.id === 'root' ? 2.5 : (isHov || isActive) ? 2.0 : 1.6;
                ctx.globalAlpha = isActive ? 1 : (isHov ? 0.95 : 0.80);
                ctx.stroke();

                // End dots
                const dotR = Math.max(1.2, 1.8 * Math.min(state.scale, 1.5));
                [[Math.cos(as) * r, Math.sin(as) * r], [Math.cos(ae) * r, Math.sin(ae) * r]].forEach(([dx, dy]) => {
                    ctx.beginPath();
                    ctx.arc(dx, dy, dotR, 0, Math.PI * 2);
                    ctx.fillStyle = node.color;
                    ctx.globalAlpha = isActive ? 1 : 0.85;
                    ctx.fill();
                });

                if (node.id === 'root') {
                    ctx.beginPath();
                    ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(255,255,255,0.85)';
                    ctx.globalAlpha = 1;
                    ctx.fill();
                }

                ctx.globalAlpha = 1;
                ctx.restore();
            }

            // Labels
            for (const node of NODES) {
                if (!node.label) continue;
                const state = nodeStates.get(node.id);
                if (!state) continue;

                const p = nodePos(node);
                const r = node.size * state.scale;
                const isActive = activeNode?.id === node.id;
                const isHov = hoveredNode?.id === node.id;
                const prominent = isActive || isHov;

                const fs = prominent ? Math.max(12, 10 + node.size * 0.3) : (node.id === 'root' ? 12 : 10);

                ctx.save();
                ctx.font = `${prominent ? '500' : '400'} ${fs}px 'JetBrains Mono', monospace`;
                ctx.textBaseline = 'middle';

                const tw = ctx.measureText(node.label).width;
                const px = 7, py = 3;
                const lx = p.x - tw / 2 - px;
                const ly = p.y + r + 15;
                const lw = tw + px * 2;
                const lh = fs + py * 2;

                ctx.fillStyle = prominent ? 'rgba(12,12,12,0.96)' : 'rgba(14,14,14,0.82)';
                ctx.fillRect(lx, ly - lh / 2, lw, lh);

                ctx.strokeStyle = prominent ? node.color : 'rgba(255,255,255,0.07)';
                ctx.lineWidth = prominent ? 1 : 0.5;
                ctx.strokeRect(lx, ly - lh / 2, lw, lh);

                ctx.fillStyle = prominent ? node.color : 'rgba(225,225,225,0.82)';
                ctx.fillText(node.label, p.x - tw / 2, ly);

                ctx.restore();
            }
        }

        function animate() {
            draw();
            requestAnimationFrame(animate);
        }

        function onMouseMove(e) {
            const sx = e.clientX;
            const sy = e.clientY;

            if (drag.active) {
                pan.x = drag.px + (sx - drag.sx);
                pan.y = drag.py + (sy - drag.sy);
                return;
            }

            const hit = hitTest(sx, sy);
            if (hit?.id !== hoveredNode?.id) {
                if (hoveredNode) {
                    const s = nodeStates.get(hoveredNode.id);
                    if (s) s.targetScale = 1;
                }
                if (hit) {
                    const s = nodeStates.get(hit.id);
                    if (s) s.targetScale = hit.id === 'root' ? 1.35 : hit.size > 12 ? 1.5 : 1.7;
                }
                hoveredNode = hit;
            }
        }

        function onMouseDown(e) {
            if (e.button !== 0) return;
            drag = { active: true, sx: e.clientX, sy: e.clientY, px: pan.x, py: pan.y };
        }

        function onMouseUp(e) {
            const wasDrag = drag.active;
            drag.active = false;
            const dx = Math.abs(e.clientX - drag.sx);
            const dy = Math.abs(e.clientY - drag.sy);
            if (wasDrag && (dx > 5 || dy > 5)) return;
            const hit = hitTest(e.clientX, e.clientY);
            if (hit?.label) {
                activeNode = hit;
                updatePanel();
            }
        }

        function onMouseLeave() {
            if (hoveredNode) {
                const s = nodeStates.get(hoveredNode.id);
                if (s) s.targetScale = 1;
            }
            hoveredNode = null;
            drag.active = false;
        }

        function onWheel(e) {
            e.preventDefault();
            const factor = e.deltaY > 0 ? 0.90 : 1.10;
            const nz = Math.min(Math.max(zoom * factor, 0.3), 4);
            const ratio = nz / zoom;
            pan.x = e.clientX - ratio * (e.clientX - pan.x);
            pan.y = e.clientY - ratio * (e.clientY - pan.y);
            zoom = nz;
        }

        // ============================================================================
        // Panel Content
        // ============================================================================

        const SECTION_CONTENT = {
            root: {
                title: 'PORTFOLIO',
                subtitle: 'Welcome',
                content: `<p class="panel-body" style="margin-bottom: 20px;">Welcome to my interactive portfolio mind map. Click on any node to explore different sections of my work and experience.</p>`
            },
            home: {
                title: 'Home',
                subtitle: 'Introduction',
                content: `<p class="panel-body" style="margin-bottom: 20px;">Hi! I'm a creative developer passionate about building beautiful, interactive digital experiences. This mind map showcases my portfolio in a unique way.</p>`
            },
            projects: {
                title: 'Projects',
                subtitle: 'Selected Work',
                content: `
                    <div class="project-card animate-fade-in-up">
                        <div class="project-card-title">Interactive Mind Map</div>
                        <div class="project-card-desc">A Nokia-inspired portfolio visualization with canvas rendering, particle effects, and interactive nodes.</div>
                        <div>
                            <span class="project-tag" style="border-color: #f5a623; color: #f5a623;">React</span>
                            <span class="project-tag" style="border-color: #f5a623; color: #f5a623;">Canvas</span>
                            <span class="project-tag" style="border-color: #f5a623; color: #f5a623;">Design</span>
                        </div>
                    </div>
                    <div class="project-card animate-fade-in-up" style="animation-delay: 50ms;">
                        <div class="project-card-title">Web Application</div>
                        <div class="project-card-desc">A full-stack web app with real-time features and responsive design.</div>
                        <div>
                            <span class="project-tag" style="border-color: #f5a623; color: #f5a623;">TypeScript</span>
                            <span class="project-tag" style="border-color: #f5a623; color: #f5a623;">Node.js</span>
                        </div>
                    </div>
                `
            },
            about: {
                title: 'About',
                subtitle: 'Who I Am',
                content: `<p class="panel-body" style="margin-bottom: 16px;"><strong>Interests:</strong> Web design, interactive experiences, creative coding, UI/UX</p><p class="panel-body" style="margin-bottom: 16px;"><strong>Education:</strong> Computer Science & Design</p><p class="panel-body">I love combining technical skills with creative thinking to build products that users love.</p>`
            },
            skills: {
                title: 'Skills',
                subtitle: 'Technical Expertise',
                content: `
                    <div style="margin-bottom: 20px;">
                        <div style="font-size: 12px; color: rgba(255,255,255,0.7); margin-bottom: 4px;">React & TypeScript</div>
                        <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 90%; background: #69ff47;"></div></div>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <div style="font-size: 12px; color: rgba(255,255,255,0.7); margin-bottom: 4px;">UI/UX Design</div>
                        <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 85%; background: #69ff47;"></div></div>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <div style="font-size: 12px; color: rgba(255,255,255,0.7); margin-bottom: 4px;">Canvas & WebGL</div>
                        <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 75%; background: #69ff47;"></div></div>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <div style="font-size: 12px; color: rgba(255,255,255,0.7); margin-bottom: 4px;">Node.js & Databases</div>
                        <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 80%; background: #69ff47;"></div></div>
                    </div>
                `
            },
            contact: {
                title: 'Contact',
                subtitle: 'Get In Touch',
                content: `
                    <form onsubmit="event.preventDefault(); alert('Thank you for reaching out!');" style="margin-top: 16px;">
                        <input class="contact-input" type="text" placeholder="Your Name" required>
                        <input class="contact-input" type="email" placeholder="Your Email" required>
                        <textarea class="contact-input" placeholder="Your Message" rows="4" required></textarea>
                        <button class="contact-btn" type="submit">Send Message</button>
                    </form>
                    <p class="panel-body" style="margin-top: 20px; font-size: 12px;">Email: hello@example.com</p>
                `
            },
            blog: {
                title: 'Blog',
                subtitle: 'Articles & Insights',
                content: `
                    <div class="project-card animate-fade-in-up">
                        <div class="project-card-title">Building Interactive Experiences</div>
                        <div class="project-card-desc">How to create engaging web experiences with canvas and modern JavaScript.</div>
                    </div>
                    <div class="project-card animate-fade-in-up" style="animation-delay: 50ms;">
                        <div class="project-card-title">Design Systems at Scale</div>
                        <div class="project-card-desc">Best practices for maintaining consistency across large applications.</div>
                    </div>
                `
            },
            work: {
                title: 'Experience',
                subtitle: 'Work History',
                content: `
                    <div style="margin-bottom: 24px;">
                        <div style="font-weight: 500; color: #fff; margin-bottom: 4px;">Senior Developer</div>
                        <div style="font-size: 11px; color: rgba(255,255,255,0.5); margin-bottom: 8px;">2022 - Present</div>
                        <div class="panel-body" style="font-size: 12px;">Led development of interactive web applications and design systems.</div>
                    </div>
                    <div style="margin-bottom: 24px;">
                        <div style="font-weight: 500; color: #fff; margin-bottom: 4px;">Full Stack Developer</div>
                        <div style="font-size: 11px; color: rgba(255,255,255,0.5); margin-bottom: 8px;">2020 - 2022</div>
                        <div class="panel-body" style="font-size: 12px;">Built and maintained production web applications with React and Node.js.</div>
                    </div>
                `
            }
        };

        function updatePanel() {
            const panel = document.querySelector('.side-panel');
            const backdrop = document.querySelector('.panel-backdrop');
            const content = SECTION_CONTENT[activeNode.section];

            if (!content) return;

            panel.innerHTML = `
                <button class="side-panel-close" onclick="closePanel()">✕</button>
                <div class="panel-title">${content.title}</div>
                <div class="panel-subtitle">${content.subtitle}</div>
                ${content.content}
            `;

            panel.classList.add('open');
            backdrop.classList.add('active');

            const indicator = document.querySelector('.active-indicator');
            indicator.textContent = `◆ ${activeNode.label}`;
            indicator.style.color = activeNode.color;
            indicator.classList.add('visible');
        }

        function closePanel() {
            const panel = document.querySelector('.side-panel');
            const backdrop = document.querySelector('.panel-backdrop');
            const indicator = document.querySelector('.active-indicator');

            panel.classList.remove('open');
            backdrop.classList.remove('active');
            indicator.classList.remove('visible');
            activeNode = null;
        }

        function fireZoom(direction) {
            const rect = canvas.getBoundingClientRect();
            const factor = direction === 'in' ? 1.10 : 0.90;
            const nz = Math.min(Math.max(zoom * factor, 0.3), 4);
            const ratio = nz / zoom;
            pan.x = rect.width / 2 - ratio * (rect.width / 2 - pan.x);
            pan.y = rect.height / 2 - ratio * (rect.height / 2 - pan.y);
            zoom = nz;
        }

        // ============================================================================
        // Intro Animation
        // ============================================================================

        const BOOT_LINES = [
            '> INITIALIZING PORTFOLIO_MAP v2.4.1',
            '> Loading node graph...',
            '> Mapping connections...',
            '> Rendering particle field...',
        ];

        function showIntro() {
            const overlay = document.querySelector('.intro-overlay');
            let lineIndex = 0;

            function showNextLine() {
                if (lineIndex < BOOT_LINES.length) {
                    const textDiv = document.querySelector('.intro-text');
                    const line = document.createElement('div');
                    line.className = 'intro-line';
                    line.textContent = BOOT_LINES[lineIndex];
                    textDiv.appendChild(line);
                    lineIndex++;
                    setTimeout(showNextLine, 300);
                } else {
                    setTimeout(() => {
                        overlay.classList.add('hidden');
                        introComplete = true;
                        document.querySelector('.bottom-hint').classList.add('visible');
                    }, 800);
                }
            }

            showNextLine();
        }

        // ============================================================================
        // Init
        // ============================================================================

        function init() {
            canvas = document.querySelector('canvas');
            ctx = canvas.getContext('2d');

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            initParticles();
            initStates();

            canvas.addEventListener('mousemove', onMouseMove);
            canvas.addEventListener('mousedown', onMouseDown);
            canvas.addEventListener('mouseup', onMouseUp);
            canvas.addEventListener('mouseleave', onMouseLeave);
            canvas.addEventListener('wheel', onWheel, { passive: false });

            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            });

            animate();
            showIntro();
        }

        // ============================================================================
        // HTML Structure
        // ============================================================================

        document.addEventListener('DOMContentLoaded', () => {
            const root = document.getElementById('root');
            root.innerHTML = `
                <div class="mindmap-canvas">
                    <canvas></canvas>
                </div>

                <div class="hud-counter" style="opacity: 0; transition: opacity 0.8s ease 0.3s;">
                    <div style="color: rgba(255,255,255,0.45); margin-bottom: 3px; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;">Portfolio Map</div>
                    <div style="font-size: 11px;">
                        <span style="color: #fff; font-weight: 500;">8</span>
                        <span style="color: rgba(255,255,255,0.3);">/8 nodes</span>
                    </div>
                </div>

                <div class="zoom-controls" style="opacity: 0; transition: opacity 0.8s ease 0.5s;">
                    <button class="zoom-btn" onclick="fireZoom('in')" title="Zoom in">+</button>
                    <button class="zoom-btn" onclick="fireZoom('out')" title="Zoom out">−</button>
                </div>

                <div class="bottom-hint">
                    <div>scroll to zoom · drag to pan</div>
                    <div>click node to explore</div>
                </div>

                <div class="active-indicator"></div>

                <div class="panel-backdrop" onclick="closePanel()"></div>
                <div class="side-panel"></div>

                <div class="intro-overlay">
                    <div class="intro-spinner"></div>
                    <div class="intro-text"></div>
                </div>
            `;

            setTimeout(() => {
                document.querySelector('.hud-counter').style.opacity = '1';
                document.querySelector('.zoom-controls').style.opacity = '1';
            }, 300);

            init();
        });

        // Global functions
        window.closePanel = closePanel;
        window.fireZoom = fireZoom;
    </script>
</body>
</html>
