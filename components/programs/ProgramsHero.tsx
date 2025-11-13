'use client';

import { useTranslations } from 'next-intl';
import { SparklesIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function ProgramsHero() {
    const t = useTranslations('programsPage');

    return (
        <section className="relative min-h-[60vh] flex items-center justify-center bg-linear-to-br from-navy-900 via-blue-800 to-navy-900 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/20 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6 animate-fade-in">
                        <SparklesIcon className="w-5 h-5 text-accent" />
                        <span className="text-white/90 text-sm font-medium">{t('hero.badge')}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                        {t('hero.title')}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        {t('hero.subtitle')}
                    </p>

                    {/* Feature highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <AcademicCapIcon className="w-10 h-10 text-accent mx-auto mb-3" />
                            <h3 className="text-white font-semibold mb-2">{t('hero.features.academic')}</h3>
                            <p className="text-white/70 text-sm">{t('hero.features.academicDesc')}</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <HeartIcon className="w-10 h-10 text-accent mx-auto mb-3" />
                            <h3 className="text-white font-semibold mb-2">{t('hero.features.care')}</h3>
                            <p className="text-white/70 text-sm">{t('hero.features.careDesc')}</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <SparklesIcon className="w-10 h-10 text-accent mx-auto mb-3" />
                            <h3 className="text-white font-semibold mb-2">{t('hero.features.bilingual')}</h3>
                            <p className="text-white/70 text-sm">{t('hero.features.bilingualDesc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
