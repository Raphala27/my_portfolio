"use client";

import { motion } from "framer-motion";

export const HeroBackground = () => {
    return (
        <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none">
            {/* Animated wave-like gradient strips */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(135deg, rgba(240, 187, 120, 0.3) 0%, transparent 50%, rgba(84, 58, 20, 0.2) 100%)',
                }}
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Large moving orbs with higher opacity */}
            <motion.div
                className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(240, 187, 120, 0.6) 0%, rgba(240, 187, 120, 0.3) 40%, transparent 70%)',
                    filter: 'blur(50px)',
                }}
                animate={{
                    x: [0, 300, 0],
                    y: [0, 200, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute bottom-[5%] right-[10%] w-[700px] h-[700px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(240, 187, 120, 0.5) 0%, rgba(240, 187, 120, 0.25) 40%, transparent 70%)',
                    filter: 'blur(50px)',
                }}
                animate={{
                    x: [0, -250, 0],
                    y: [0, -150, 0],
                    scale: [1, 1.4, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute top-[50%] left-[50%] w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(84, 58, 20, 0.4) 0%, rgba(84, 58, 20, 0.2) 40%, transparent 70%)',
                    filter: 'blur(45px)',
                    transform: 'translate(-50%, -50%)',
                }}
                animate={{
                    x: [-100, 100, -100],
                    y: [-100, 100, -100],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Diagonal animated stripes for more visible effect */}
            {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                    key={i}
                    className="absolute h-[200px] w-[150%] -left-[25%]"
                    style={{
                        top: `${i * 20}%`,
                        background: 'linear-gradient(90deg, transparent 0%, rgba(240, 187, 120, 0.15) 50%, transparent 100%)',
                        transform: 'rotate(-15deg)',
                    }}
                    animate={{
                        x: ['-100%', '100%'],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: i * 1.5,
                    }}
                />
            ))}

            {/* Pulsing corner accents */}
            <motion.div
                className="absolute top-0 left-0 w-[400px] h-[400px]"
                style={{
                    background: 'radial-gradient(circle at top left, rgba(240, 187, 120, 0.4) 0%, transparent 60%)',
                }}
                animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute bottom-0 right-0 w-[400px] h-[400px]"
                style={{
                    background: 'radial-gradient(circle at bottom right, rgba(84, 58, 20, 0.35) 0%, transparent 60%)',
                }}
                animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
            />

            {/* Floating visible dots */}
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={`dot-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-chic-accent/40"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: Math.random() * 3,
                    }}
                />
            ))}
        </div>
    );
};
