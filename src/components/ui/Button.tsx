import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
}

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
    const baseStyles = "px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 active:scale-95";

    const variants = {
        primary: "chic-button-primary",
        outline: "chic-button-outline",
        ghost: "bg-transparent text-chic-brown hover:bg-chic-brown/5",
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
}
