'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState, useRef } from 'react';
import { 
    SparklesIcon, 
    UserGroupIcon, 
    StarIcon
} from '@heroicons/react/24/solid';

export default function TrustSection() {
    const t = useTranslations('trustSection');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
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

    const stats = [
        {
            key: 'experience',
            icon: SparklesIcon,
            gradient: 'from-blue-500 to-blue-800',
            bgGradient: 'from-blue-500/10 to-blue-800/10',
            delay: 0
        },
        {
            key: 'families',
            icon: UserGroupIcon,
            gradient: 'from-accent to-accent-hover',
            bgGradient: 'from-accent/10 to-accent-hover/10',
            delay: 200
        },
        {
            key: 'googleRating',
            icon: StarIcon,
            gradient: 'from-yellow-400 to-orange-500',
            bgGradient: 'from-yellow-400/10 to-orange-500/10',
            delay: 400
        }
    ];

    const testimonials = t.raw('testimonials.items') as Array<{
        name: string;
        text: string;
        rating: number;
    }>;

    return (
        <section 
            ref={sectionRef}
            className="relative py-16 md:py-24 lg:py-32 bg-linear-to-b from-bg to-surface overflow-hidden"
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-800/5 rounded-full blur-3xl" />
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

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
                    {stats.map((stat) => (
                        <StatCard
                            key={stat.key}
                            statKey={stat.key}
                            icon={stat.icon}
                            gradient={stat.gradient}
                            bgGradient={stat.bgGradient}
                            isVisible={isVisible}
                            delay={stat.delay}
                        />
                    ))}
                </div>

                {/* Testimonials */}
                <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-col items-center justify-center gap-4 mb-8 md:mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-navy-900 text-center">
                            {t('testimonials.title')}
                        </h3>
                        {/* Google logo badge */}
                        <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full shadow-md border border-navy-900/10">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <span className="text-sm font-semibold text-navy-900">Google</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                testimonial={testimonial}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Stat Card Component with Counter Animation
function StatCard({ 
    statKey, 
    icon: Icon, 
    gradient, 
    bgGradient,
    isVisible,
    delay 
}: { 
    statKey: string, 
    icon: React.ComponentType<{ className?: string }>,
    gradient: string,
    bgGradient: string,
    isVisible: boolean,
    delay: number
}) {
    const t = useTranslations('trustSection.stats');
    const [count, setCount] = useState(0);
    const targetNumber = parseFloat(t(`${statKey}.number`));
    const suffix = t(`${statKey}.suffix`);
    const hasDecimals = targetNumber % 1 !== 0;

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepValue = targetNumber / steps;
        let currentStep = 0;

        const timer = setTimeout(() => {
            const counter = setInterval(() => {
                currentStep++;
                if (currentStep <= steps) {
                    const newValue = stepValue * currentStep;
                    setCount(hasDecimals ? Math.round(newValue * 10) / 10 : Math.floor(newValue));
                } else {
                    setCount(targetNumber);
                    clearInterval(counter);
                }
            }, duration / steps);

            return () => clearInterval(counter);
        }, delay);

        return () => clearTimeout(timer);
    }, [isVisible, targetNumber, delay, hasDecimals]);

    return (
        <div 
            className={`group relative bg-surface rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-navy-900/5 overflow-hidden ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-linear-to-br ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                {/* Number with Counter Animation */}
                <div className="mb-2">
                    <span className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r ${gradient}`}>
                        {hasDecimals ? count.toFixed(1) : count}{suffix}
                    </span>
                </div>

                {/* Label */}
                <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-2">
                    {t(`${statKey}.label`)}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-navy-900/60 leading-relaxed">
                    {t(`${statKey}.description`)}
                </p>
            </div>

            {/* Decorative corner */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${gradient} opacity-5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500`} />
        </div>
    );
}

// Testimonial Card Component
function TestimonialCard({ 
    testimonial, 
    delay 
}: { 
    testimonial: { name: string, text: string, rating: number }, 
    delay: number 
}) {
    const t = useTranslations('trustSection.testimonials');
    
    return (
        <div 
            className="group relative bg-surface rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-navy-900/5 hover:border-accent/20 hover:-translate-y-2"
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon 
                        key={i} 
                        className="w-5 h-5 text-accent animate-pulse" 
                        style={{ animationDelay: `${i * 100}ms` }}
                    />
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-navy-900/70 text-sm md:text-base mb-4 italic leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-accent to-accent-hover flex items-center justify-center text-navy-900 font-bold shadow-md">
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <p className="font-semibold text-navy-900 text-sm">
                        {testimonial.name}
                    </p>
                    <p className="text-xs text-navy-900/50">
                        {t('role')}
                    </p>
                </div>
            </div>

            {/* Quote decoration */}
            <div className="absolute top-4 right-4 text-6xl text-accent/10 font-serif leading-none">
                &ldquo;
            </div>
        </div>
    );
}
