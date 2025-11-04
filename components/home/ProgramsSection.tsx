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
            bgColor: 'from-pink-50 to-pink-100',
            borderColor: 'border-pink-200',
            iconBg: 'bg-pink-500',
            delay: 0
        },
        {
            key: 'toddlers',
            icon: faShapes,
            color: 'from-blue-400 to-blue-600',
            bgColor: 'from-blue-50 to-blue-100',
            borderColor: 'border-blue-200',
            iconBg: 'bg-blue-500',
            delay: 200
        },
        {
            key: 'preschool',
            icon: faGraduationCap,
            color: 'from-purple-400 to-purple-600',
            bgColor: 'from-purple-50 to-purple-100',
            borderColor: 'border-purple-200',
            iconBg: 'bg-purple-500',
            delay: 400
        }
    ];

    return (
        <section 
            ref={sectionRef}
            className="relative py-10 md:py-15 lg:py-20 bg-linear-to-b from-surface to-bg overflow-hidden"
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-800/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-lg md:text-xl text-navy-900/60">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                    {programs.map((program) => (
                        <ProgramCard
                            key={program.key}
                            programKey={program.key}
                            icon={program.icon}
                            color={program.color}
                            bgColor={program.bgColor}
                            borderColor={program.borderColor}
                            iconBg={program.iconBg}
                            isVisible={isVisible}
                            delay={program.delay}
                        />
                    ))}
                </div>

                {/* CTA Button */}
                <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <Link 
                        href="/programs"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-800 to-navy-900 text-surface rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                    >
                        {t('cta')}
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

// Program Card Component with 3D Flip Effect
function ProgramCard({ 
    programKey, 
    icon, 
    color, 
    bgColor,
    borderColor,
    iconBg,
    isVisible,
    delay 
}: { 
    programKey: string;
    icon: IconDefinition;
    color: string;
    bgColor: string;
    borderColor: string;
    iconBg: string;
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
            <div 
                className="relative h-[480px] sm:h-[500px] w-full perspective-1000"
            >
                <div 
                    className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Front of Card */}
                    <div 
                        className={`absolute inset-0 w-full h-full backface-hidden bg-linear-to-br ${bgColor} rounded-3xl p-6 sm:p-8 shadow-lg border-2 ${borderColor} flex flex-col items-center justify-center text-center`}
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        {/* Icon */}
                        <div className={`${iconBg} p-5 sm:p-6 rounded-3xl shadow-lg mb-4 sm:mb-6 transition-transform duration-300`}>
                            <FontAwesomeIcon icon={icon} className="fa-2xl h-16 sm:w-20 sm:h-20  text-white" />
                        </div>

                        {/* Program Name & Age */}
                        <h3 className={`text-2xl sm:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-linear-to-r ${color}`}>
                            {programData.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-navy-900/50 mb-3 sm:mb-4 uppercase tracking-wider">
                            {programData.ageRange}
                        </p>

                        {/* Tagline */}
                        <p className="text-base sm:text-lg font-medium text-navy-900 mb-3 sm:mb-4">
                            {programData.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-navy-900/70 leading-relaxed mb-6">
                            {programData.description}
                        </p>

                        {/* Flip Button */}
                        <button
                            onClick={() => setIsFlipped(true)}
                            className={`mt-auto inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r ${color} text-white rounded-full font-semibold text-sm shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group`}
                        >
                            <span>{tSection('viewDetails')}</span>
                            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    {/* Back of Card */}
                    <div 
                        className={`absolute inset-0 w-full h-full backface-hidden bg-linear-to-br ${bgColor} rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col rotate-y-180 border-2 ${borderColor}`}
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                        {/* Header */}
                        <div className="mb-4 sm:mb-6">
                            <h3 className={`text-xl sm:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-linear-to-r ${color}`}>
                                {programData.name}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-navy-900/70">
                                {programData.ageRange}
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="grow mb-4 sm:mb-6">
                            <h4 className="text-navy-900/70 text-xs sm:text-sm font-semibold mb-3 uppercase tracking-wider">
                                Incluye:
                            </h4>
                            <ul className="space-y-2 sm:space-y-3">
                                {programData.features.map((feature, index) => (
                                    <li 
                                        key={index}
                                        className="flex items-start gap-2 text-navy-900 text-xs sm:text-sm"
                                    >
                                        <CheckCircleIcon className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 bg-clip-text text-transparent bg-linear-to-r ${color}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Highlight Badge */}
                        <div className="mt-auto mb-4">
                            <div className={`bg-linear-to-r ${color} bg-opacity-10 backdrop-blur-sm border-2 ${borderColor} rounded-2xl p-3 sm:p-4`}>
                                <div className="flex items-start gap-2">
                                    <FontAwesomeIcon icon={faStar} className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0 mt-0.5" />
                                    <p className="text-navy-900 text-xs sm:text-sm font-semibold leading-snug">
                                        {programData.highlight}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Back Button */}
                        <button
                            onClick={() => setIsFlipped(false)}
                            className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r ${color} text-white rounded-full font-semibold text-sm shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group`}
                        >
                            <ArrowRightIcon className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
                            <span>{tSection('back')}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
