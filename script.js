        // ============================================================================
        // Portfolio Mind Map - Standalone Version (No Build Required)
        // ============================================================================

        const PCB_GREEN = '#51f1b9';
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
            { id: 'root', label: 'ME', x: 0.50, y: 0.50, color: NODE_COLORS.root, size: 34, section: 'root', description: 'Intro & how to start' },
            { id: 'home', label: 'Intro', x: 0.53, y: 0.345, color: NODE_COLORS.home, size: 21, parentId: 'root', section: 'home', description: 'Introduction & overview' },
            { id: 'projects', label: 'Projects', x: 0.60, y: 0.42, color: NODE_COLORS.projects, size: 23, parentId: 'root', section: 'projects', description: 'Selected work & case studies' },
            { id: 'about', label: 'Education', x: 0.61, y: 0.56, color: NODE_COLORS.about, size: 20, parentId: 'root', section: 'about', description: 'School history & academic path' },
            { id: 'skills', label: 'Skills', x: 0.50, y: 0.65, color: NODE_COLORS.skills, size: 22, parentId: 'root', section: 'skills', description: 'Technical expertise' },
            { id: 'contact', label: 'Contact', x: 0.39, y: 0.56, color: NODE_COLORS.contact, size: 20, parentId: 'root', section: 'contact', description: 'Get in touch' },
            { id: 'resume', label: 'Resume/CV', x: 0.40, y: 0.42, color: NODE_COLORS.resume, size: 19, parentId: 'root', section: 'resume', description: 'Resume/CV' },
            { id: 'work', label: 'Experience', x: 0.425, y: 0.362, color: NODE_COLORS.work, size: 21, parentId: 'root', section: 'work', description: 'Work history' },
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
        const TOUCH_TAP_SLOP = 18;
        const CAMERA_DESIGN_WIDTH = 1920;
        const CAMERA_DESIGN_HEIGHT = 1080;
        const ROOT_SCREEN_TARGET = { x: 0.50, y: 0.50 };
        const MIN_INITIAL_ZOOM = 1.58;
        const MAX_INITIAL_ZOOM = 2.05;

        let canvas, ctx;
        let particles = [];
        let nodeStates = new Map();
        let hoveredNode = null;
        let activeNode = null;
        let activeProjectIndex = 0;
        let activeProjectVariantIndex = 0;
        let activeProjectImageIndex = 0;
        let zoom = 1;
        let pan = { x: 0, y: 0 };
        let canvasView = { width: 0, height: 0, dpr: 1 };
        let cameraWasAdjusted = false;
        let drag = { active: false, sx: 0, sy: 0, px: 0, py: 0 };
        let dashOffset = 0;
        let touchState = {
            mode: null,
            startZoom: 1,
            startDistance: 0,
            startPan: { x: 0, y: 0 },
            startCenter: { x: 0, y: 0 },
            tapStart: { x: 0, y: 0 },
            lastPoint: { x: 0, y: 0 },
            tapMoved: false,
        };
        let introComplete = false;

        function lerp(a, b, t) {
            return a + (b - a) * t;
        }

        function clamp(value, min, max) {
            return Math.max(min, Math.min(max, value));
        }

        function getResponsiveInitialZoom(width, height) {
            const viewportScale = Math.min(width / CAMERA_DESIGN_WIDTH, height / CAMERA_DESIGN_HEIGHT);
            return clamp(2.12 * viewportScale, MIN_INITIAL_ZOOM, MAX_INITIAL_ZOOM);
        }

        function resizeCanvas() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const dpr = Math.max(1, window.devicePixelRatio || 1);

            canvasView = { width, height, dpr };
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function setInitialCamera() {
            const rootNode = NODES.find(node => node.id === 'root') ?? NODES[0];
            if (!rootNode || !canvas) return;

            zoom = getResponsiveInitialZoom(canvasView.width, canvasView.height);
            pan = {
                x: canvasView.width * ROOT_SCREEN_TARGET.x - rootNode.x * canvasView.width * zoom,
                y: canvasView.height * ROOT_SCREEN_TARGET.y - rootNode.y * canvasView.height * zoom,
            };
        }

        function hexToRgb(hex) {
            const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return r ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) } : null;
        }

        function initParticles() {
            particles = Array.from({ length: PARTICLE_COUNT }, () => ({
                x: Math.random() * canvasView.width,
                y: Math.random() * canvasView.height,
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
                x: node.x * canvasView.width * zoom + pan.x,
                y: node.y * canvasView.height * zoom + pan.y,
            };
        }

        function getNodeZoomScale() {
            return Math.max(1, Math.min(1.55, Math.pow(zoom, 0.4)));
        }

        function getNodeBox(node, state, prominent = false) {
            const baseFs = node.id === 'root' ? 13 : 11;
            const fs = prominent ? Math.max(baseFs + 1, baseFs + node.size * 0.12) : baseFs;
            ctx.save();
            ctx.font = `${prominent ? '500' : '400'} ${fs}px 'JetBrains Mono', monospace`;
            const tw = ctx.measureText(node.label).width;
            ctx.restore();

            const px = node.id === 'root' ? 16 : (prominent ? 14 : 12);
            const py = node.id === 'root' ? 10 : (prominent ? 10 : 8);
            const width = Math.max(node.id === 'root' ? 86 : 76, tw + px * 2);
            const height = Math.max(node.id === 'root' ? 34 : 28, fs + py * 2);

            return { fs, tw, width, height };
        }

        function getNodeLabelLayout(node, state, prominent = false) {
            const metrics = getNodeBox(node, state, prominent);
            const zoomScale = getNodeZoomScale();
            const labelWidth = metrics.width * (state?.scale ?? 1) * zoomScale;
            const labelHeight = metrics.height * (state?.scale ?? 1) * zoomScale;
            const p = nodePos(node);
            const centerX = p.x;
            const centerY = p.y;

            return {
                ...metrics,
                labelWidth,
                labelHeight,
                centerX,
                centerY,
                x: centerX - labelWidth / 2,
                y: centerY - labelHeight / 2,
            };
        }

        function getNodeAnchor(node, state, towardPoint) {
            if (node.id === 'root') {
                const p = nodePos(node);
                const zoomScale = getNodeZoomScale();
                const radius = node.size * (state?.scale ?? 1) * zoomScale * 0.58;
                const dx = towardPoint.x - p.x;
                const dy = towardPoint.y - p.y;
                const len = Math.hypot(dx, dy) || 1;

                return {
                    x: p.x + (dx / len) * radius,
                    y: p.y + (dy / len) * radius,
                };
            }

            const layout = getNodeLabelLayout(node, state, false);
            const cx = layout.centerX;
            const cy = layout.centerY;
            const dx = towardPoint.x - cx;
            const dy = towardPoint.y - cy;
            const halfW = layout.labelWidth / 2;
            const halfH = layout.labelHeight / 2;

            if (Math.abs(dx) < 0.001 && Math.abs(dy) < 0.001) {
                return { x: cx, y: cy };
            }

            const scaleX = halfW / Math.max(Math.abs(dx), 0.001);
            const scaleY = halfH / Math.max(Math.abs(dy), 0.001);
            const scale = Math.min(scaleX, scaleY);

            return {
                x: cx + dx * scale,
                y: cy + dy * scale,
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
                const nodeRadius = n.size * s * zoomScale * (n.id === 'root' ? 0.62 : 0.82);
                const touchMultiplier = touchState.mode ? 2.15 : 1.6;
                let hit = d < nodeRadius * touchMultiplier;

                if (!hit && n.id !== 'root') {
                    const layout = getNodeLabelLayout(n, nodeStates.get(n.id), false);
                    const pad = touchState.mode ? 10 : 0;
                    hit = sx >= layout.x - pad && sx <= layout.x + layout.labelWidth + pad && sy >= layout.y - pad && sy <= layout.y + layout.labelHeight + pad;
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
            ctx.fillRect(0, 0, canvasView.width, canvasView.height);

            // Particles
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvasView.width;
                if (p.x > canvasView.width) p.x = 0;
                if (p.y < 0) p.y = canvasView.height;
                if (p.y > canvasView.height) p.y = 0;
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
                const fromState = nodeStates.get(fn.id);
                const toState = nodeStates.get(tn.id);
                const start = getNodeAnchor(fn, fromState, tp);
                const end = getNodeAnchor(tn, toState, fp);
                const seed = (fn.id.charCodeAt(0) * 3 + tn.id.charCodeAt(0) * 7) % 60 - 30;
                const cx = (start.x + end.x) / 2 + seed;
                const cy = (start.y + end.y) / 2 + seed * 0.6;

                ctx.save();
                ctx.beginPath();
                ctx.moveTo(start.x, start.y);
                ctx.quadraticCurveTo(cx, cy, end.x, end.y);

                if (isActive) {
                    ctx.strokeStyle = 'rgba(255,255,255,0.95)';
                    ctx.lineWidth = 1.1;
                    ctx.setLineDash([4, 8]);
                } else if (isHov) {
                    ctx.strokeStyle = 'rgba(255,255,255,0.82)';
                    ctx.lineWidth = 0.9;
                    ctx.setLineDash([3, 7]);
                } else {
                    ctx.strokeStyle = 'rgba(220,220,220,0.24)';
                    ctx.lineWidth = 0.9;
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
                if (!node.label) continue;
                const state = nodeStates.get(node.id);
                if (!state) continue;

                const zoomScale = getNodeZoomScale();
                const isActive = activeNode?.id === node.id;
                const isHov = hoveredNode?.id === node.id;
                const prominent = isActive || isHov;
                const p = nodePos(node);

                if (node.id === 'root') {
                    const radius = node.size * state.scale * zoomScale * 0.58;

                    ctx.save();
                    ctx.font = `${prominent ? '500' : '400'} ${Math.round(14 * state.scale * zoomScale)}px 'JetBrains Mono', monospace`;
                    ctx.textBaseline = 'middle';
                    ctx.textAlign = 'center';

                    const glowAlpha = isActive ? 0.22 : isHov ? 0.14 : 0.06;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, radius + 4, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(81,241,185,${glowAlpha})`;
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(24,24,24,0.94)';
                    ctx.fill();

                    ctx.strokeStyle = isActive ? 'rgba(81,241,185,0.96)' : isHov ? 'rgba(81,241,185,0.72)' : 'rgba(81,241,185,0.28)';
                    ctx.lineWidth = isActive ? 1.4 : isHov ? 1.05 : 0.9;
                    ctx.stroke();

                    ctx.fillStyle = isActive ? '#ffffff' : isHov ? 'rgba(232,255,247,0.96)' : 'rgba(81,241,185,0.72)';
                    ctx.fillText(node.label, p.x, p.y + 1);
                    ctx.restore();
                    continue;
                }

                const layout = getNodeLabelLayout(node, state, prominent);

                ctx.save();
                ctx.font = `${prominent ? '500' : '400'} ${Math.round(layout.fs * state.scale * zoomScale)}px 'JetBrains Mono', monospace`;
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';

                const glowAlpha = isActive ? 0.22 : isHov ? 0.14 : 0.05;
                ctx.fillStyle = `rgba(81,241,185,${glowAlpha})`;
                ctx.fillRect(layout.x - 3, layout.y - 3, layout.labelWidth + 6, layout.labelHeight + 6);

                ctx.fillStyle = prominent ? 'rgba(18,18,18,0.97)' : 'rgba(24,24,24,0.90)';
                ctx.fillRect(layout.x, layout.y, layout.labelWidth, layout.labelHeight);

                ctx.strokeStyle = isActive ? 'rgba(81,241,185,0.96)' : isHov ? 'rgba(81,241,185,0.72)' : 'rgba(81,241,185,0.26)';
                ctx.lineWidth = isActive ? 1.2 : isHov ? 1 : 0.85;
                ctx.strokeRect(layout.x, layout.y, layout.labelWidth, layout.labelHeight);

                ctx.fillStyle = isActive ? '#ffffff' : isHov ? 'rgba(232,255,247,0.96)' : 'rgba(81,241,185,0.72)';
                ctx.fillText(node.label, layout.centerX, layout.centerY + 1);
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
                cameraWasAdjusted = true;
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
            cameraWasAdjusted = true;
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
                e.preventDefault();
                const touch = e.touches[0];
                drag = { active: true, sx: touch.clientX, sy: touch.clientY, px: pan.x, py: pan.y };
                touchState = {
                    mode: 'pan',
                    startZoom: zoom,
                    startDistance: 0,
                    startPan: { x: pan.x, y: pan.y },
                    startCenter: { x: touch.clientX, y: touch.clientY },
                    tapStart: { x: touch.clientX, y: touch.clientY },
                    lastPoint: { x: touch.clientX, y: touch.clientY },
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
                    lastPoint: { x: 0, y: 0 },
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
                cameraWasAdjusted = true;
                touchState.lastPoint = { x: touch.clientX, y: touch.clientY };

                if (Math.hypot(touch.clientX - touchState.tapStart.x, touch.clientY - touchState.tapStart.y) > TOUCH_TAP_SLOP) {
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
                cameraWasAdjusted = true;
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
                    lastPoint: { x: touch.clientX, y: touch.clientY },
                    tapMoved: true,
                };
                return;
            }

            if (touchState.mode === 'pan' && e.touches.length === 0) {
                e.preventDefault();
                drag.active = false;
                if (!touchState.tapMoved) {
                    const hit = hitTest(touchState.lastPoint.x || touchState.tapStart.x, touchState.lastPoint.y || touchState.tapStart.y);
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
                role: 'Prototype Series',
                imageLabel: 'Generator Monitoring System',
                status: 'Progress',
                stack: ['Arduino', 'Python', 'Excel', 'Energy Systems'],
                variants: [
                    {
                        name: 'Prototype V1',
                        role: 'Prototype V1',
                        imageLabel: 'Generator Monitoring System',
                        images: [
                            {
                                label: 'TinkerCAD Prototype Layout',
                                note: 'Prototype wiring layout for the brushed DC generator monitoring system.',
                                src: 'assets/images/projects/tinkercad-v1.png',
                                fitClass: 'project-image-media--schematic'
                            },
                            {
                                label: 'Arduino Prototype Build',
                                note: 'Physical Arduino and breadboard test setup used during early load-testing experiments.',
                                src: 'assets/images/projects/arduino-v1.jpg',
                                fitClass: 'project-image-media--photo'
                            }
                        ],
                        summary: 'Built a small-scale wind energy harvesting prototype using a brushed DC motor as a generator and an Arduino-based monitoring system. This version focused on learning how small generator systems behave under different electrical loads through safe measurement, resistive testing, and hands-on iteration before moving toward larger brushless systems.',
                        highlights: [
                            'Used a brushed DC motor as a small generator to study output behavior under changing resistive loads.',
                            'Implemented a voltage divider and Arduino ADC monitoring to safely capture voltage, current, and power-related data.',
                            'Used LEDs as quick visual indicators during testing to observe load-driven changes in generator behavior.',
                            'Built this version as a hands-on learning step before progressing toward larger brushless generator systems.'
                        ]
                    },
                    {
                        name: 'Prototype V2',
                        role: 'Prototype V2',
                        imageLabel: 'Upgraded System',
                        images: [
                            {
                                label: 'Prototype V2 Build',
                                note: 'Add your upgraded physical prototype photo here.',
                                fitClass: 'project-image-media--photo'
                            },
                            {
                                label: 'Prototype V2 Schematic',
                                note: 'Add your revised schematic, CAD layout, or instrumentation setup here.',
                                fitClass: 'project-image-media--schematic'
                            }
                        ],
                        summary: 'Use this V2 tab to describe the next iteration of the harvester, what changed from V1, and how the upgraded design improved testing, measurement, or power capture.',
                        highlights: [
                            'List the major hardware or circuit changes introduced in Prototype V2.',
                            'Explain the updated measurement or data acquisition process used in this version.',
                            'Compare Prototype V2 performance, stability, or output against Prototype V1.',
                            'Summarize what this version taught you and what the next iteration should improve.'
                        ]
                    }
                ]
            },
            {
                name: 'Dream Game RPG',
                role: 'Team Project',
                imageLabel: 'Gameplay Scene',
                status: 'Completed',
                images: [
                    {
                        label: 'Gameplay Scene',
                        note: 'Main Unity gameplay and character playground view.',
                        src: 'assets/images/projects/character_playground.png',
                        fitClass: 'project-image-media--photo'
                    },
                    {
                        label: 'Procedural Motion',
                        note: 'Inverse kinematics arm simulation and procedural animation logic.',
                        src: 'assets/images/projects/FABRIK.png',
                        fitClass: 'project-image-media--schematic'
                    },
                    {
                        label: 'Combat System',
                        note: 'State machine and gameplay interaction logic.',
                        src: 'assets/images/projects/state_machine.png',
                        fitClass: 'project-image-media--schematic'
                    }
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
                    { label: 'Platform Overview', note: 'Add the main app view, dashboard, or filtered feed layout here.', fitClass: 'project-image-media--photo' },
                    { label: 'Filtering System', note: 'Use this slot for article scoring, ranking logic, or AI-assisted filtering.', fitClass: 'project-image-media--schematic' },
                    { label: 'Automation View', note: 'Use this slot for scraping, storage, or personalized delivery workflow visuals.', fitClass: 'project-image-media--photo' }
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
                    { label: 'LTspice Analysis', note: 'Add a circuit simulation screenshot with transient or AC response plots.', fitClass: 'project-image-media--schematic' },
                    { label: 'Theory vs Simulation', note: 'Use this slot for calculations compared against LTspice results.', fitClass: 'project-image-media--schematic' },
                    { label: 'Lab Measurements', note: 'Use this slot for breadboard builds, measured behavior, or validation results.', fitClass: 'project-image-media--photo' }
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

        const DEVICON_SKILL_ICONS = {
            cpp: 'devicon-cplusplus-plain colored',
            csharp: 'devicon-csharp-plain colored',
            javascript: 'devicon-javascript-plain colored',
            git: 'devicon-git-plain colored',
            node: 'devicon-nodejs-plain colored',
            react: 'devicon-react-original colored',
            unity: 'devicon-unity-plain',
            arduino: 'devicon-arduino-plain colored',
        };

        function skillGlyph(type) {
            const glyphs = {
                python: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="python-blue" d="M12 2c-4 0-4.8 1.7-4.8 1.7v3.8H12v1.1H5.3S2 8.2 2 13.4c0 5.1 2.9 4.9 2.9 4.9h1.7v-2.4s-.1-2.9 2.8-2.9h4.8s2.7 0 2.7-2.6V4.7S17.4 2 12 2Z"/><path class="python-yellow" d="M12 22c4 0 4.8-1.7 4.8-1.7v-3.8H12v-1.1h6.7s3.3.4 3.3-4.8c0-5.1-2.9-4.9-2.9-4.9h-1.7v2.4s.1 2.9-2.8 2.9H9.8s-2.7 0-2.7 2.6v5.7S6.6 22 12 22Z"/><circle cx="9" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>`,
                excel: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5 12 4v16L4 18.5v-13Z"/><path d="M12 6h8v12h-8"/><path d="M15 9h3M15 12h3M15 15h3"/><path d="m6.5 9 3 6M9.5 9l-3 6"/></svg>`,
                api: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 8 4 12l4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>`,
                ltspice: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 5 13h6l-1 9 9-13h-6l1-7Z"/></svg>`,
                ai: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16M4 12h16M7 7l10 10M17 7 7 17"/><circle cx="12" cy="12" r="3"/></svg>`,
                circuit: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h4M16 12h4M8 12a4 4 0 0 1 8 0 4 4 0 0 1-8 0Z"/><path d="M12 4v4M12 16v4"/></svg>`,
                ac: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12c2.5-6 5.5-6 8 0s5.5 6 10 0"/></svg>`,
                opamp: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5v14l12-7L6 5Z"/><path d="M3 9h3M3 15h3M18 12h3M7.5 9h2M7.5 15h2M8.5 14v2"/></svg>`,
                digital: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h5v10H4zM15 7h5v10h-5zM9 12h6"/><path d="M6.5 10v4M17.5 10v4"/></svg>`,
                kcl: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/></svg>`,
                phasor: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 18h14M6 18 17 7"/><path d="M13 7h4v4"/><path d="M8 18a7 7 0 0 1 2-5"/></svg>`,
                csv: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h9l3 3v15H6V3Z"/><path d="M14 3v4h4M8 11h8M8 15h8M8 19h5"/></svg>`,
                log: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14v14H5z"/><path d="M8 9h8M8 12h8M8 15h5"/></svg>`,
                calc: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18H6z"/><path d="M8 6h8v3H8zM8 12h2M12 12h2M16 12h0M8 15h2M12 15h2M16 15h0M8 18h6"/></svg>`,
                plot: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19h16M5 17l4-5 4 3 6-8"/><circle cx="9" cy="12" r="1.4"/><circle cx="13" cy="15" r="1.4"/><circle cx="19" cy="7" r="1.4"/></svg>`,
                automation: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/></svg>`,
            };
            return glyphs[type] ?? `<span>${type.toUpperCase().slice(0, 3)}</span>`;
        }

        function skillIcon(icon) {
            if (icon === 'htmlcss') {
                return `<span class="skills-chip-icon skills-chip-icon--stack skills-chip-icon--htmlcss" aria-hidden="true"><i class="devicon-html5-plain colored"></i><i class="devicon-css3-plain colored"></i></span>`;
            }

            if (icon === 'python') {
                return `<span class="skills-chip-icon skills-chip-icon--python">${skillGlyph(icon)}</span>`;
            }

            const devicon = DEVICON_SKILL_ICONS[icon];
            if (devicon) {
                return `<span class="skills-chip-icon skills-chip-icon--${icon}" aria-hidden="true"><i class="${devicon}"></i></span>`;
            }

            return `<span class="skills-chip-icon skills-chip-icon--custom skills-chip-icon--${icon}">${skillGlyph(icon)}</span>`;
        }

        function skillChip(label, icon) {
            return `<span class="skills-chip">${skillIcon(icon)}<span class="skills-chip-label">${label}</span></span>`;
        }

        function skillIconKeyForLabel(label) {
            const normalized = label.toLowerCase();
            const iconKeys = {
                'arduino': 'arduino',
                'python': 'python',
                'excel': 'excel',
                'energy systems': 'circuit',
                'unity': 'unity',
                'c#': 'csharp',
                'animation': 'automation',
                'gameplay': 'unity',
                'apis': 'api',
                'web scraping': 'api',
                'ai': 'ai',
                'ltspice': 'ltspice',
                'circuit analysis': 'circuit',
                'ac circuits': 'ac',
                'op-amps': 'opamp',
            };
            return iconKeys[normalized] ?? null;
        }

        const SECTION_CONTENT = {
            root: {
                title: 'ME',
                subtitle: 'Intro & How To Start',
                content: `<p class="panel-body" style="margin-bottom: 20px;">
                        I'm an Electrical Engineering student with a background in computer science. I've worked on a Unity/C# project, and I'm currently building projects with Arduino and electronic circuits.
                        I'm interested in power/energy systems and automation. Recently, I've also become interested in embedded systems and electronics. I enjoy building things that combine hardware and software, and I like understanding how real systems work through hands-on projects. 
                            </p>`
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
                                    ${skillChip('Python', 'python')}
                                    ${skillChip('C++', 'cpp')}
                                    ${skillChip('C#', 'csharp')}
                                    ${skillChip('JavaScript', 'javascript')}
                                    ${skillChip('HTML/CSS', 'htmlcss')}
                                    ${skillChip('Git', 'git')}
                                </div>
                            </section>

                            <section class="skills-card">
                                <div class="skills-card-header">
                                    <div class="skills-card-title">Frameworks & Tools</div>
                                    <div class="skills-card-meta">Build Stack</div>
                                </div>
                                <div class="skills-chip-row">
                                    ${skillChip('Node.js', 'node')}
                                    ${skillChip('React', 'react')}
                                    ${skillChip('APIs', 'api')}
                                    ${skillChip('Excel', 'excel')}
                                    ${skillChip('LTspice', 'ltspice')}
                                    ${skillChip('Unity', 'unity')}
                                    ${skillChip('Arduino', 'arduino')}
                                    ${skillChip('AI', 'ai')}
                                </div>
                            </section>

                            <section class="skills-card">
                                <div class="skills-card-header">
                                    <div class="skills-card-title">Electrical</div>
                                    <div class="skills-card-meta">Engineering Foundations</div>
                                </div>
                                <div class="skills-chip-row">
                                    ${skillChip('Circuit Analysis', 'circuit')}
                                    ${skillChip('AC Circuits', 'ac')}
                                    ${skillChip('Op-Amps', 'opamp')}
                                    ${skillChip('Digital Logic', 'digital')}
                                    ${skillChip('KCL/KVL', 'kcl')}
                                    ${skillChip('Phasors', 'phasor')}
                                </div>
                            </section>

                            <section class="skills-card">
                                <div class="skills-card-header">
                                    <div class="skills-card-title">Data & Automation</div>
                                    <div class="skills-card-meta">Engineering Workflow</div>
                                </div>
                                <div class="skills-chip-row">
                                    ${skillChip('CSV Processing', 'csv')}
                                    ${skillChip('Excel Processing', 'excel')}
                                    ${skillChip('Data Logging', 'log')}
                                    ${skillChip('Calculations', 'calc')}
                                    ${skillChip('Plotting', 'plot')}
                                    ${skillChip('Automation', 'automation')}
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

        function getActiveProjectView(project = PROJECTS_DATA[activeProjectIndex] ?? PROJECTS_DATA[0]) {
            if (project?.variants?.length) {
                return project.variants[activeProjectVariantIndex] ?? project.variants[0];
            }
            return project;
        }

        function renderProjectsContent() {
            const project = PROJECTS_DATA[activeProjectIndex] ?? PROJECTS_DATA[0];
            const projectView = getActiveProjectView(project);
            const images = projectView.images?.length ? projectView.images : [{ label: projectView.imageLabel || project.imageLabel, note: 'Reserved space for your project image, mockup, or screenshot.' }];
            const normalizedImageIndex = ((activeProjectImageIndex % images.length) + images.length) % images.length;
            const tabs = PROJECTS_DATA.map((item, index) => `
                <button class="project-tab ${index === activeProjectIndex ? 'active' : ''}" onclick="setProjectTab(${index})">
                    ${item.name}
                </button>
            `).join('');
            const variantTabs = project.variants?.length
                ? `<div class="project-tabs animate-fade-in-up" style="animation-delay: 18ms; margin-top: 12px; margin-bottom: 14px;">${project.variants.map((item, index) => `
                    <button class="project-tab ${index === activeProjectVariantIndex ? 'active' : ''}" onclick="setProjectVariant(${index})">
                        ${item.name}
                    </button>
                `).join('')}</div>`
                : '';
            const tags = (projectView.stack || project.stack || []).map(tag => {
                const iconKey = skillIconKeyForLabel(tag);
                return `
                    <span class="project-tag" style="border-color: ${PCB_GREEN}; color: ${PCB_GREEN};">
                        ${iconKey ? skillIcon(iconKey) : ''}
                        <span>${tag}</span>
                    </span>
                `;
            }).join('');
            const highlights = (projectView.highlights || project.highlights || []).map(item => `<li>${item}</li>`).join('');
            const slides = images.map((item, index) => {
                const slideMarkup = item.src
                    ? `
                        <button class="project-image-open" type="button" onclick="openProjectImage(${index})" aria-label="Open full image: ${item.label}">
                            <img class="project-image-media ${item.fitClass || ""}" src="${item.src}" alt="${item.label}">
                        </button>
                    `
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
                ${variantTabs}
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
                        <div class="project-detail-meta">${projectView.role || project.role}</div>
                        <div class="project-card-desc project-detail-summary">${projectView.summary || project.summary}</div>
                        <div>${tags}</div>
                        <details class="project-more">
                            <summary class="project-more-toggle">See more</summary>
                            <ul class="project-detail-list">${highlights}</ul>
                        </details>
                    </div>
                </div>
            `;
        }

        function setProjectTab(index) {
            activeProjectIndex = index;
            activeProjectVariantIndex = 0;
            activeProjectImageIndex = 0;
            if (activeNode?.section === 'projects') {
                updatePanel();
                updateStatusDock();
            }
        }

        function setProjectVariant(index) {
            activeProjectVariantIndex = index;
            activeProjectImageIndex = 0;
            if (activeNode?.section === 'projects') {
                updatePanel();
                updateStatusDock();
            }
        }
        function cycleProjectImage(direction) {
            const project = PROJECTS_DATA[activeProjectIndex] ?? PROJECTS_DATA[0];
            const projectView = getActiveProjectView(project);
            const count = projectView.images?.length || 1;
            activeProjectImageIndex = (activeProjectImageIndex + direction + count) % count;
            if (activeNode?.section === 'projects') {
                updateProjectImageDisplay();
            }
            if (document.querySelector('.image-lightbox.active')) {
                updateProjectImageLightbox();
            }
        }

        function updateProjectImageDisplay() {
            const project = PROJECTS_DATA[activeProjectIndex] ?? PROJECTS_DATA[0];
            const projectView = getActiveProjectView(project);
            const count = projectView.images?.length || 1;
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

        function updateProjectImageLightbox() {
            const project = PROJECTS_DATA[activeProjectIndex] ?? PROJECTS_DATA[0];
            const projectView = getActiveProjectView(project);
            const images = projectView.images?.length ? projectView.images : [];
            const count = images.length || 1;
            const normalizedImageIndex = ((activeProjectImageIndex % count) + count) % count;
            const image = images[normalizedImageIndex];
            const lightbox = document.querySelector('.image-lightbox');
            const media = lightbox?.querySelector('.image-lightbox-media');

            if (!lightbox || !media || !image?.src) return;
            media.src = image.src;
            media.alt = image.label || project.name;
        }

        function openProjectImage(index = activeProjectImageIndex) {
            const project = PROJECTS_DATA[activeProjectIndex] ?? PROJECTS_DATA[0];
            const projectView = getActiveProjectView(project);
            const images = projectView.images?.length ? projectView.images : [];
            const target = images[index];
            if (!target?.src) return;

            activeProjectImageIndex = index;
            updateProjectImageDisplay();
            updateProjectImageLightbox();
            const lightbox = document.querySelector('.image-lightbox');
            lightbox?.classList.add('active');
            lightbox?.setAttribute('aria-hidden', 'false');
        }

        function closeProjectImage() {
            const lightbox = document.querySelector('.image-lightbox');
            lightbox?.classList.remove('active');
            lightbox?.setAttribute('aria-hidden', 'true');
        }

        function cycleProjectLightbox(direction) {
            cycleProjectImage(direction);
        }

        function updateStatusDock() {
            const title = document.querySelector('.bottom-hint-title');
            const subtitle = document.querySelector('.bottom-hint-subtitle');
            const detail = document.querySelector('.bottom-hint-detail');
            if (!title || !subtitle || !detail) return;

            if (activeNode?.section === 'projects' && PROJECTS_DATA[activeProjectIndex]) {
                const project = PROJECTS_DATA[activeProjectIndex];
                title.textContent = project.name;
                subtitle.textContent = `Current Mission ? ${project.status}`;
                detail.textContent = project.role;
            } else if (activeNode?.label) {
                title.textContent = activeNode.label;
                subtitle.textContent = 'Active Node';
                detail.textContent = activeNode.description || 'Section selected';
            } else {
                title.textContent = 'Portfolio Map';
                subtitle.textContent = 'Instructions';
                detail.textContent = 'Scroll or pinch to zoom ? drag to pan ? tap node to explore';
            }
        }

        function openProjectMission(index) {
            const projectsNode = NODES.find(node => node.id === 'projects');
            if (!projectsNode) return;
            activeProjectIndex = index;
            activeProjectVariantIndex = 0;
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
                activeProjectVariantIndex = 0;
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
            cameraWasAdjusted = true;
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

            resizeCanvas();
            setInitialCamera();

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
                resizeCanvas();
                if (!cameraWasAdjusted) {
                    setInitialCamera();
                }
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
                    <div class="bottom-hint-detail">Scroll or pinch to zoom ? drag to pan ? tap node to explore</div>
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

                <div class="image-lightbox" onclick="closeProjectImage()" aria-hidden="true">
                    <button class="image-lightbox-close" type="button" onclick="event.stopPropagation(); closeProjectImage();" aria-label="Close full image">X</button>
                    <button class="image-lightbox-nav image-lightbox-nav--prev" type="button" onclick="event.stopPropagation(); cycleProjectLightbox(-1);" aria-label="Previous full image">
                        <span class="project-image-arrow-icon" aria-hidden="true"></span>
                    </button>
                    <figure class="image-lightbox-figure" onclick="event.stopPropagation();">
                        <img class="image-lightbox-media" src="" alt="">
                    </figure>
                    <button class="image-lightbox-nav image-lightbox-nav--next" type="button" onclick="event.stopPropagation(); cycleProjectLightbox(1);" aria-label="Next full image">
                        <span class="project-image-arrow-icon" aria-hidden="true"></span>
                    </button>
                </div>

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
        window.openProjectImage = openProjectImage;
        window.closeProjectImage = closeProjectImage;
        window.cycleProjectLightbox = cycleProjectLightbox;

        document.addEventListener('keydown', (event) => {
            if (!document.querySelector('.image-lightbox.active')) return;
            if (event.key === 'Escape') closeProjectImage();
            if (event.key === 'ArrowLeft') cycleProjectLightbox(-1);
            if (event.key === 'ArrowRight') cycleProjectLightbox(1);
        });

function syncProjectImageShell() {
    const shell = document.querySelector('.project-image-shell');
    if (!shell) return;

    const project = PROJECTS_DATA[activeProjectIndex] ?? PROJECTS_DATA[0];
    const projectView = getActiveProjectView(project);
    const count = projectView.images?.length || 1;
    const normalizedImageIndex = ((activeProjectImageIndex % count) + count) % count;
    const slides = document.querySelectorAll('.project-image-slide');
    const activeSlide = slides[normalizedImageIndex];
    const img = activeSlide?.querySelector('.project-image-media');

    if (!img || !img.naturalWidth || !img.naturalHeight) {
        shell.style.removeProperty('--project-shell-width');
        shell.style.removeProperty('--project-shell-height');
        return;
    }

    const detail = shell.closest('.project-detail');
    const mobile = window.innerWidth <= 680;
    const maxShellWidth = Math.min(detail?.clientWidth || shell.parentElement?.clientWidth || window.innerWidth, mobile ? window.innerWidth - 36 : 520);
    const maxShellHeight = mobile ? 210 : Math.min(Math.max(window.innerHeight * 0.30, 220), 320);
    const maxImageWidth = Math.max(120, maxShellWidth);
    const maxImageHeight = Math.max(120, maxShellHeight);
    const scale = Math.min(maxImageWidth / img.naturalWidth, maxImageHeight / img.naturalHeight, 1);
    const fittedWidth = Math.round(img.naturalWidth * scale);
    const fittedHeight = Math.round(img.naturalHeight * scale);

    shell.style.setProperty('--project-shell-width', `${fittedWidth}px`);
    shell.style.setProperty('--project-shell-height', `${fittedHeight}px`);
}

const originalUpdatePanel = updatePanel;
updatePanel = function () {
    originalUpdatePanel();
    requestAnimationFrame(syncProjectImageShell);
};

const originalUpdateProjectImageDisplay = updateProjectImageDisplay;
updateProjectImageDisplay = function () {
    originalUpdateProjectImageDisplay();
    requestAnimationFrame(syncProjectImageShell);
};

window.addEventListener('resize', syncProjectImageShell);
document.addEventListener('load', (event) => {
    if (event.target?.matches?.('.project-image-media')) {
        syncProjectImageShell();
    }
}, true);

window.syncProjectImageShell = syncProjectImageShell;
