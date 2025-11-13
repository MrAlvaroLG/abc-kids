'use client';

import { useTranslations } from 'next-intl';
import { useState, useRef, useEffect } from 'react';
import { CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { Link } from '@/i18n/routing';

type ProgramKey = 'infants' | 'toddlers' | 'preschool';

const programColors = {
    infants: {
        gradient: 'from-pink-500 to-purple-500',
        bg: 'from-pink-50 to-purple-50',
        accent: 'text-pink-600',
        border: 'border-pink-200',
        button: 'from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'
    },
    toddlers: {
        gradient: 'from-blue-500 to-cyan-500',
        bg: 'from-blue-50 to-cyan-50',
        accent: 'text-blue-600',
        border: 'border-blue-200',
        button: 'from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
    },
    preschool: {
        gradient: 'from-orange-500 to-yellow-500',
        bg: 'from-orange-50 to-yellow-50',
        accent: 'text-orange-600',
        border: 'border-orange-200',
        button: 'from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600'
    }
};

export default function ProgramsGrid() {
    const t = useTranslations('programsSection');
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setVisibleCards(prev => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll('.program-card');
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const programs: ProgramKey[] = ['infants', 'toddlers', 'preschool'];

    return (
        <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-lg md:text-xl text-navy-900/60">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {programs.map((programKey, index) => {
                        const features = t.raw(`programs.${programKey}.features`) as string[];
                        const colors = programColors[programKey];
                        const isVisible = visibleCards.includes(index);

                        return (
                            <div
                                key={programKey}
                                data-index={index}
                                className={`program-card group relative transition-all duration-700 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                {/* Card */}
                                <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-navy-900/5 flex flex-col">
                                    {/* Icon circle - top right corner */}
                                    <div className="absolute right-6 top-6 z-10">
                                        <div className={`w-16 h-16 bg-linear-to-br ${colors.gradient} rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <SparklesIcon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Gradient Header */}
                                    <div className={`relative bg-linear-to-br ${colors.gradient} p-8 pb-16`}>
                                        {/* Decorative circles */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl opacity-50" style={{ transform: 'translate(25%, -25%)' }} />
                                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl opacity-50" style={{ transform: 'translate(-25%, 25%)' }} />

                                        {/* Age badge */}
                                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-4">
                                            <span className="text-white text-sm font-semibold">
                                                {t(`programs.${programKey}.ageRange`)}
                                            </span>
                                        </div>

                                        {/* Program name */}
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                            {t(`programs.${programKey}.name`)}
                                        </h3>

                                        {/* Tagline */}
                                        <p className="text-white/90 text-lg font-medium">
                                            {t(`programs.${programKey}.tagline`)}
                                        </p>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-1 flex flex-col">
                                        {/* Description */}
                                        <p className="text-navy-900/70 mb-6 leading-relaxed">
                                            {t(`programs.${programKey}.description`)}
                                        </p>

                                        {/* Features list */}
                                        <div className="space-y-3 mb-6 flex-1">
                                            {features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <CheckCircleIcon className={`w-6 h-6 ${colors.accent} shrink-0 mt-0.5`} />
                                                    <span className="text-navy-900/80 text-sm leading-relaxed">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Highlight badge */}
                                        <div className={`bg-linear-to-r ${colors.bg} ${colors.border} border rounded-2xl p-4 mb-6`}>
                                            <div className="flex items-start gap-3">
                                                <div className={`w-2 h-2 ${colors.accent} rounded-full mt-2 shrink-0`} />
                                                <p className={`text-sm font-medium ${colors.accent}`}>
                                                    {t(`programs.${programKey}.highlight`)}
                                                </p>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <Link href="/contact" className="mt-auto">
                                            <button className={`w-full bg-linear-to-r ${colors.button} text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
                                                {t('viewDetails')}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
