'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SparklesIcon, CalendarIcon, StarIcon, HeartIcon, AcademicCapIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export default function CtaSection() {
    const t = useTranslations('ctaSection');

    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-linear-to-br from-navy-900 via-blue-800 to-navy-900">
            {/* Animated background patterns */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating circles */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse" />
                
                {/* Decorative grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Main content card */}
                    <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-linear-to-r from-accent/30 via-accent-hover/30 to-accent/30 rounded-3xl blur-2xl opacity-50" />
                        
                        {/* Content */}
                        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
                            {/* Top accent bar */}
                            <div className="h-2 bg-linear-to-r from-accent via-accent-hover to-accent" />
                            
                            <div className="p-8 sm:p-12 md:p-16 lg:p-20">
                                {/* Header with badge */}
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-accent/20 to-accent-hover/20 rounded-full mb-8 border-2 border-accent/30 shadow-lg">
                                        <SparklesIcon className="w-5 h-5 text-accent animate-pulse" />
                                        <span className="text-sm font-bold text-navy-900 uppercase tracking-wider">{t('badge')}</span>
                                    </div>
                                    
                                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-navy-900 leading-tight">
                                        {t('title')}
                                    </h2>
                                    
                                    <p className="text-lg sm:text-xl text-navy-900/70 max-w-3xl mx-auto leading-relaxed">
                                        {t('subtitle')}
                                    </p>
                                </div>

                                {/* Feature highlights in circular badges */}
                                <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
                                    <div className="flex items-center gap-3 px-6 py-4 bg-linear-to-br from-accent/10 to-transparent rounded-full border border-accent/20">
                                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                                            <AcademicCapIcon className="w-6 h-6 text-navy-900" />
                                        </div>
                                        <span className="text-sm font-semibold text-navy-900">{t('features.education')}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 px-6 py-4 bg-linear-to-br from-accent/10 to-transparent rounded-full border border-accent/20">
                                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                                            <HeartIcon className="w-6 h-6 text-navy-900" />
                                        </div>
                                        <span className="text-sm font-semibold text-navy-900">{t('features.care')}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 px-6 py-4 bg-linear-to-br from-accent/10 to-transparent rounded-full border border-accent/20">
                                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                                            <UserGroupIcon className="w-6 h-6 text-navy-900" />
                                        </div>
                                        <span className="text-sm font-semibold text-navy-900">{t('features.community')}</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="flex flex-col items-center gap-6">
                                    <Link
                                        href="/contact"
                                        className="group relative inline-flex items-center gap-4 px-12 py-6 bg-linear-to-r from-accent via-accent-hover to-accent text-navy-900 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-accent/50 transition-all duration-500 hover:scale-105 overflow-hidden"
                                    >
                                        {/* Shimmer effect */}
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/40 to-transparent" />
                                        
                                        <CalendarIcon className="w-8 h-8 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                                        <span className="relative z-10">{t('form.submit')}</span>
                                        <ArrowRightIcon className="w-7 h-7 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                                    </Link>

                                    {/* Trust indicators */}
                                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-navy-900/60">
                                        <div className="flex items-center gap-2">
                                            <CheckCircleIcon className="w-5 h-5 text-accent" />
                                            <span className="font-medium">{t('trustIndicators.noCommitment')}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircleIcon className="w-5 h-5 text-accent" />
                                            <span className="font-medium">{t('trustIndicators.response24h')}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircleIcon className="w-5 h-5 text-accent" />
                                            <span className="font-medium">{t('trustIndicators.free')}</span>
                                        </div>
                                    </div>

                                    {/* Disclaimer */}
                                    <p className="text-sm text-navy-900/50 flex items-center gap-2">
                                        <CheckCircleIcon className="w-4 h-4 text-accent" />
                                        {t('disclaimer')}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative bottom accent */}
                            <div className="h-1 bg-linear-to-r from-transparent via-accent to-transparent" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating decorative elements */}
            <SparklesIcon className="absolute top-16 left-16 w-6 h-6 text-accent/40 animate-pulse" />
            <SparklesIcon className="absolute top-32 right-24 w-5 h-5 text-accent/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <StarIcon className="absolute bottom-24 left-24 w-7 h-7 text-accent/35 animate-bounce" style={{ animationDelay: '0.3s' }} />
            <StarIcon className="absolute bottom-16 right-16 w-5 h-5 text-accent/30 animate-bounce" style={{ animationDelay: '0.8s' }} />
        </section>
    );
}
