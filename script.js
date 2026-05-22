        // ============================================================================
        // Portfolio Mind Map - Standalone Version (No Build Required)
        // ============================================================================

        const PCB_GREEN = '#00B85F';
        const NODE_COLORS = {
            root:     PCB_GREEN,
            home:     PCB_GREEN,
            projects: PCB_GREEN,
            about:    PCB_GREEN,
            skills:   PCB_GREEN,
            contact:  PCB_GREEN,
            resume:   PCB_GREEN,
            work:     PCB_GREEN,
        };

        const PROFILE_LINKS = [
            {
                label: 'GitHub',
                href: 'https://github.com/Manuith',
                icon: `
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.09.66-.22.66-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.15-4.55-5.1 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.34 2.75-1.06 2.75-1.06.55 1.43.2 2.48.1 2.74.64.73 1.03 1.65 1.03 2.78 0 3.96-2.33 4.84-4.56 5.09.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.17.59.67.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" fill="currentColor"/>
                    </svg>
                `,
            },
            {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/manith-chhun-14bba4258/',
                icon: `
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55C7.15 3.86 6.33 3 5.25 3S3.34 3.86 3.34 4.95c0 1.08.82 1.95 1.9 1.95 1.08 0 1.92-.87 1.92-1.95ZM20.66 12.95c0-3.02-1.61-4.43-3.76-4.43-1.73 0-2.5.96-2.93 1.63V8.5h-3.38c.04 1.09 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.38 1.91-1.38 1.35 0 1.89 1.04 1.89 2.56V20H21v-7.05Z" fill="currentColor"/>
                    </svg>
                `,
            },
            {
                label: 'Email',
                href: 'mailto:chhunsmanith@gmail.com',
                icon: `
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 5.5h18a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1Zm0 2.08V18h18V7.58l-8.39 6.38a1 1 0 0 1-1.22 0L3 7.58Zm16.35-1.08H4.65L12 12.1l7.35-5.6Z" fill="currentColor"/>
                    </svg>
                `,
            },
            {
                label: 'Resume/CV',
                action: 'panel',
                targetNodeId: 'resume',
                icon: `
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6 2h8.5L20 7.5V21a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM8 11h8v1.5H8V11Zm0 3.5h8V16H8v-1.5Zm0 3.5h5V19.5H8V18Z" fill="currentColor"/>
                    </svg>
                `,
            },
        ];

        const NODES = [
            { id: 'root', label: 'ME', x: 0.50, y: 0.50, color: NODE_COLORS.root, size: 27, section: 'root', description: 'Intro & how to start' },
            { id: 'home', label: 'Intro', x: 0.50, y: 0.35, color: NODE_COLORS.home, size: 21, parentId: 'root', section: 'home', description: 'Introduction & overview' },
            { id: 'projects', label: 'Projects', x: 0.60, y: 0.42, color: NODE_COLORS.projects, size: 23, parentId: 'root', section: 'projects', description: 'Selected work & case studies' },
            { id: 'about', label: 'Education', x: 0.61, y: 0.56, color: NODE_COLORS.about, size: 20, parentId: 'root', section: 'about', description: 'School history & academic path' },
            { id: 'skills', label: 'Skills', x: 0.50, y: 0.65, color: NODE_COLORS.skills, size: 22, parentId: 'root', section: 'skills', description: 'Technical expertise' },
            { id: 'contact', label: 'Contact', x: 0.39, y: 0.56, color: NODE_COLORS.contact, size: 20, parentId: 'root', section: 'contact', description: 'Get in touch' },
            { id: 'resume', label: 'Resume/CV', x: 0.40, y: 0.42, color: NODE_COLORS.resume, size: 19, parentId: 'root', section: 'resume', description: 'Resume/CV' },
            { id: 'work', label: 'Experience', x: 0.468, y: 0.36, color: NODE_COLORS.work, size: 21, parentId: 'root', section: 'work', description: 'Work history' },
            /* Ambient nodes
            { id: 'a1', label: '', x: 0.15, y: 0.25, color: '#666', size: 4, section: 'root' },
            { id: 'a2', label: '', x: 0.35, y: 0.12, color: '#666', size: 3, section: 'root' },
            { id: 'a3', label: '', x: 0.75, y: 0.15, color: '#666', size: 5, section: 'root' },
            { id: 'a4', label: '', x: 0.85, y: 0.45, color: '#666', size: 3, section: 'root' },
            { id: 'a5', label: '', x: 0.70, y: 0.75, color: '#666', size: 4, section: 'root' },
            { id: 'a6', label: '', x: 0.30, y: 0.75, color: '#666', size: 3, section: 'root' },
            { id: 'a7', label: '', x: 0.12, y: 0.50, color: '#666', size: 4, section: 'root' },
            { id: 'a8', label: '', x: 0.88, y: 0.75, color: '#666', size: 3, section: 'root' },*/
        ];

        const EDGES = NODES.filter(n => n.parentId).map(n => ({ from: n.parentId, to: n.id }));
        const TRACE_LANE_OFFSETS = {
            home:     { x: 12, y: 0 },
            projects: { x: 0, y: -16 },
            about:    { x: 0, y: 16 },
            skills:   { x: 12, y: 0 },
            contact:  { x: 0, y: 16 },
            resume:   { x: 0, y: -28 },
            work:     { x: -18, y: -10 },
        };
        const FINAL_DIAGONAL_APPROACH_IDS = new Set(['projects', 'resume', 'about', 'contact']);
        const SINGLE_DIAGONAL_APPROACH_IDS = new Set(['projects', 'resume', 'about', 'contact']);

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
        let activeProjectIndex = 0;
        let activeProjectImageIndex = 0;
        let pan = { x: 0, y: 0 };
        let zoom = 1;
        let drag = { active: false, sx: 0, sy: 0, px: 0, py: 0 };
        let touchState = {
            mode: null,
            startZoom: 1,
            startDistance: 0,
            startPan: { x: 0, y: 0 },
            startCenter: { x: 0, y: 0 },
            tapStart: { x: 0, y: 0 },
            tapMoved: false,
        };
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

        function getNodeZoomScale() {
            return Math.max(1, Math.min(1.55, Math.pow(zoom, 0.4)));
        }

        function getNodeBox(node, state, prominent = false) {
            const fs = prominent ? Math.max(13, 11 + node.size * 0.3) : (node.id === 'root' ? 13 : 11);
            ctx.save();
            ctx.font = `${prominent ? '500' : '400'} ${fs}px 'JetBrains Mono', monospace`;
            const tw = ctx.measureText(node.label).width;
            ctx.restore();

            const px = prominent ? 14 : 12;
            const py = prominent ? 10 : 8;
            const width = Math.max(node.size * 2.5, tw + px * 2);
            const height = fs + py * 2;

            return { fs, tw, width, height };
        }

        function getNodeLabelLayout(node, state, prominent = false) {
            const metrics = getNodeBox(node, state, prominent);
            const zoomScale = getNodeZoomScale();
            const labelWidth = metrics.width * (state?.scale ?? 1) * zoomScale;
            const labelHeight = metrics.height * (state?.scale ?? 1) * zoomScale;
            const radius = node.size * (state?.scale ?? 1) * zoomScale * 0.78;
            const p = nodePos(node);
            const side = node.x >= 0.5 ? 1 : -1;
            const gap = 14 * zoomScale;
            const centerX = p.x + side * (radius + gap + labelWidth / 2);
            const centerY = p.y;

            return {
                ...metrics,
                radius,
                labelWidth,
                labelHeight,
                side,
                centerX,
                centerY,
                x: centerX - labelWidth / 2,
                y: centerY - labelHeight / 2,
            };
        }

        function getNodeAnchor(node, state, towardPoint) {
            const p = nodePos(node);
            const dx = towardPoint.x - p.x;
            const dy = towardPoint.y - p.y;
            const zoomScale = getNodeZoomScale();

            const r = node.size * (state?.scale ?? 1) * zoomScale * (node.id === 'root' ? 1 : 0.78);
            const len = Math.hypot(dx, dy) || 1;
            return {
                x: p.x + (dx / len) * r,
                y: p.y + (dy / len) * r,
            };
        }

        function getBeveledTracePoints(points, bevel = 10) {
            if (points.length < 3) return points;

            const result = [points[0]];
            for (let i = 1; i < points.length - 1; i++) {
                const prev = points[i - 1];
                const curr = points[i];
                const next = points[i + 1];

                const inDx = curr.x - prev.x;
                const inDy = curr.y - prev.y;
                const outDx = next.x - curr.x;
                const outDy = next.y - curr.y;
                const inLen = Math.hypot(inDx, inDy) || 1;
                const outLen = Math.hypot(outDx, outDy) || 1;
                const cut = Math.min(bevel, inLen * 0.45, outLen * 0.45);

                result.push({
                    x: curr.x - (inDx / inLen) * cut,
                    y: curr.y - (inDy / inLen) * cut,
                });
                result.push({
                    x: curr.x + (outDx / outLen) * cut,
                    y: curr.y + (outDy / outLen) * cut,
                });
            }

            result.push(points[points.length - 1]);
            return result;
        }

        function hitTest(sx, sy) {
            let best = null;
            let bestD = Infinity;
            const zoomScale = getNodeZoomScale();
            for (const n of NODES) {
                if (!n.label) continue;
                const p = nodePos(n);
                const s = nodeStates.get(n.id)?.scale ?? 1;
                const d = Math.hypot(sx - p.x, sy - p.y);
                const nodeRadius = n.size * s * zoomScale * (n.id === 'root' ? 1 : 0.82);
                let hit = d < nodeRadius * 1.6;

                if (!hit && n.id !== 'root') {
                    const layout = getNodeLabelLayout(n, nodeStates.get(n.id), false);
                    hit = sx >= layout.x && sx <= layout.x + layout.labelWidth && sy >= layout.y && sy <= layout.y + layout.labelHeight;
                }

                if (hit && d < bestD) {
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
            for (const edge of EDGES) {
                const fn = NODES.find(n => n.id === edge.from);
                const tn = NODES.find(n => n.id === edge.to);
                if (!fn || !tn) continue;

                const fp = nodePos(fn);
                const tp = nodePos(tn);
                const isActive = activeNode?.id === tn.id || activeNode?.id === fn.id;
                const isHov = hoveredNode?.id === tn.id || hoveredNode?.id === fn.id;
                const fromState = nodeStates.get(fn.id);
                const toState = nodeStates.get(tn.id);
                const start = getNodeAnchor(fn, fromState, tp);
                const end = getNodeAnchor(tn, toState, fp);
                const dx = end.x - start.x;
                const dy = end.y - start.y;

                const signX = Math.sign(dx) || 1;
                const signY = Math.sign(dy) || 1;
                const horizontal = Math.abs(dx) >= Math.abs(dy);
                const lane = TRACE_LANE_OFFSETS[tn.id] ?? { x: 0, y: 0 };

                let points;
                let endRun;
                const addPoint = (list, point) => {
                    const prev = list[list.length - 1];
                    if (!prev || prev.x !== point.x || prev.y !== point.y) list.push(point);
                };
                if (horizontal) {
                    const branchX = start.x + signX * 16;
                    const laneY = start.y + lane.y;
                    const laneX = start.x + dx * (tn.id === 'work' ? 0.36 : 0.30) + lane.x * 0.38;
                    const midX = start.x + dx * (tn.id === 'work' ? 0.48 : 0.56);
                    points = [];
                    addPoint(points, start);
                    addPoint(points, { x: branchX, y: start.y });
                    addPoint(points, { x: branchX, y: laneY });
                    addPoint(points, { x: laneX, y: laneY });
                    addPoint(points, { x: midX, y: laneY });

                    if (SINGLE_DIAGONAL_APPROACH_IDS.has(tn.id)) {
                        endRun = end;
                    } else if (FINAL_DIAGONAL_APPROACH_IDS.has(tn.id)) {
                        const approachYOffset = laneY < end.y ? -14 : 14;
                        endRun = { x: end.x - signX * 16, y: end.y };
                        addPoint(points, { x: midX, y: end.y + approachYOffset });
                    } else {
                        endRun = { x: end.x - signX * 16, y: end.y };
                        addPoint(points, { x: midX, y: end.y });
                    }

                    addPoint(points, endRun);
                    addPoint(points, end);
                } else {
                    const branchY = start.y + signY * 16;
                    const laneX = start.x + lane.x;
                    const laneY = start.y + dy * 0.30 + lane.y * 0.38;
                    const midY = start.y + dy * 0.56;
                    endRun = { x: end.x, y: end.y - signY * 16 };
                    points = [];
                    addPoint(points, start);
                    addPoint(points, { x: start.x, y: branchY });
                    addPoint(points, { x: laneX, y: branchY });
                    addPoint(points, { x: laneX, y: laneY });
                    addPoint(points, { x: laneX, y: midY });
                    addPoint(points, { x: end.x, y: midY });
                    addPoint(points, endRun);
                    addPoint(points, end);
                }

                const tracePoints = getBeveledTracePoints(points, 6);

                ctx.save();
                ctx.beginPath();
                ctx.moveTo(tracePoints[0].x, tracePoints[0].y);
                for (let i = 1; i < tracePoints.length; i++) {
                    ctx.lineTo(tracePoints[i].x, tracePoints[i].y);
                }

                ctx.strokeStyle = isActive ? 'rgba(255,255,255,0.96)' : isHov ? 'rgba(255,255,255,0.84)' : 'rgba(255,255,255,0.56)';
                ctx.lineWidth = isActive ? 2.1 : isHov ? 1.7 : 1.25;
                ctx.lineJoin = 'miter';
                ctx.lineCap = 'square';
                ctx.stroke();

                const viaSize = isActive ? 3 : 2.5;
                ctx.fillStyle = isActive ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.68)';
                ctx.fillRect(endRun.x - viaSize / 2, endRun.y - viaSize / 2, viaSize, viaSize);

                if (tn.id !== 'root') {
                    const terminal = 6;
                    const tx = end.x + (horizontal ? (dx > 0 ? terminal : -terminal) : 0);
                    const ty = end.y + (horizontal ? 0 : (dy > 0 ? terminal : -terminal));
                    ctx.beginPath();
                    ctx.moveTo(end.x, end.y);
                    ctx.lineTo(tx, ty);
                    ctx.strokeStyle = 'rgba(255,255,255,0.98)';
                    ctx.lineWidth = isActive ? 2.2 : 1.7;
                    ctx.stroke();
                    ctx.fillRect(end.x - 2.5, end.y - 2.5, 5, 5);
                }

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
                const zoomScale = getNodeZoomScale();
                const r = node.size * state.scale * zoomScale * (node.id === 'root' ? 1 : 0.78);
                const isActive = activeNode?.id === node.id;
                const isHov = hoveredNode?.id === node.id;
                const prominent = isActive || isHov;

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

                if (node.id !== 'root' && node.label) {
                    ctx.beginPath();
                    ctx.arc(0, 0, r, 0, Math.PI * 2);
                    ctx.fillStyle = prominent ? 'rgba(8,8,8,0.98)' : 'rgba(10,10,10,0.94)';
                    ctx.strokeStyle = node.color;
                    ctx.lineWidth = prominent ? 2.8 : 2.2;
                    ctx.globalAlpha = isActive ? 1 : (isHov ? 0.98 : 0.92);
                    ctx.fill();
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.arc(0, 0, Math.max(3.6, r * 0.34), 0, Math.PI * 2);
                    ctx.fillStyle = prominent ? 'rgba(255,255,255,0.96)' : 'rgba(235,235,235,0.9)';
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(-r * 0.95, 0, Math.max(1.2, r * 0.09), 0, Math.PI * 2);
                    ctx.fillStyle = node.color;
                    ctx.globalAlpha = 0.95;
                    ctx.fill();

                    ctx.globalAlpha = 1;
                    ctx.restore();
                    continue;
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
                const zoomScale = getNodeZoomScale();
                const r = node.size * state.scale * zoomScale;
                const isActive = activeNode?.id === node.id;
                const isHov = hoveredNode?.id === node.id;
                const prominent = isActive || isHov;

                if (node.id !== 'root') {
                    const layout = getNodeLabelLayout(node, state, prominent);
                    ctx.save();
                    ctx.font = `${prominent ? '500' : '400'} ${Math.round(layout.fs * state.scale * zoomScale)}px 'JetBrains Mono', monospace`;
                    ctx.textBaseline = 'middle';
                    ctx.textAlign = 'center';

                    ctx.fillStyle = prominent ? 'rgba(12,12,12,0.96)' : 'rgba(14,14,14,0.82)';
                    ctx.fillRect(layout.x, layout.y, layout.labelWidth, layout.labelHeight);

                    ctx.strokeStyle = prominent ? node.color : 'rgba(255,255,255,0.07)';
                    ctx.lineWidth = prominent ? 1 : 0.5;
                    ctx.strokeRect(layout.x, layout.y, layout.labelWidth, layout.labelHeight);

                    ctx.fillStyle = prominent ? node.color : 'rgba(225,225,225,0.82)';
                    ctx.fillText(node.label, layout.centerX, layout.centerY + 1);
                    ctx.restore();
                    continue;
                }

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
                if (hit.section === 'projects' && activeNode?.id !== 'projects') activeProjectIndex = 0;
                activeNode = hit;
                updatePanel();
                updateStatusDock();
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

        function getTouchDistance(a, b) {
            return Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
        }

        function getTouchCenter(a, b) {
            return {
                x: (a.clientX + b.clientX) / 2,
                y: (a.clientY + b.clientY) / 2,
            };
        }

        function onTouchStart(e) {
            if (e.touches.length === 1) {
                const touch = e.touches[0];
                drag = { active: true, sx: touch.clientX, sy: touch.clientY, px: pan.x, py: pan.y };
                touchState = {
                    mode: 'pan',
                    startZoom: zoom,
                    startDistance: 0,
                    startPan: { x: pan.x, y: pan.y },
                    startCenter: { x: touch.clientX, y: touch.clientY },
                    tapStart: { x: touch.clientX, y: touch.clientY },
                    tapMoved: false,
                };
                return;
            }

            if (e.touches.length === 2) {
                e.preventDefault();
                const [a, b] = e.touches;
                touchState = {
                    mode: 'pinch',
                    startZoom: zoom,
                    startDistance: getTouchDistance(a, b),
                    startPan: { x: pan.x, y: pan.y },
                    startCenter: getTouchCenter(a, b),
                    tapStart: { x: 0, y: 0 },
                    tapMoved: true,
                };
                drag.active = false;
            }
        }

        function onTouchMove(e) {
            if (touchState.mode === 'pan' && e.touches.length === 1) {
                e.preventDefault();
                const touch = e.touches[0];
                pan.x = drag.px + (touch.clientX - drag.sx);
                pan.y = drag.py + (touch.clientY - drag.sy);

                if (Math.abs(touch.clientX - touchState.tapStart.x) > 8 || Math.abs(touch.clientY - touchState.tapStart.y) > 8) {
                    touchState.tapMoved = true;
                }
                return;
            }

            if (e.touches.length === 2) {
                e.preventDefault();
                const [a, b] = e.touches;
                const distance = Math.max(getTouchDistance(a, b), 1);
                const center = getTouchCenter(a, b);
                const nextZoom = Math.min(Math.max(touchState.startZoom * (distance / Math.max(touchState.startDistance, 1)), 0.3), 4);
                const ratio = nextZoom / touchState.startZoom;

                pan.x = center.x - ratio * (touchState.startCenter.x - touchState.startPan.x);
                pan.y = center.y - ratio * (touchState.startCenter.y - touchState.startPan.y);
                zoom = nextZoom;
                touchState.tapMoved = true;
            }
        }

        function onTouchEnd(e) {
            if (touchState.mode === 'pinch' && e.touches.length === 1) {
                const touch = e.touches[0];
                drag = { active: true, sx: touch.clientX, sy: touch.clientY, px: pan.x, py: pan.y };
                touchState = {
                    mode: 'pan',
                    startZoom: zoom,
                    startDistance: 0,
                    startPan: { x: pan.x, y: pan.y },
                    startCenter: { x: touch.clientX, y: touch.clientY },
                    tapStart: { x: touch.clientX, y: touch.clientY },
                    tapMoved: true,
                };
                return;
            }

            if (touchState.mode === 'pan' && e.touches.length === 0) {
                drag.active = false;
                if (!touchState.tapMoved) {
                    const hit = hitTest(touchState.tapStart.x, touchState.tapStart.y);
                    if (hit?.label) {
                        if (hit.section === 'projects' && activeNode?.id !== 'projects') activeProjectIndex = 0;
                        activeNode = hit;
                        updatePanel();
                        updateStatusDock();
                    }
                }
            }

            if (e.touches.length === 0) {
                drag.active = false;
                touchState.mode = null;
            }
        }

        // ============================================================================
        // Panel Content
        // ============================================================================

        const PROJECTS_DATA = [
            {
                name: 'Mini Wind Energy Harvester',
                role: 'In Progress',
                imageLabel: 'Wind Test Setup',
                status: 'Progress',
                images: [
                    { label: 'Wind Test Setup', note: 'Add your fan-driven generator setup, magnets, coils, or measurement rig here.' },
                    { label: 'Measurement Detail', note: 'Use this slot for Arduino analog acquisition, multimeter validation, or rectification circuitry.' },
                    { label: 'Performance Plots', note: 'Use this slot for airflow, load resistance, generated voltage, or output power plots.' }
                ],
                summary: 'Building a fan-driven wind energy test setup using magnets and coils to generate AC electrical output and implementing rectification to obtain usable DC power.',
                stack: ['Arduino', 'Python', 'Excel', 'Energy Systems'],
                highlights: [
                    'Arduino analog data acquisition with digital multimeter validation.',
                    'Python and Excel for logging, calculations, and performance plots.',
                    'Analysis of airflow, magnetic induction, load resistance, and generated power.'
                ]
            },
            {
                name: 'Dream Game',
                role: 'Team Project',
                imageLabel: 'Gameplay Scene',
                status: 'Completed',
                images: [
                    { label: 'Gameplay Scene', note: 'Add your main Unity gameplay shot or combat scene here.' },
                    { label: 'Procedural Motion', note: 'Use this slot for the inverse kinematics arm simulation or animation logic.' },
                    { label: 'Combat System', note: 'Use this slot for collision-based combat, hit detection, or gameplay interactions.' }
                ],
                summary: 'Collaborated on a Unity game prototype, contributing gameplay systems, procedural movement logic, and real-time combat behavior.',
                stack: ['Unity', 'C#', 'Animation', 'Gameplay'],
                highlights: [
                    'Vector-based inverse kinematics arm simulation.',
                    'Animation systems for procedural limb control.',
                    'Collision-based combat mechanics and hit detection.'
                ]
            },
            {
                name: 'SigFeed',
                role: 'In Progress',
                imageLabel: 'Platform Overview',
                status: 'Progress',
                images: [
                    { label: 'Platform Overview', note: 'Add the main app view, dashboard, or filtered feed layout here.' },
                    { label: 'Filtering System', note: 'Use this slot for article scoring, ranking logic, or AI-assisted filtering.' },
                    { label: 'Automation View', note: 'Use this slot for scraping, storage, or personalized delivery workflow visuals.' }
                ],
                summary: 'Building a personalized news intelligence platform that ingests articles, filters higher-signal information, and automates delivery.',
                stack: ['Python', 'APIs', 'Web Scraping', 'AI'],
                highlights: [
                    'Python pipeline using APIs and web scraping.',
                    'AI-assisted filtering and scoring system.',
                    'Automated workflows for collection, storage, and personalized delivery.'
                ]
            },
            {
                name: 'EE Lab & Simulation',
                role: 'Simulation',
                imageLabel: 'LTspice Analysis',
                status: 'Completed',
                images: [
                    { label: 'LTspice Analysis', note: 'Add a circuit simulation screenshot with transient or AC response plots.' },
                    { label: 'Theory vs Simulation', note: 'Use this slot for calculations compared against LTspice results.' },
                    { label: 'Lab Measurements', note: 'Use this slot for breadboard builds, measured behavior, or validation results.' }
                ],
                summary: 'Simulated and analyzed circuits involving resistors, capacitors, inductors, op-amps, AC sources, and transient behavior using LTspice and core circuit analysis methods.',
                stack: ['LTspice', 'Circuit Analysis', 'AC Circuits', 'Op-Amps'],
                highlights: [
                    'KCL, KVL, Thevenin/Norton equivalents, impedance analysis, and phasors.',
                    'Interpretation of voltage, current, gain, and frequency response.',
                    'Comparison of theory, simulation, and measurement behavior.'
                ]
            }
        ];

        const SECTION_CONTENT = {
            root: {
                title: 'ME',
                subtitle: 'Intro & How To Start',
                content: `<p class="panel-body" style="margin-bottom: 20px;">Hi!
                            I'm an Electrical Engineering student with a background in computer science. I’ve worked on a Unity/C# project, and I’m currently building projects with Arduino and electronic circuits. I’m interested in power/energy systems and automation. Recently, I’ve also become interested in embedded systems and electronics. I enjoy building things that combine hardware and software, and I like understanding how real systems work through hands-on projects. 

                            You could say I am something of a tinkerer myself.

                            I am actively seeking opportunities such as internships where I can continue learning, contribute to real engineering projects, grow my technical skills, and be part of a collaborative engineering team.</p>`
            },
            home: {
                title: 'Intro',
                subtitle: 'Introduction',
                content: `<p class="panel-body" style="margin-bottom: 20px;">Hi, welcome to my portfolio website, use the nodes to navigate through areas of me.
                <br><b>NOTE:</b> This is early version, it is still in experimental phase.</p>`
            },
            projects: {
                title: 'Projects',
                subtitle: 'Selected Work',
                content: ''
            },
            about: {
                title: 'Education',
                subtitle: 'Academic Timeline',
                content: `
                    <div class="education-timeline">
                        <div class="education-item">
                            <div class="education-dot"></div>
                            <div class="education-content">
                                <div class="education-period">2025 - Present</div>
                                <div class="education-school">Concordia University</div>
                                <div class="education-degree">Electrical Engineering (Co-op)</div>
                            </div>
                        </div>
                        <div class="education-item">
                            <div class="education-dot"></div>
                            <div class="education-content">
                                <div class="education-period">2023 - 2025</div>
                                <div class="education-school">Collège Lionel-Groulx</div>
                                <div class="education-degree">DEC in Computer Science and Mathematics</div>
                            </div>
                        </div>
                `
            },
            skills: {
                title: 'Skills',
                subtitle: 'Technical Expertise',
                content: `
                    <div class="skills-showcase">
                        <div class="skills-intro panel-body">
                            Programming, tooling, and electrical foundations that support my work across engineering analysis, automation, simulation, and hardware-software integration.
                        </div>

                        <div class="skills-grid">
                            <section class="skills-card">
                                <div class="skills-card-header">
                                    <div class="skills-card-title">Programming</div>
                                    <div class="skills-card-meta">Core Languages</div>
                                </div>
                                <div class="skills-chip-row">
                                    <span class="skills-chip"><span class="skills-chip-icon">PY</span>Python</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">C++</span>C++</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">C#</span>C#</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">JS</span>JavaScript</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">HTML</span>HTML/CSS</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">G</span>Git</span>
                                </div>
                            </section>

                            <section class="skills-card">
                                <div class="skills-card-header">
                                    <div class="skills-card-title">Frameworks & Tools</div>
                                    <div class="skills-card-meta">Build Stack</div>
                                </div>
                                <div class="skills-chip-row">
                                    <span class="skills-chip"><span class="skills-chip-icon">N</span>Node.js</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">R</span>React</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">API</span>APIs</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">EX</span>Excel</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">LT</span>LTspice</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">U</span>Unity</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">AR</span>Arduino</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">AI</span>AI</span>
                                </div>
                            </section>

                            <section class="skills-card">
                                <div class="skills-card-header">
                                    <div class="skills-card-title">Electrical</div>
                                    <div class="skills-card-meta">Engineering Foundations</div>
                                </div>
                                <div class="skills-chip-row">
                                    <span class="skills-chip"><span class="skills-chip-icon">CA</span>Circuit Analysis</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">AC</span>AC Circuits</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">OP</span>Op-Amps</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">DL</span>Digital Logic</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">KCL</span>KCL/KVL</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">PH</span>Phasors</span>
                                </div>
                            </section>

                            <section class="skills-card">
                                <div class="skills-card-header">
                                    <div class="skills-card-title">Data & Automation</div>
                                    <div class="skills-card-meta">Engineering Workflow</div>
                                </div>
                                <div class="skills-chip-row">
                                    <span class="skills-chip"><span class="skills-chip-icon">CSV</span>CSV Processing</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">EX</span>Excel Processing</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">LOG</span>Data Logging</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">CAL</span>Calculations</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">PLT</span>Plotting</span>
                                    <span class="skills-chip"><span class="skills-chip-icon">AUT</span>Automation</span>
                                </div>
                            </section>
                        </div>
                    </div>
                `
            },
            contact: {
                title: 'Contact',
                subtitle: 'Get In Touch',
                content: `
                    <div class="project-card animate-fade-in-up">
                        <div class="project-card-title">Email</div>
                        <div class="project-card-desc">chhunsmanith@gmail.com</div>
                    </div>
                    <div class="project-card animate-fade-in-up" style="animation-delay: 40ms;">
                        <div class="project-card-title">GitHub</div>
                        <div class="project-card-desc">github.com/Manuith</div>
                    </div>
                    <div class="project-card animate-fade-in-up" style="animation-delay: 80ms;">
                        <div class="project-card-title">LinkedIn</div>
                        <div class="project-card-desc">linkedin.com/in/manith-chhun-14bba4258</div>
                    </div>
                    <p class="panel-body" style="margin-top: 18px;">Best way to reach me is by email, and you can also browse my work and background from the links above.</p>
                `
            },
            resume: {
                title: 'Resume',
                subtitle: 'Experience Overview',
                content: `
                    <a class="project-card animate-fade-in-up" href="assets/documents/Manith_Chhun_resumeEN.pdf" target="_blank" rel="noreferrer" style="display: block; text-decoration: none;">
                        <div class="project-card-title">English Resume</div>
                        <div class="project-card-desc">Download the English version of my resume.</div>
                    </a>
                    <a class="project-card animate-fade-in-up" href="assets/documents/Manith_Chhun_resumeFR.pdf" target="_blank" rel="noreferrer" style="display: block; margin-top: 18px; text-decoration: none; animation-delay: 40ms;">
                        <div class="project-card-title">French Resume</div>
                        <div class="project-card-desc">Download the French version of my resume.</div>
                    </a>
                `
            },
            work: {
                title: 'Experience',
                subtitle: 'Work History',
                content: `
                    <div class="education-timeline">
                        <div class="education-item">
                            <div class="education-dot"></div>
                            <div class="education-content">
                                <div class="education-period">2022 - 2023</div>
                                <div class="education-school">Sales Associate - Ecko Unltd</div>
                                <div class="education-degree">Rosemere, QC</div>
                                <div class="education-note">Delivered customer service and sales support in a fast-paced retail environment while building communication, teamwork, and problem-solving skills.</div>
                            </div>
                        </div>
                    </div>
                `
            }
        };

        function renderProjectsContent() {
            const project = PROJECTS_DATA[activeProjectIndex] ?? PROJECTS_DATA[0];
            const images = project.images?.length ? project.images : [{ label: project.imageLabel, note: 'Reserved space for your project image, mockup, or screenshot.' }];
            const normalizedImageIndex = ((activeProjectImageIndex % images.length) + images.length) % images.length;
            const tabs = PROJECTS_DATA.map((item, index) => `
                <button class="project-tab ${index === activeProjectIndex ? 'active' : ''}" onclick="setProjectTab(${index})">
                    ${item.name}
                </button>
            `).join('');
            const tags = project.stack.map(tag => `
                <span class="project-tag" style="border-color: ${PCB_GREEN}; color: ${PCB_GREEN};">${tag}</span>
            `).join('');
            const highlights = project.highlights.map(item => `<li>${item}</li>`).join('');
            const slides = images.map((item) => {
                const slideMarkup = item.src
                    ? `<img class="project-image-media" src="${item.src}" alt="${item.label}">`
                    : `
                        <div class="project-image-placeholder">
                            <div class="project-image-label">${item.label}</div>
                            <div class="project-image-note">${item.note}</div>
                        </div>
                    `;

                return `
                    <div class="project-image-slide">
                        ${slideMarkup}
                    </div>
                `;
            }).join('');

            return `
                <div class="project-tabs animate-fade-in-up">${tabs}</div>
                <div class="project-detail animate-fade-in-up" style="animation-delay: 40ms;">
                    <div class="project-image-shell">
                        <button class="project-image-arrow left" onclick="cycleProjectImage(-1)" aria-label="Previous project image">
                            <span class="project-image-arrow-icon" aria-hidden="true"></span>
                        </button>
                        <div class="project-image-viewport">
                            <div class="project-image-track" style="transform: translateX(-${normalizedImageIndex * 100}%);">
                                ${slides}
                            </div>
                        </div>
                        <button class="project-image-arrow right" onclick="cycleProjectImage(1)" aria-label="Next project image">
                            <span class="project-image-arrow-icon" aria-hidden="true"></span>
                        </button>
                        <div class="project-image-counter">${normalizedImageIndex + 1} / ${images.length}</div>
                    </div>
                    <div class="project-copy">
                        <div class="project-card-title">${project.name}</div>
                        <div class="project-detail-meta">${project.role}</div>
                        <div class="project-card-desc" style="font-size: 11px; color: rgba(255,255,255,0.58);">${project.summary}</div>
                        <div>${tags}</div>
                        <ul class="project-detail-list">${highlights}</ul>
                    </div>
                </div>
            `;
        }

        function setProjectTab(index) {
            activeProjectIndex = index;
            activeProjectImageIndex = 0;
            if (activeNode?.section === 'projects') {
                updatePanel();
                updateStatusDock();
            }
        }

        function cycleProjectImage(direction) {
            const project = PROJECTS_DATA[activeProjectIndex] ?? PROJECTS_DATA[0];
            const count = project.images?.length || 1;
            activeProjectImageIndex = (activeProjectImageIndex + direction + count) % count;
            if (activeNode?.section === 'projects') {
                updateProjectImageDisplay();
            }
        }

        function updateProjectImageDisplay() {
            const project = PROJECTS_DATA[activeProjectIndex] ?? PROJECTS_DATA[0];
            const count = project.images?.length || 1;
            const normalizedImageIndex = ((activeProjectImageIndex % count) + count) % count;
            const track = document.querySelector('.project-image-track');
            const counter = document.querySelector('.project-image-counter');

            if (track) {
                track.style.transform = `translateX(-${normalizedImageIndex * 100}%)`;
            }

            if (counter) {
                counter.textContent = `${normalizedImageIndex + 1} / ${count}`;
            }
        }

        function updateStatusDock() {
            const title = document.querySelector('.bottom-hint-title');
            const subtitle = document.querySelector('.bottom-hint-subtitle');
            const detail = document.querySelector('.bottom-hint-detail');
            if (!title || !subtitle || !detail) return;

            if (activeNode?.section === 'projects' && PROJECTS_DATA[activeProjectIndex]) {
                const project = PROJECTS_DATA[activeProjectIndex];
                title.textContent = project.name;
                subtitle.textContent = `Current Mission · ${project.status}`;
                detail.textContent = project.role;
            } else if (activeNode?.label) {
                title.textContent = activeNode.label;
                subtitle.textContent = 'Active Node';
                detail.textContent = activeNode.description || 'Section selected';
            } else {
                title.textContent = 'Portfolio Map';
                subtitle.textContent = 'Instructions';
                detail.textContent = 'Scroll or pinch to zoom · drag to pan · tap node to explore';
            }
        }

        function openProjectMission(index) {
            const projectsNode = NODES.find(node => node.id === 'projects');
            if (!projectsNode) return;
            activeProjectIndex = index;
            activeProjectImageIndex = 0;
            activeNode = projectsNode;
            updatePanel();
            updateStatusDock();
        }

        function openNodeById(nodeId) {
            const node = NODES.find(item => item.id === nodeId);
            if (!node) return;
            if (node.section === 'projects') {
                activeProjectIndex = 0;
                activeProjectImageIndex = 0;
            }
            activeNode = node;
            updatePanel();
            updateStatusDock();
        }

        function updatePanel() {
            const panel = document.querySelector('.side-panel');
            const backdrop = document.querySelector('.panel-backdrop');
            const content = SECTION_CONTENT[activeNode.section];

            if (!content) return;
            const body = activeNode.section === 'projects' ? renderProjectsContent() : content.content;

            panel.innerHTML = `
                <button class="side-panel-close" onclick="closePanel()" aria-label="Close panel">X</button>
                <div class="panel-title">${content.title}</div>
                <div class="panel-subtitle">${content.subtitle}</div>
                ${body}
            `;

            panel.classList.add('open');
            backdrop.classList.add('active');

        }

        function closePanel() {
            const panel = document.querySelector('.side-panel');
            const backdrop = document.querySelector('.panel-backdrop');

            panel.classList.remove('open');
            backdrop.classList.remove('active');
            activeNode = null;
            updateStatusDock();
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
                        document.querySelector('.missions-dock').classList.add('visible');
                        updateStatusDock();
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
            canvas.addEventListener('touchstart', onTouchStart, { passive: false });
            canvas.addEventListener('touchmove', onTouchMove, { passive: false });
            canvas.addEventListener('touchend', onTouchEnd, { passive: false });
            canvas.addEventListener('touchcancel', onTouchEnd, { passive: false });

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

                <div class="top-links" style="opacity: 0; transition: opacity 0.8s ease 0.35s;">
                    ${PROFILE_LINKS.map(link => `
                        ${link.action === 'panel'
                            ? `
                                <button class="top-link" type="button" onclick="openNodeById('${link.targetNodeId}')" aria-label="${link.label}" title="${link.label}">
                                    <span class="top-link-icon">${link.icon}</span>
                                    <span class="top-link-label">${link.label}</span>
                                </button>
                            `
                            : `
                                <a class="top-link" href="${link.href}" ${link.href.startsWith('mailto:') ? '' : 'target="_blank" rel="noreferrer"'} aria-label="${link.label}" title="${link.label}">
                                    <span class="top-link-icon">${link.icon}</span>
                                    <span class="top-link-label">${link.label}</span>
                                </a>
                            `
                        }
                    `).join('')}
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
                    <button class="zoom-btn" onclick="fireZoom('out')" title="Zoom out">-</button>
                </div>

                <div class="bottom-hint">
                    <div class="bottom-hint-title">Portfolio Map</div>
                    <div class="bottom-hint-subtitle">Instructions</div>
                    <div class="bottom-hint-detail">Scroll or pinch to zoom · drag to pan · tap node to explore</div>
                </div>

                <div class="missions-dock">
                    <div class="missions-title">Current Mission Status</div>
                    ${PROJECTS_DATA.map((project, index) => `
                        <button class="mission-link" onclick="openProjectMission(${index})">
                            <span class="mission-name">${project.name}</span>
                            <span class="mission-status">${project.status}</span>
                        </button>
                    `).join('')}
                </div>

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
                document.querySelector('.top-links').style.opacity = '1';
            }, 300);

            updateStatusDock();
            init();
        });

        // Global functions
        window.closePanel = closePanel;
        window.fireZoom = fireZoom;
        window.openNodeById = openNodeById;
