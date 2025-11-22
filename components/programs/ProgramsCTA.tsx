'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export default function ProgramsCTA() {
    const t = useTranslations('programsPage.cta');

    return (
        <section className="relative py-20 md:py-32 bg-linear-to-br from-navy-900 via-blue-800 to-navy-900 overflow-hidden">
            {/* Decorative elements - Simplified for a cleaner look */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/grid.svg')] opacity-5" />
                <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                        {t('title')}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed font-light">
                        {t('subtitle')}
                    </p>

                    {/* Action button - Centered and Prominent */}
                    <div className="flex justify-center">
                        <Link href="/contact">
                            <button className="group relative inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-navy-900 font-bold text-lg py-5 px-10 rounded-full shadow-2xl transition-all duration-300 hover:shadow-accent/20 hover:-translate-y-1 hover:scale-105">
                                <CalendarIcon className="w-6 h-6" />
                                <span>{t('scheduleVisit')}</span>
                                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
