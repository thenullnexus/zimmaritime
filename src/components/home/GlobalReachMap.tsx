import { useEffect, useState } from 'react';
import { useCountUp } from '../../hooks/use-count-up';

interface GlobalReachMapProps {
    delay?: number;
}

const StatDisplay = ({ value }: { value: string }) => {
    const { count, ref } = useCountUp(parseInt(value.replace(/[^0-9]/g, '')), 2000);
    return (
        <span ref={ref} className="text-4xl font-bold text-primary tabular-nums">
            {count}{value.includes('+') ? '+' : ''}
        </span>
    );
};

const GlobalReachMap = ({ delay = 0 }: GlobalReachMapProps) => {
    const [activeLines, setActiveLines] = useState<number[]>([]);
    const [isVisible, setIsVisible] = useState(false);

    // Coordinates for major hubs (approximate relative positions)
    const hubs = [
        { id: 1, x: 30, y: 40, label: 'Persian Gulf' }, // Dubai/Gulf
        { id: 2, x: 45, y: 55, label: 'Mumbai' },       // West Coast India
        { id: 3, x: 55, y: 65, label: 'Chennai' },      // East Coast India
        { id: 4, x: 75, y: 60, label: 'Singapore' },    // SE Asia
        { id: 5, x: 85, y: 45, label: 'China' },        // East Asia
    ];

    // Connections between hubs
    const connections = [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
        { from: 1, to: 3 }, // Direct Gulf to East Coast
        { from: 2, to: 4 }, // Direct West Coast to SE Asia
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (!isVisible) return;

        // Animate lines randomly
        const interval = setInterval(() => {
            const randomLineIndex = Math.floor(Math.random() * connections.length);
            setActiveLines(prev => {
                const newLines = [...prev, randomLineIndex];
                // Keep only last 3 active lines to avoid clutter
                if (newLines.length > 3) newLines.shift();
                return newLines;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [isVisible]);

    return (
        <div
            className={`maritime-card p-8 text-center group h-full flex flex-col transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {/* Visual Area - Fixed Height 120px */}
            <div className="h-[120px] flex items-center justify-center mb-6 relative">
                {/* Circular Border to match Radar */}
                <div className="absolute w-[120px] h-[120px] rounded-full border border-muted/20" />

                <svg
                    viewBox="0 0 100 80"
                    className="w-full h-full text-primary p-2"
                    style={{ overflow: 'visible' }}
                >
                    {/* Connecting Lines */}
                    {connections.map((conn, index) => {
                        const start = hubs.find(h => h.id === conn.from)!;
                        const end = hubs.find(h => h.id === conn.to)!;
                        const isActive = activeLines.includes(index);

                        return (
                            <g key={`${conn.from}-${conn.to}`}>
                                {/* Base line */}
                                <path
                                    d={`M${start.x} ${start.y} Q ${(start.x + end.x) / 2} ${(start.y + end.y) / 2 - 5} ${end.x} ${end.y}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    className="opacity-20"
                                />
                                {/* Animated flow line */}
                                <path
                                    d={`M${start.x} ${start.y} Q ${(start.x + end.x) / 2} ${(start.y + end.y) / 2 - 5} ${end.x} ${end.y}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeDasharray="4 4"
                                    className={`opacity-0 transition-opacity duration-1000 ${isActive ? 'opacity-100 animate-pulse' : ''}`}
                                />
                            </g>
                        );
                    })}

                    {/* Hub Dots */}
                    {hubs.map((hub) => (
                        <g key={hub.id} className="group/hub">
                            {/* Pulse effect */}
                            <circle
                                cx={hub.x}
                                cy={hub.y}
                                r="3"
                                fill="currentColor"
                                className="opacity-20 animate-ping"
                                style={{ animationDuration: '3s' }}
                            />
                            {/* Main dot */}
                            <circle
                                cx={hub.x}
                                cy={hub.y}
                                r="1.5"
                                fill="currentColor"
                                className="group-hover/hub:scale-150 transition-transform duration-300"
                            />
                        </g>
                    ))}
                </svg>

                {/* Horizon Line */}
                <div className="absolute bottom-1/2 w-full h-[1px] bg-muted/20 -z-10" />
            </div>

            {/* Content Container */}
            <div className="flex-1 flex flex-col items-center">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Global Reach
                </h3>

                {/* Hero Number */}
                <div className="flex items-baseline gap-2 mb-4">
                    <StatDisplay value="12+" />
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Hubs
                    </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                    Strategic presence across Indian subcontinent and beyond
                </p>
            </div>
        </div>
    );
};

export default GlobalReachMap;
