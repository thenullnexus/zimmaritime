import { useEffect, useState, useRef } from 'react';

interface TrustTimelineProps {
    delay?: number;
}

const TrustTimeline = ({ delay = 0 }: TrustTimelineProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [year, setYear] = useState(2012);
    const [trustTextIndex, setTrustTextIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const currentYear = new Date().getFullYear();
    const trustWords = ['Integrity', 'Efficiency', 'Commitment', 'Reliability'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (isVisible && year < currentYear) {
            const interval = setInterval(() => {
                setYear((prev) => {
                    if (prev >= currentYear) {
                        clearInterval(interval);
                        return currentYear;
                    }
                    return prev + 1;
                });
            }, 100); // Speed of year counting
            return () => clearInterval(interval);
        }
    }, [isVisible, year, currentYear]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTrustTextIndex((prev) => (prev + 1) % trustWords.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const yearsOfService = year - 2012;

    return (
        <div
            ref={containerRef}
            className={`maritime-card p-8 text-center group h-full flex flex-col transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {/* Visual Area - Fixed Height 120px */}
            <div className="h-[120px] flex items-center justify-center mb-6 relative">
                <div className="w-full h-24 relative flex items-center justify-center">
                    {/* Base Line */}
                    <div className="absolute w-full h-1 bg-muted rounded-full" />

                    {/* Progress Line */}
                    <div
                        className="absolute left-0 h-1 bg-primary rounded-full transition-all duration-[1500ms] ease-out"
                        style={{
                            width: isVisible ? '100%' : '0%',
                            transitionDelay: `${delay + 0.3}s`
                        }}
                    />

                    {/* Start Point */}
                    <div className="absolute left-0 w-3 h-3 rounded-full bg-muted-foreground z-10" />
                    <span className="absolute left-0 top-14 text-xs text-muted-foreground">2012</span>

                    {/* End Point (Current) */}
                    <div
                        className={`absolute right-0 w-4 h-4 rounded-full bg-primary z-10 transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}
                        style={{ transitionDelay: `${delay + 1.8}s` }}
                    />
                    <span className="absolute right-0 top-14 text-xs text-primary font-bold">{currentYear}</span>
                </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 flex flex-col items-center">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Trusted Partner
                </h3>

                {/* Hero Number */}
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-primary tabular-nums">
                        {yearsOfService}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Years
                    </span>
                </div>

                {/* Trust Fade Text */}
                <div className="h-6 overflow-hidden relative w-full mt-auto">
                    {trustWords.map((word, index) => (
                        <div
                            key={word}
                            className={`absolute w-full text-center text-sm font-medium text-foreground/80 transition-all duration-500 transform
                ${index === trustTextIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
                        >
                            {word}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustTimeline;
