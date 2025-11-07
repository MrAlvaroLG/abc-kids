'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { SparklesIcon, CalendarIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function CtaSection() {
    const t = useTranslations('ctaSection');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        console.log('Schedule request', { name, email, date });
        setTimeout(() => {
            setSent(false);
            setName('');
            setEmail('');
            setDate('');
        }, 3000);
    };

    return (
        <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-linear-to-br from-accent/10 via-accent/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            
            {/* Decorative sparkles */}
            <SparklesIcon className="absolute top-10 left-10 w-8 h-8 text-accent/30 animate-pulse" />
            <SparklesIcon className="absolute bottom-20 right-20 w-6 h-6 text-accent/30 animate-pulse" style={{ animationDelay: '0.5s' }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6 border border-accent/30">
                            <SparklesIcon className="w-5 h-5 text-accent" />
                            <span className="text-sm font-semibold text-navy-900">Tour Gratuito</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-navy-900">
                            {t('title')}
                        </h2>
                        <p className="text-base sm:text-lg text-navy-900/70 max-w-2xl mx-auto">
                            {t('subtitle')}
                        </p>
                    </div>

                    {/* Form card with modern glassmorphism */}
                    <div className="relative">
                        {/* Glow effect behind card */}
                        <div className="absolute inset-0 bg-linear-to-r from-accent via-accent-hover to-accent blur-2xl opacity-20 rounded-3xl" />
                        
                        <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-accent/20">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Form fields grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {/* Name input */}
                                    <div className="relative group">
                                        <label className="block text-sm font-semibold text-navy-900/80 mb-2">
                                            {t('form.name')}
                                        </label>
                                        <div className="relative">
                                            <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-900/40 group-focus-within:text-accent transition-colors" />
                                            <input
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Juan Pérez"
                                                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-navy-900/10 bg-bg/50 focus:border-accent focus:bg-white focus:outline-none transition-all duration-200 font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Email input */}
                                    <div className="relative group">
                                        <label className="block text-sm font-semibold text-navy-900/80 mb-2">
                                            {t('form.email')}
                                        </label>
                                        <div className="relative">
                                            <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-900/40 group-focus-within:text-accent transition-colors" />
                                            <input
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="correo@ejemplo.com"
                                                type="email"
                                                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-navy-900/10 bg-bg/50 focus:border-accent focus:bg-white focus:outline-none transition-all duration-200 font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Date input */}
                                    <div className="relative group">
                                        <label className="block text-sm font-semibold text-navy-900/80 mb-2">
                                            {t('form.date')}
                                        </label>
                                        <div className="relative">
                                            <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-900/40 group-focus-within:text-accent transition-colors" />
                                            <input
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                                type="date"
                                                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-navy-900/10 bg-bg/50 focus:border-accent focus:bg-white focus:outline-none transition-all duration-200 font-medium"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    disabled={sent}
                                    className="group relative w-full overflow-hidden px-8 py-5 bg-linear-to-r from-accent to-accent-hover text-navy-900 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <span className="relative flex items-center justify-center gap-2">
                                        {sent ? (
                                            <>
                                                <CheckCircleIcon className="w-6 h-6 animate-bounce" />
                                                {t('form.sending')}
                                            </>
                                        ) : (
                                            <>
                                                <CalendarIcon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                                {t('form.submit')}
                                            </>
                                        )}
                                    </span>
                                </button>

                                {/* Disclaimer */}
                                <p className="text-center text-xs text-navy-900/50 flex items-center justify-center gap-1">
                                    <CheckCircleIcon className="w-4 h-4 text-accent" />
                                    {t('disclaimer')}
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-navy-900/60">
                        <div className="flex items-center gap-2">
                            <CheckCircleIcon className="w-5 h-5 text-accent" />
                            <span>Sin compromiso</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircleIcon className="w-5 h-5 text-accent" />
                            <span>Respuesta en 24 horas</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircleIcon className="w-5 h-5 text-accent" />
                            <span>100% gratuito</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
