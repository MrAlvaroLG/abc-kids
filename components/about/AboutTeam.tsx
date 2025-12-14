'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function AboutTeam() {
    const t = useTranslations('aboutPage.team');
    const [isVisible, setIsVisible] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    const teamImages = [
        { src: '/about/personal/photo7.jpeg', alt: 'Team Photo 1' },
        { src: '/about/personal/photo8.jpeg', alt: 'Team Photo 2' },
        { src: '/about/personal/photo11.jpeg', alt: 'Team Photo 3' },
        { src: '/about/personal/photo12.jpeg', alt: 'Team Photo 4' }

    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % teamImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [teamImages.length]);

    const qualities = t.raw('qualities') as string[];

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-linear-to-br from-navy-900 via-blue-900 to-navy-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 mb-8">
                        <UserGroupIcon className="w-5 h-5 text-accent" />
                        <span className="text-white/90 text-sm font-medium">{t('label')}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t('title')}
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Content Grid - Making a Difference (left) + What Makes Us Special (right) */}
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Left - Making a Difference */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="shrink-0 w-14 h-14 bg-linear-to-br from-accent to-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                                <SparklesIcon className="w-7 h-7 text-navy-900" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">{t('introTitle')}</h3>
                            </div>
                        </div>
                        <p className="text-white/70 text-lg leading-relaxed mb-4">
                            {t('introParagraph1')}
                        </p>
                        <p className="text-white/60 leading-relaxed mb-6">
                            {t('introParagraph2')}
                        </p>
                        
                        {/* Closing Statement */}
                        <div className="bg-linear-to-r from-accent/20 to-accent/10 border-l-4 border-accent rounded-r-2xl p-5">
                            <p className="text-white/90 leading-relaxed italic">
                                &quot;{t('closingStatement')}&quot;
                            </p>
                        </div>
                    </div>

                    {/* Right - What Makes Us Special */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <CheckCircleIcon className="w-7 h-7 text-accent" />
                            {t('qualitiesTitle')}
                        </h3>
                        
                        <div className="grid gap-4">
                            {qualities.map((quality, index) => (
                                <div 
                                    key={index}
                                    className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                                >
                                    <CheckCircleIcon className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                    <p className="text-white/80 text-lg leading-relaxed">
                                        {quality}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Full Width Carousel */}
                <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Main Carousel */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-21/9">
                        {teamImages.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-700 ${
                                    index === activeSlide 
                                        ? 'opacity-100 scale-100' 
                                        : 'opacity-0 scale-105'
                                }`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-navy-900/60 via-transparent to-transparent" />
                            </div>
                        ))}

                        {/* Carousel Indicators */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                            {teamImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSlide(index)}
                                    className={`transition-all duration-300 rounded-full ${
                                        index === activeSlide 
                                            ? 'w-10 h-2 bg-accent' 
                                            : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Thumbnail Nav */}
                    <div className="grid grid-cols-4 gap-4 mt-6">
                        {teamImages.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSlide(index)}
                                className={`relative rounded-2xl overflow-hidden aspect-video transition-all duration-300 ${
                                    index === activeSlide 
                                        ? 'ring-2 ring-accent ring-offset-2 ring-offset-navy-900' 
                                        : 'opacity-60 hover:opacity-100'
                                }`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
