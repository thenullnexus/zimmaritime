import React, { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 240;

const ScrollAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadedCount, setLoadedCount] = useState(0);

    // Preload images
    useEffect(() => {
        const preloadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            let count = 0;

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                const frameNumber = i.toString().padStart(3, '0');
                img.src = `${import.meta.env.BASE_URL}home_page_animation/ezgif-frame-${frameNumber}.jpg`;
                img.onload = () => {
                    count++;
                    setLoadedCount(count);
                };
                loadedImages.push(img);
            }
            setImages(loadedImages);
        };

        preloadImages();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !canvasRef.current || images.length < FRAME_COUNT) return;

            const rect = containerRef.current.getBoundingClientRect();
            const scrollHeight = containerRef.current.offsetHeight;
            const viewportHeight = window.innerHeight;

            // Calculate how far through the container we have scrolled
            // We start the animation when the top of the container hits the top of the viewport
            // and end it when the bottom of the container hits the bottom of the viewport.
            // However, for a better feel, we might want to start/end relative to the viewport.

            const scrollTop = -rect.top;
            const totalScrollableHeight = scrollHeight - viewportHeight;

            // Progress from 0 to 1
            let progress = scrollTop / totalScrollableHeight;
            progress = Math.max(0, Math.min(1, progress));

            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(progress * FRAME_COUNT)
            );

            const context = canvasRef.current.getContext('2d');
            if (context && images[frameIndex]) {
                const img = images[frameIndex];

                // Clear canvas
                context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

                // Draw image (maintaining aspect ratio or covering)
                const canvasWidth = canvasRef.current.width;
                const canvasHeight = canvasRef.current.height;
                const imgRatio = img.width / img.height;
                const canvasRatio = canvasWidth / canvasHeight;

                let drawWidth, drawHeight, offsetX, offsetY;

                if (imgRatio > canvasRatio) {
                    drawHeight = canvasHeight;
                    drawWidth = canvasHeight * imgRatio;
                    offsetX = (canvasWidth - drawWidth) / 2;
                    offsetY = 0;
                } else {
                    drawWidth = canvasWidth;
                    drawHeight = canvasWidth / imgRatio;
                    offsetX = 0;
                    offsetY = (canvasHeight - drawHeight) / 2;
                }

                context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [images, loadedCount]);

    // Initial draw when images load
    useEffect(() => {
        if (images.length === FRAME_COUNT && loadedCount === FRAME_COUNT) {
            const resizeCanvas = () => {
                if (canvasRef.current) {
                    canvasRef.current.width = window.innerWidth;
                    canvasRef.current.height = window.innerHeight;
                }
            };

            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            // Delay slightly to ensure canvas size is set before first draw
            setTimeout(() => {
                window.dispatchEvent(new Event('scroll'));
            }, 100);

            return () => window.removeEventListener('resize', resizeCanvas);
        }
    }, [images, loadedCount]);

    return (
        <div ref={containerRef} className="absolute inset-0 z-[-1] pointer-events-none">
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                />
                {/* Brand Overlay Layer - Gradient for better visibility of animation in dark mode */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none opacity-80" />

                {loadedCount < FRAME_COUNT && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                        <div className="text-primary font-medium">
                            Loading Animation... {Math.round((loadedCount / FRAME_COUNT) * 100)}%
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScrollAnimation;
