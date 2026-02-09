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
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio(waveSound);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.4; // Set a subtle ambient volume

        return () => {
            audioRef.current?.pause();
            audioRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (isPlaying) {
            const playPromise = audioRef.current?.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.error("Audio playback failed:", error);
                    setIsPlaying(false);
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
