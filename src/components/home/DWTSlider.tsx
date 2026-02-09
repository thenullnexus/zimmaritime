import { useState, useEffect } from 'react';

interface DWTSliderProps {
    delay?: number;
}

const DWTSlider = ({ delay = 0 }: DWTSliderProps) => {
    const minDWT = 2000;
    const maxDWT = 60000;
    const [dwt, setDwt] = useState(minDWT);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    // Calculate scale based on DWT value (1 to 1.8)
    const scale = 1 + ((dwt - minDWT) / (maxDWT - minDWT)) * 0.8;

    // Format DWT with commas
    const formattedDWT = dwt.toLocaleString();

    return (
        <div
            className={`maritime-card p-8 text-center group h-full flex flex-col transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {/* Visual Area - Fixed Height 120px */}
            <div className="h-[120px] flex items-center justify-center mb-6 overflow-visible relative">
                <svg
                    viewBox="0 0 100 40"
                    className="transition-transform duration-300 ease-out text-primary"
                    style={{
                        transform: `scale(${isVisible ? scale : 0})`,
                        width: '80px',
                        height: '32px',
                        transitionDelay: `${delay + 0.3}s`
                    }}
                >
                    {/* Hull */}
                    <path
                        d="M5 25 L15 35 L85 35 L95 25 L90 25 L85 30 L15 30 L10 25 Z"
                        fill="currentColor"
                    />
                    {/* Deck */}
                    <rect x="20" y="20" width="60" height="5" fill="currentColor" />
                    {/* Bridge/Superstructure */}
                    <rect x="60" y="8" width="18" height="12" fill="currentColor" />
                    {/* Cargo holds */}
                    <rect x="22" y="15" width="10" height="5" fill="currentColor" opacity="0.8" />
                    <rect x="35" y="15" width="10" height="5" fill="currentColor" opacity="0.8" />
                    <rect x="48" y="15" width="10" height="5" fill="currentColor" opacity="0.8" />
                    {/* Funnel */}
                    <rect x="72" y="2" width="4" height="6" fill="currentColor" />
                    {/* Mast */}
                    <rect x="30" y="5" width="2" height="10" fill="currentColor" opacity="0.7" />
                </svg>

                {/* Horizon Line */}
                <div className="absolute bottom-1/2 w-full h-[1px] bg-muted/20 -z-10" />
            </div>

            {/* Content Container */}
            <div className="flex-1 flex flex-col items-center">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Vessel Expertise
                </h3>

                {/* Hero Number */}
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-primary tabular-nums">
                        {formattedDWT}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        DWT
                    </span>
                </div>

                {/* Slider */}
                <div className="w-full px-2 mb-4">
                    <input
                        type="range"
                        min={minDWT}
                        max={maxDWT}
                        step={1000}
                        value={dwt}
                        onChange={(e) => setDwt(Number(e.target.value))}
                        className="dwt-slider w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground mt-2 uppercase tracking-wider">
                        <span>2k</span>
                        <span>60k</span>
                    </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                    Specialized in dry bulk carriers
                </p>
            </div>
        </div>
    );
};

export default DWTSlider;
