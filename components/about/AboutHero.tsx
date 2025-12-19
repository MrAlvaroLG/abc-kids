'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

export default function AboutHero() {
    const t = useTranslations('aboutPage.hero');

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-linear-to-br from-navy-900 via-blue-900 to-navy-900">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 mb-8">
                            <ShieldCheckIcon className="w-5 h-5 text-green-400" />
                            <span className="text-white/90 text-sm font-medium">{t('badge')}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-6 leading-[1.1]">
                            {t('title')}
                            <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-accent via-yellow-300 to-accent">
                                {t('titleHighlight')}
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            {t('subtitle')}
                        </p>

                        {/* Features List */}
                        <div className="space-y-4 mb-10">
                            {['feature1', 'feature2', 'feature3'].map((item) => (
                                <div key={item} className="flex items-center gap-3 justify-center lg:justify-start">
                                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-white/80 text-lg">{t(`features.${item}`)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Image Mosaic */}
                    <div className="relative">
                        <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[500px] lg:h-[600px]">
                            {/* Main large image */}
                            <div className="col-span-7 row-span-4 relative rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/about/personal/photo5.jpeg"
                                    alt="ABC Kids Team"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-navy-900/60 via-transparent to-transparent" />
                            </div>

                            {/* Top right image */}
                            <div className="col-span-5 row-span-3 relative rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/about/kids/photo1.jpeg"
                                    alt="Happy Kids at ABC Kids"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-navy-900/40 via-transparent to-transparent" />
                            </div>

                            {/* Bottom left */}
                            <div className="col-span-4 row-span-2 relative rounded-2xl overflow-hidden shadow-xl group">
                                <Image
                                    src="/about/kids/photo2.jpeg"
                                    alt="Learning Activities"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Bottom middle */}
                            <div className="col-span-3 row-span-2 relative rounded-2xl overflow-hidden shadow-xl group">
                                <Image
                                    src="/about/personal/photo7.jpeg"
                                    alt="Our Educators"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Bottom right */}
                            <div className="col-span-5 row-span-3 relative rounded-2xl overflow-hidden shadow-xl group">
                                <Image
                                    src="/about/kids/photo3.jpeg"
                                    alt="Playtime Fun"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-white/50 text-xs uppercase tracking-widest">{t('scroll')}</span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
