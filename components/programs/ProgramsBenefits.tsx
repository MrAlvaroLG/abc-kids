'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import { 
    UserGroupIcon, 
    HeartIcon, 
    AcademicCapIcon, 
    ShieldCheckIcon,
    ClockIcon,
    ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline';

export default function ProgramsBenefits() {
    const t = useTranslations('programsPage.benefits');
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

    const benefits = [
        { icon: UserGroupIcon, key: 'ratio', gradient: 'from-blue-500 to-cyan-500' },
        { icon: HeartIcon, key: 'care', gradient: 'from-pink-500 to-rose-500' },
        { icon: AcademicCapIcon, key: 'curriculum', gradient: 'from-purple-500 to-indigo-500' },
        { icon: ShieldCheckIcon, key: 'safety', gradient: 'from-green-500 to-emerald-500' },
        { icon: ClockIcon, key: 'flexible', gradient: 'from-orange-500 to-amber-500' },
        { icon: ChatBubbleBottomCenterTextIcon, key: 'communication', gradient: 'from-teal-500 to-cyan-500' }
    ];

    return (
        <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-linear-to-b from-surface to-bg relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-800/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-lg md:text-xl text-navy-900/60">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={benefit.key}
                                className={`group transition-all duration-700 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="relative h-full bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-navy-900/5">
                                    {/* Icon */}
                                    <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${benefit.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-navy-900 mb-3">
                                        {t(`items.${benefit.key}.title`)}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-navy-900/70 leading-relaxed">
                                        {t(`items.${benefit.key}.description`)}
                                    </p>

                                    {/* Decorative corner */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-br ${benefit.gradient} opacity-5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500`} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
