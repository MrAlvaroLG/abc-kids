'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import { SparklesIcon, HeartIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export default function AboutStory() {
    const t = useTranslations('aboutPage.story');
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

    return (
        <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left: Image/Visual */}
                    <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="relative">
                            {/* Main image placeholder */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 bg-linear-to-br from-blue-800/20 to-accent/20">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <SparklesIcon className="w-20 h-20 text-navy-900/30 mx-auto mb-4" />
                                        <p className="text-navy-900/50 text-lg font-medium">{t('imageCaption')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-800/20 rounded-full blur-2xl" />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                            <HeartIcon className="w-5 h-5 text-accent" />
                            <span className="text-navy-900 text-sm font-semibold">{t('label')}</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                            {t('title')}
                        </h2>

                        <div className="space-y-4 text-navy-900/70 text-lg leading-relaxed mb-8">
                            <p>{t('paragraph1')}</p>
                            <p>{t('paragraph2')}</p>
                            <p>{t('paragraph3')}</p>
                        </div>

                        {/* Mission highlight */}
                        <div className="bg-linear-to-r from-accent/10 to-accent/5 border-l-4 border-accent rounded-r-2xl p-6">
                            <div className="flex items-start gap-4">
                                <LightBulbIcon className="w-8 h-8 text-accent shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-navy-900 mb-2">{t('mission.title')}</h3>
                                    <p className="text-navy-900/70 leading-relaxed">{t('mission.text')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
