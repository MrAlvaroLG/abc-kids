'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function AboutMission() {
    const t = useTranslations('aboutPage.mission');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

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

    const highlights = t.raw('highlights') as string[];

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-linear-to-b from-surface to-bg relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                        <SparklesIcon className="w-5 h-5 text-accent" />
                        <span className="text-navy-900 text-sm font-semibold">{t('badge')}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                        {t('title')}
                    </h2>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Mission Statement */}
                    <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="bg-linear-to-br from-accent/10 to-accent/5 border-2 border-accent/30 rounded-3xl p-8 md:p-12">
                            <p className="text-xl md:text-2xl text-navy-900 font-semibold leading-relaxed">
                                {t('description')}
                            </p>
                        </div>
                    </div>

                    {/* Highlights Grid */}
                    <div className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {highlights.map((highlight, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-linear-to-br from-accent to-yellow-400 rounded-lg flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-navy-900 font-bold text-sm">{index + 1}</span>
                                    </div>
                                    <p className="text-navy-900 font-semibold text-lg">
                                        {highlight}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
