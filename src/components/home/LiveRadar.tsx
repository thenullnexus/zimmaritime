import { useEffect, useState } from 'react';

interface LiveRadarProps {
    delay?: number;
}

const LiveRadar = ({ delay = 0 }: LiveRadarProps) => {
    const [time, setTime] = useState<string>('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toUTCString().split(' ')[4]); // Extract HH:MM:SS
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`maritime-card p-8 text-center group h-full flex flex-col transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {/* Visual Area - Fixed Height 120px */}
            <div className="h-[120px] flex items-center justify-center mb-6 relative">
                <div className="relative w-[120px] h-[120px]">
                    {/* Radar Background Circles */}
                    <div className="absolute inset-0 rounded-full border border-primary/20" />
                    <div className="absolute inset-4 rounded-full border border-primary/20" />
                    <div className="absolute inset-8 rounded-full border border-primary/20" />

                    {/* Crosshairs */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-[1px] bg-primary/20" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-[1px] bg-primary/20" />
                    </div>

                    {/* Scanner Hand */}
                    {isVisible && (
                        <div
                            className="absolute inset-0 rounded-full overflow-hidden animate-spin [animation-duration:4s] linear"
                            style={{ animationDelay: `${delay + 0.3}s` }}
                        >
                            <div className="w-1/2 h-1/2 bg-gradient-to-tl from-primary/50 to-transparent absolute top-0 left-0 origin-bottom-right transform rotate-0" />
                        </div>
                    )}

                    {/* Blips (Static for now, could be randomized) */}
                    {isVisible && (
                        <>
                            <div className="absolute top-6 right-8 w-1.5 h-1.5 bg-primary rounded-full animate-ping [animation-duration:2s]" />
                            <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-primary rounded-full animate-ping [animation-duration:3s] [animation-delay:1s]" />
                        </>
                    )}
                </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 flex flex-col items-center">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    24/7 Operations
                </h3>

                {/* Hero Number */}
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-primary tabular-nums">
                        24/7
                    </span>
                    <span className="text-base font-medium text-muted-foreground uppercase tracking-wider">
                        Support
                    </span>
                </div>

                {/* Live System Status */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mt-auto">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-primary font-medium uppercase tracking-wider">
                        System Active: UTC {time}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LiveRadar;
