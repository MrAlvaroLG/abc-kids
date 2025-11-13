'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { PhoneIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/solid';

export default function ProgramsCTA() {
    const t = useTranslations('programsPage.cta');

    return (
        <section className="relative py-16 md:py-24 bg-linear-to-br from-navy-900 via-blue-800 to-navy-900 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t('title')}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link href="/contact">
                            <button className="group relative overflow-hidden bg-accent hover:bg-accent-hover text-navy-900 font-bold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <CalendarIcon className="w-5 h-5" />
                                    {t('scheduleTour')}
                                </span>
                                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            </button>
                        </Link>

                        <a href="tel:+18135122511">
                            <button className="group relative overflow-hidden bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl border-2 border-white/30 transition-all duration-300 hover:border-white/50">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <PhoneIcon className="w-5 h-5" />
                                    {t('callNow')}
                                </span>
                            </button>
                        </a>
                    </div>

                    {/* Quick contact info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <PhoneIcon className="w-8 h-8 text-accent mx-auto mb-3" />
                            <p className="text-white/70 text-sm mb-1">{t('phone.label')}</p>
                            <a href="tel:+18135122511" className="text-white font-semibold hover:text-accent transition-colors">
                                +1 (813) 512-2511
                            </a>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <MapPinIcon className="w-8 h-8 text-accent mx-auto mb-3" />
                            <p className="text-white/70 text-sm mb-1">{t('location.label')}</p>
                            <p className="text-white font-semibold">Tampa, FL</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <CalendarIcon className="w-8 h-8 text-accent mx-auto mb-3" />
                            <p className="text-white/70 text-sm mb-1">{t('hours.label')}</p>
                            <p className="text-white font-semibold">Lun-Vie 7AM-6PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
