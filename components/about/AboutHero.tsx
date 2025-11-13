'use client';

import { useTranslations } from 'next-intl';
import { HeartIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/solid';

export default function AboutHero() {
    const t = useTranslations('aboutPage.hero');

    return (
        <section className="relative min-h-[70vh] flex items-center justify-center bg-linear-to-br from-navy-900 via-blue-800 to-navy-900 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/20 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6 animate-fade-in">
                            <HeartIcon className="w-5 h-5 text-accent" />
                            <span className="text-white/90 text-sm font-medium">{t('badge')}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                            {t('title')}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            {t('subtitle')}
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <HeartIcon className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-2">{t('features.care.title')}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{t('features.care.description')}</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <SparklesIcon className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-2">{t('features.excellence.title')}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{t('features.excellence.description')}</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <UserGroupIcon className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-2">{t('features.community.title')}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{t('features.community.description')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
