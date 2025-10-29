'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const t = useTranslations('navbar')

    return (
        <>
            {/* Overlay invisible - cierra el menú al hacer clic fuera */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-transparent"
                    onClick={() => setIsOpen(false)}
                />
            )}

        <div className="sticky top-0 z-50 bg-surface shadow-md rounded-2xl md:shadow-none md:rounded-none">
            <div className="flex items-center justify-between p-4">
                {/*logo*/}
                <Link href="/" className="transition-transform hover:scale-105 duration-300">
                    <Image 
                        src="/logo.png" 
                        alt="ABC Kids Logo" 
                        width={9101} 
                        height={6744}
                        className="h-11 md:h-16 w-auto"
                        priority
                    />
                </Link>
                
                <div className="flex items-center gap-2">
                    {/* Selector de idioma - visible siempre */}
                    <LanguageSwitcher />
                    
                    {/* Botón hamburguesa - solo móvil */}
                    <button 
                        className="block md:hidden w-8 h-8 relative hover:scale-110 transition-transform duration-300 group"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                            {isOpen ? (
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <div className="absolute h-1 w-full bg-navy-900 rounded-full rotate-45 transition-colors duration-300"></div>
                                    <div className="absolute h-1 w-full bg-navy-900 rounded-full -rotate-45 transition-colors duration-300"></div>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-1.5 w-full">
                                    <div className="h-1 w-full bg-navy-900 rounded-full transition-colors duration-300"></div>
                                    <div className="h-1 w-full bg-navy-900 rounded-full transition-colors duration-300"></div>
                                    <div className="h-1 w-full bg-navy-900 rounded-full transition-colors duration-300"></div>
                                </div>
                            )}
                        </div>
                    </button>
                </div>
            </div>

            {/* Menú móvil desplegable */}
            <div className={`transition-all duration-400 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <nav className="flex flex-col gap-4 px-4 pb-4 w-full text-lg font-semibold">
                    <Link 
                        href="/programs"
                        className={`text-navy-900 transition-all duration-400 ease-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                        style={{ 
                            transitionDelay: isOpen ? '0ms' : '0ms',
                            transitionTimingFunction: isOpen ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out'
                        }}
                    >
                        {t('programs')}
                    </Link>
                    <Link 
                        href="/blog"
                        className={`text-navy-900 transition-all duration-400 ease-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                        style={{ 
                            transitionDelay: isOpen ? '50ms' : '0ms',
                            transitionTimingFunction: isOpen ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out'
                        }}
                    >
                        {t('blog')}
                    </Link>
                    <Link 
                        href="/contact"
                        className={`text-navy-900 transition-all duration-400 ease-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                        style={{ 
                            transitionDelay: isOpen ? '100ms' : '0ms',
                            transitionTimingFunction: isOpen ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out'
                        }}
                    >
                        {t('contact')}
                    </Link>
                    <Link 
                        href="/about"
                        className={`text-navy-900 transition-all duration-400 ease-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                        style={{ 
                            transitionDelay: isOpen ? '150ms' : '0ms',
                            transitionTimingFunction: isOpen ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out'
                        }}
                    >
                        {t('about')}
                    </Link>
                    <Link 
                        href="/terms"
                        className={`text-navy-900 transition-all duration-400 ease-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                        style={{ 
                            transitionDelay: isOpen ? '200ms' : '0ms',
                            transitionTimingFunction: isOpen ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out'
                        }}
                    >
                        {t('terms')}
                    </Link>
                </nav>
            </div>
        </div>
        </>
    );
}
