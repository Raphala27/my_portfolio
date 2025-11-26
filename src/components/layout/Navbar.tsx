import Link from 'next/link';
import { Button } from '../ui/Button';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-chic-bg/80 backdrop-blur-md border-b border-chic-brown/5">
            <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-chic-brown">
                    DEV.
                </Link>

                <div className="hidden md:flex items-center gap-10 text-sm font-medium text-chic-brown/80">
                    <Link href="#about" className="hover:text-chic-brown transition-colors">About</Link>
                    <Link href="#experience" className="hover:text-chic-brown transition-colors">Experience</Link>
                    <Link href="#projects" className="hover:text-chic-brown transition-colors">Projects</Link>
                    <Link href="#contact" className="hover:text-chic-brown transition-colors">Contact</Link>
                    <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" className="px-6 py-2 text-xs">
                            Resume
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
