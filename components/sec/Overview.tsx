'use client';

import { useEffect, useRef } from 'react';
import Heading from '../ui/Heading';
import { user } from '../data/user';
import { HorizontalGap, VerticalGap } from '../ui/Gap';

type Sample = {
    x: number;
    y: number;
    r: number;
    life: number;
};

export default function Overview() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const samplesRef = useRef<Sample[]>([]);
    const mouseRef = useRef<{ x: number; y: number } | null>(null);
    const rafRef = useRef<number>(0);

    const PIXEL = 8;
    const BASE_RADIUS = 70;
    const DECAY = 0.03;        // how fast trail fades
    const SAMPLE_RATE = 2;     // how often we sample mouse

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        const parent = canvas.parentElement!;

        const img = new Image();
        img.src = '/images/city.jpg';

        const resize = () => {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        };

        resize();
        window.addEventListener('resize', resize);

        let tick = 0;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw image
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            ctx.globalCompositeOperation = 'destination-out';

            // Draw erosion samples (cone)
            samplesRef.current.forEach(s => {
                ctx.globalAlpha = s.life;

                const minX = Math.floor((s.x - s.r) / PIXEL) * PIXEL;
                const maxX = Math.floor((s.x + s.r) / PIXEL) * PIXEL;
                const minY = Math.floor((s.y - s.r) / PIXEL) * PIXEL;
                const maxY = Math.floor((s.y + s.r) / PIXEL) * PIXEL;

                for (let px = minX; px <= maxX; px += PIXEL) {
                    for (let py = minY; py <= maxY; py += PIXEL) {
                        const cx = px + PIXEL / 2;
                        const cy = py + PIXEL / 2;
                        const d = Math.hypot(cx - s.x, cy - s.y);

                        if (d < s.r && Math.random() > 0.35) {
                            ctx.fillRect(px, py, PIXEL, PIXEL);
                        }
                    }
                }

                s.life -= DECAY;
                s.r *= 0.92; // 👈 shrink radius over time (cone!)
            });

            ctx.globalAlpha = 1;
            ctx.globalCompositeOperation = 'source-over';

            // Cleanup dead samples
            samplesRef.current = samplesRef.current.filter(s => s.life > 0.05);

            // Add new sample at mouse
            if (mouseRef.current && tick % SAMPLE_RATE === 0) {
                samplesRef.current.unshift({
                    x: mouseRef.current.x,
                    y: mouseRef.current.y,
                    r: BASE_RADIUS,
                    life: 1,
                });

                // limit trail length
                if (samplesRef.current.length > 25) {
                    samplesRef.current.pop();
                }
            }

            tick++;
            rafRef.current = requestAnimationFrame(animate);
        };

        img.onload = animate;

        return () => {
            cancelAnimationFrame(rafRef.current!);
            window.removeEventListener('resize', resize);
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    };

    const handleMouseLeave = () => {
        mouseRef.current = null;
    };

    return (
        <div className="relative">
            <Heading heading="overview" tag="Of me" />

            <div
                className="relative h-80 overflow-hidden"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* TEXT BELOW */}
                <div className="relative z-0">
                    <VerticalGap className="h-full absolute left-0 border-y-0 border-l-0" />
                    <VerticalGap className="h-full absolute right-0 border-y-0 border-r-0" />
                    <HorizontalGap className="border-x-0 border-t-0" />
                    <HorizontalGap className="border-x-0 absolute bottom-0 border-b-0" />

                    <div className="layout-double-padding flex flex-col gap-y-4 text-neutral-200">
                        {user.map((u, i) => (
                            <div key={i} className="flex items-center gap-x-4">
                                <u.icon />
                                <span>{u.data}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CANVAS */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-10 pointer-events-none"
                />
            </div>
        </div>
    );
}





