'use client';

import { useTranslations } from 'next-intl';
import { 
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon
} from '@heroicons/react/24/outline';

export default function ContactHero() {
    const t = useTranslations('contactPage');

    const quickContacts = [
        {
            icon: PhoneIcon,
            label: t('hero.phone'),
            value: '+1 (813) 512-2511',
            href: 'tel:+18135122511'
        },
        {
            icon: EnvelopeIcon,
            label: t('hero.email'),
            value: 'info@abckids.com',
            href: 'mailto:info@abckids.com'
        },
        {
            icon: ClockIcon,
            label: t('hero.hours'),
            value: t('hero.hoursValue'),
            href: null
        }
    ];

    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-linear-to-b from-navy-900 to-blue-800 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Hero Content */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent font-semibold text-sm mb-6 animate-fade-in">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        {t('hero.badge')}
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                        {t('hero.title')}
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-white/80 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        {t('hero.subtitle')}
                    </p>
                </div>

                {/* Quick Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {quickContacts.map((contact, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                            {contact.href ? (
                                <a href={contact.href} className="block group">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                            <contact.icon className="w-6 h-6 text-navy-900" />
                                        </div>
                                        <p className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">
                                            {contact.label}
                                        </p>
                                        <p className="text-sm font-semibold text-white group-hover:text-accent transition-colors duration-300">
                                            {contact.value}
                                        </p>
                                    </div>
                                </a>
                            ) : (
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-3">
                                        <contact.icon className="w-6 h-6 text-navy-900" />
                                    </div>
                                    <p className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">
                                        {contact.label}
                                    </p>
                                    <p className="text-sm font-semibold text-white">
                                        {contact.value}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
