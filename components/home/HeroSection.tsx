'use client';

import { useTranslations } from 'next-intl';
import { 
    ArrowRightIcon, 
    PuzzlePieceIcon, 
    PaintBrushIcon,
    BookOpenIcon,
    MusicalNoteIcon,
    HeartIcon as HeartIconSolid
} from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
    const t = useTranslations('hero');
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Use setTimeout to avoid synchronous setState
        const timer = setTimeout(() => setIsVisible(true), 100);
        
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20 - 10,
                y: (e.clientY / window.innerHeight) * 20 - 10,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-bg via-surface to-bg">
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div 
                    className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                />
                <div 
                    className="absolute bottom-20 right-10 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl animate-pulse delay-700"
                    style={{
                        transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className={`space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {/* Main Title */}
                        <div className="space-y-3">
                            <h1 className="text-4xl lg:text-7xl font-bold text-navy-900 leading-tight">
                                {t('title')}
                                <span className="block text-3xl lg:text-5xl text-transparent bg-clip-text bg-linear-to-r from-accent via-accent-hover to-accent animate-gradient-x">
                                    {t('subtitle')}
                                </span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-lg lg:text-xl text-navy-900/70 leading-relaxed max-w-xl">
                            {t('description')}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group relative px-8 py-4 bg-accent text-navy-900 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {t('cta.primary')}
                                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-accent-hover transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </button>
                            
                            <button className="px-8 py-4 bg-surface text-navy-900 rounded-full font-semibold text-lg border-2 border-navy-900/10 hover:border-accent hover:bg-accent/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                                {t('cta.secondary')}
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-linear-to-br from-accent to-accent-hover border-2 border-surface flex items-center justify-center">
                                        <HeartIcon className="w-5 h-5 text-navy-900" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm text-navy-900/60">
                                <p className="font-semibold">{t('trust.primary')}</p>
                                <p>{t('trust.secondary')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Puzzle with Image */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="relative">
                            {/* Puzzle Container */}
                            <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-xl mx-auto px-4 md:px-0">
                                {/* Puzzle piece background with gradient */}
                                <div className="relative animate-float">
                                    <PuzzlePieceIcon 
                                        className="w-full h-auto text-accent drop-shadow-2xl"
                                        style={{
                                            filter: 'drop-shadow(0 25px 50px rgba(0, 29, 61, 0.2))',
                                        }}
                                    />
                                    
                                    {/* Image overlay positioned on top of puzzle */}
                                    <div className="absolute inset-0 flex items-center justify-center p-16 sm:p-20 md:p-24 lg:p-26 animate-float">
                                        <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                                            <Image 
                                                src="/hero-image.jpg" 
                                                alt="ABC Kids Daycare"
                                                fill
                                                className="object-cover"
                                                priority
                                                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
                                            />
                                            {/* Glassmorphism overlay */}
                                            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent backdrop-blur-[1px] pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements - Hidden on mobile, visible on tablet+ */}
                                <FloatingElement 
                                    Icon={PaintBrushIcon}
                                    className="hidden md:flex absolute top-10 -left-4 lg:-left-6 animate-float delay-100"
                                />
                                <FloatingElement 
                                    Icon={BookOpenIcon}
                                    className="hidden md:flex absolute top-1/3 -right-6 lg:-right-8 animate-float delay-300"
                                />
                                <FloatingElement 
                                    Icon={MusicalNoteIcon}
                                    className="hidden md:flex absolute bottom-20 -left-6 lg:-left-8 animate-float delay-500"
                                />
                                <FloatingElement 
                                    Icon={HeartIconSolid}
                                    className="hidden md:flex absolute bottom-10 -right-4 lg:-right-5 animate-float delay-700"
                                />
                                
                                {/* Simplified mobile floating elements */}
                                <FloatingElement 
                                    Icon={PaintBrushIcon}
                                    className="flex md:hidden absolute -top-2 left-5 animate-float delay-100 scale-90"
                                />
                                <FloatingElement 
                                    Icon={BookOpenIcon}
                                    className="flex md:hidden absolute top-5 -right-2 animate-float delay-300 scale-90"
                                />
                                <FloatingElement 
                                    Icon={MusicalNoteIcon}
                                    className="flex md:hidden absolute -bottom-2 -right-2 animate-float delay-500 scale-90"
                                />
                                <FloatingElement 
                                    Icon={HeartIconSolid}
                                    className="flex md:hidden absolute bottom-6 left-2 animate-float delay-700 scale-90"
                                />
                            </div>

                            {/* Decorative circles - Hidden on mobile for cleaner look */}
                            <div className="hidden md:block absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                                <div className="absolute inset-0 border-4 border-accent/20 rounded-full animate-ping-slow" />
                                <div className="absolute inset-8 border-2 border-blue-800/10 rounded-full animate-ping-slow delay-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Hidden on small mobile */}
            <div className="hidden sm:block absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-navy-900/30 rounded-full flex justify-center p-2">
                    <div className="w-1.5 h-3 bg-accent rounded-full animate-scroll" />
                </div>
            </div>
        </section>
    );
}

// Floating Element Component
function FloatingElement({ 
    Icon, 
    className 
}: { 
    Icon: React.ComponentType<{ className?: string }>, 
    className: string 
}) {
    return (
        <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-surface/90 backdrop-blur-md rounded-xl md:rounded-2xl items-center justify-center shadow-lg md:shadow-xl border border-navy-900/5 hover:scale-110 active:scale-95 transition-all duration-300 ${className}`}>
            <Icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-accent" />
        </div>
    );
}
