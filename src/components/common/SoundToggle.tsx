import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '@/context/AudioContext';

const SoundToggle = ({ isScrolled }: { isScrolled: boolean }) => {
    const { isPlaying, toggleAudio } = useAudio();

    return (
        <button
            onClick={toggleAudio}
            className={`relative p-2 rounded-full transition-all duration-300 group ${isScrolled
                    ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
            aria-label={isPlaying ? "Mute ambient sound" : "Unmute ambient sound"}
        >
            <div className="flex items-center gap-1.5 h-4">
                {isPlaying ? (
                    <>
                        <motion.div
                            animate={{ height: ["40%", "100%", "40%"] }}
                            transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
                            className="w-0.5 bg-current"
                        />
                        <motion.div
                            animate={{ height: ["60%", "20%", "60%"] }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
                            className="w-0.5 bg-current"
                        />
                        <motion.div
                            animate={{ height: ["30%", "80%", "30%"] }}
                            transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }}
                            className="w-0.5 bg-current"
                        />
                    </>
                ) : (
                    <VolumeX className="w-4 h-4" />
                )}
            </div>

            {/* Tooltip */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-[10px] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {isPlaying ? "Mute Ocean" : "Sound On"}
            </span>
        </button>
    );
};

export default SoundToggle;
