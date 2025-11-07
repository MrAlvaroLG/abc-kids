'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
    CheckCircleIcon,
    ArrowRightIcon
} from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBabyCarriage, 
    faShapes, 
    faStar,
    faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export default function ProgramsSection() {
    const t = useTranslations('programsSection');
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

        const currentSection = sectionRef.current;

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    const programs = [
        {
            key: 'infants',
            icon: faBabyCarriage,
            color: 'from-pink-400 to-pink-600',
            colorSolid: 'pink-500',
            bgColor: 'from-pink-50/80 to-pink-100/80',
            accentColor: 'bg-pink-500',
            delay: 0
        },
        {
            key: 'toddlers',
            icon: faShapes,
            color: 'from-blue-400 to-blue-600',
            colorSolid: 'blue-500',
            bgColor: 'from-blue-50/80 to-blue-100/80',
            accentColor: 'bg-blue-500',
            delay: 200
        },
        {
            key: 'preschool',
            icon: faGraduationCap,
            color: 'from-purple-400 to-purple-600',
            colorSolid: 'purple-500',
            bgColor: 'from-purple-50/80 to-purple-100/80',
            accentColor: 'bg-purple-500',
            delay: 400
        }
    ];

    return (
        <section 
            ref={sectionRef}
            className="relative pb-10 bg-linear-to-b from-surface to-bg overflow-hidden"
        >
            {/* Animated background elements - consistent with other sections */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 -right-32 w-96 h-96 bg-blue-800/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header - simplified and consistent */}
                <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-base sm:text-lg text-navy-900/60">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Programs Grid - Better responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                    {programs.map((program) => (
                        <ProgramCard
                            key={program.key}
                            programKey={program.key}
                            icon={program.icon}
                            color={program.color}
                            colorSolid={program.colorSolid}
                            bgColor={program.bgColor}
                            accentColor={program.accentColor}
                            isVisible={isVisible}
                            delay={program.delay}
                        />
                    ))}
                </div>

                {/* CTA Button - consistent style */}
                <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <Link 
                        href="/programs"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-800 to-navy-900 text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                    >
                        {t('cta')}
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

// Program Card Component - Harmonized with other sections
function ProgramCard({ 
    programKey, 
    icon, 
    color,
    colorSolid,
    bgColor,
    accentColor,
    isVisible,
    delay 
}: { 
    programKey: string;
    icon: IconDefinition;
    color: string;
    colorSolid: string;
    bgColor: string;
    accentColor: string;
    isVisible: boolean;
    delay: number;
}) {
    const tSection = useTranslations('programsSection');
    const t = useTranslations('programsSection.programs');
    const [isFlipped, setIsFlipped] = useState(false);
    const programData = t.raw(programKey) as {
        name: string;
        ageRange: string;
        tagline: string;
        description: string;
        features: string[];
        highlight: string;
    };

    return (
        <div 
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* 3D Flip Container */}
            <div className="relative h-[450px] sm:h-[480px] w-full perspective-1000">
                <div 
                    className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Front of Card - Harmonized design */}
                    <div 
                        className={`absolute inset-0 w-full h-full backface-hidden bg-linear-to-br ${bgColor} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-navy-900/5 flex flex-col overflow-hidden`}
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        {/* Icon section */}
                        <div className="p-6 sm:p-8 flex flex-col items-center text-center">
                            <div className={`${accentColor} w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300`}>
                                <FontAwesomeIcon icon={icon} className="text-3xl text-white" />
                            </div>

                            {/* Program Name */}
                            <h3 className={`text-2xl sm:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-linear-to-r ${color}`}>
                                {programData.name}
                            </h3>

                            {/* Age Range */}
                            <p className="text-sm font-semibold text-navy-900/60 mb-3 uppercase tracking-wider">
                                {programData.ageRange}
                            </p>

                            {/* Tagline */}
                            <p className="text-base font-medium text-navy-900 mb-3">
                                {programData.tagline}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-navy-900/70 leading-relaxed">
                                {programData.description}
                            </p>
                        </div>

                        {/* Button at bottom */}
                        <div className="mt-auto p-6 sm:p-8 pt-0">
                            <button
                                onClick={() => setIsFlipped(true)}
                                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r ${color} text-white rounded-full font-semibold text-sm shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300`}
                            >
                                <span>{tSection('viewDetails')}</span>
                                <ArrowRightIcon className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Back of Card - Consistent style */}
                    <div 
                        className={`absolute inset-0 w-full h-full backface-hidden bg-white rounded-3xl shadow-2xl border border-navy-900/5 rotate-y-180 overflow-hidden flex flex-col`}
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                        <div className="p-6 sm:p-8 flex flex-col h-full">
                            {/* Header */}
                            <div className="mb-6">
                                <h3 className={`text-2xl font-bold mb-2 bg-clip-text text-transparent bg-linear-to-r ${color}`}>
                                    {programData.name}
                                </h3>
                                <p className="text-sm font-semibold text-navy-900/60 uppercase tracking-wider">
                                    {programData.ageRange}
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="grow mb-6">
                                <h4 className="text-xs font-bold text-navy-900/60 uppercase tracking-wider mb-4">
                                    Incluye:
                                </h4>
                                <ul className="space-y-3">
                                    {programData.features.map((feature, index) => (
                                        <li 
                                            key={index}
                                            className="flex items-start gap-3 text-navy-900 text-sm leading-snug"
                                        >
                                            <CheckCircleIcon className={`w-5 h-5 shrink-0 mt-0.5 text-${colorSolid}`} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Highlight Badge */}
                            <div className="bg-gray-50 rounded-2xl p-4 mb-4 border border-navy-900/10">
                                <div className="flex items-start gap-2">
                                    <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <p className="text-navy-900 text-sm font-semibold leading-snug">
                                        {programData.highlight}
                                    </p>
                                </div>
                            </div>

                            {/* Back Button */}
                            <button
                                onClick={() => setIsFlipped(false)}
                                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r ${color} text-white rounded-full font-semibold text-sm shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300`}
                            >
                                <ArrowRightIcon className="w-4 h-4 rotate-180" />
                                <span>{tSection('back')}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
