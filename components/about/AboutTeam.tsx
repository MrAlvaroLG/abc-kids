'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import { HeartIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function AboutTeam() {
    const t = useTranslations('aboutPage.team');
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

    const qualities = t.raw('qualities') as string[];

    return (
        <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-linear-to-b from-surface to-bg relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-800/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                            <HeartIcon className="w-5 h-5 text-accent" />
                            <span className="text-navy-900 text-sm font-semibold">{t('label')}</span>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
                            {t('title')}
                        </h2>
                        <p className="text-lg md:text-xl text-navy-900/60 max-w-3xl mx-auto">
                            {t('subtitle')}
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {/* Intro paragraph */}
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-navy-900/5 mb-8">
                            <div className="flex items-start gap-6">
                                <div className="shrink-0 w-16 h-16 bg-linear-to-br from-accent to-accent-hover rounded-2xl flex items-center justify-center shadow-lg">
                                    <UserGroupIcon className="w-8 h-8 text-navy-900" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-navy-900 mb-4">{t('introTitle')}</h3>
                                    <p className="text-navy-900/70 text-lg leading-relaxed mb-4">
                                        {t('introParagraph1')}
                                    </p>
                                    <p className="text-navy-900/70 text-lg leading-relaxed">
                                        {t('introParagraph2')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Qualities List */}
                        <div className="bg-linear-to-br from-navy-900/5 to-blue-800/5 rounded-3xl p-8 md:p-10 border border-navy-900/5">
                            <div className="flex items-center gap-3 mb-8">
                                <SparklesIcon className="w-8 h-8 text-accent" />
                                <h3 className="text-2xl font-bold text-navy-900">{t('qualitiesTitle')}</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {qualities.map((quality, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-start gap-4 group"
                                    >
                                        <CheckCircleIcon className="w-6 h-6 text-accent shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                                        <p className="text-navy-900/80 leading-relaxed">
                                            {quality}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Closing statement */}
                            <div className="mt-8 pt-8 border-t border-navy-900/10">
                                <p className="text-navy-900/70 text-lg leading-relaxed italic text-center">
                                    {t('closingStatement')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
