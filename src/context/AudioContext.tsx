import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import waveSound from '@/assets/wave-sound.mp3';

interface AudioContextType {
    isPlaying: boolean;
    toggleAudio: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
};

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const hasInteractedRef = useRef(false);

    useEffect(() => {
        audioRef.current = new Audio(waveSound);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.4;

        const handleInteraction = () => {
            if (!hasInteractedRef.current && isPlaying) {
                const playPromise = audioRef.current?.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        hasInteractedRef.current = true;
                        // Successfully started, can remove listeners
                        window.removeEventListener('click', handleInteraction);
                        window.removeEventListener('scroll', handleInteraction);
                        window.removeEventListener('touchstart', handleInteraction);
                    }).catch((error) => {
                        console.warn("Autoplay still blocked or failed:", error);
                    });
                }
            }
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('scroll', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);

        return () => {
            audioRef.current?.pause();
            audioRef.current = null;
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };
    }, []);

    useEffect(() => {
        if (isPlaying) {
            const playPromise = audioRef.current?.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    // This is expected if user hasn't interacted yet
                    console.log("Audio waiting for user interaction...");
                });
            }
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying]);

    const toggleAudio = () => {
        setIsPlaying((prev) => !prev);
    };

    return (
        <AudioContext.Provider value={{ isPlaying, toggleAudio }}>
            {children}
        </AudioContext.Provider>
    );
};
