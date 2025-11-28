"use client";

import { motion } from "framer-motion";

export const HeroBackground = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-chic-accent/20 blur-[100px] animate-aurora" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-chic-brown/10 blur-[80px] animate-aurora" style={{ animationDelay: "2s" }} />
            <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-chic-accent/10 blur-[60px] animate-aurora" style={{ animationDelay: "4s" }} />
        </div>
    );
};
