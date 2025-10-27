'use client'

import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useState, useCallback } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [language, setLanguage] = useState<'es' | 'en'>('en')

    const toggleLanguage = useCallback(() => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es')
    }, [])

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    const closeMenu = useCallback(() => {
        setIsOpen(false)
    }, [])

    return (
        <>
            {/* Overlay invisible - cierra el menú al hacer clic fuera */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-transparent"
                    onClick={closeMenu}
                />
            )}

            <div className="sticky top-0 z-50 bg-surface shadow-md rounded-2xl md:shadow-none md:rounded-none will-change-transform">
            <div className="flex items-center justify-between p-4">
                {/*logo*/}
                <div className="">Logo</div>
                
                {/* Botones de idioma y menú */}
                <div className="flex items-center gap-7">
                    {/* Botón de idioma */}
                    <button 
                        className="flex items-center gap-1 md:hidden transition-transform active:scale-95"
                        onClick={toggleLanguage}
                    >
                        <GlobeAltIcon className="h-6 w-6" />
                        <span className="text-sm font-medium uppercase">
                            {language === 'es' ? 'EN' : 'ES'}
                        </span>
                    </button>
                    
                    {/* Botón hamburguesa */}
                    <button 
                        className="block md:hidden transition-transform active:scale-95"
                        onClick={toggleMenu}
                    >
                        <div className={`transition-transform duration-300 will-change-transform ${isOpen ? 'rotate-90' : ''}`}>
                            {isOpen ? (
                                <XMarkIcon className="h-7 w-7" />
                            ) : (
                                <Bars3Icon className="h-7 w-7" />
                            )}
                        </div>
                    </button>
                </div>
            </div>

            {/* Menú móvil desplegable */}
            <div 
                className={`transition-all duration-300 md:duration-500 will-change-transform ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                style={{ transform: 'translateZ(0)' }}
            >
                <nav className="flex flex-col gap-4 p-4 w-full text-lg">
                    <a 
                        href="/programs"
                        onClick={closeMenu}
                        className={`transition-all duration-300 md:duration-500 ease-out will-change-transform hover:text-accent active:scale-95 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                        style={{ 
                            transitionDelay: isOpen ? '0ms' : '0ms',
                            transitionTimingFunction: isOpen ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out',
                            transform: 'translateZ(0)'
                        }}
                    >
                        Programs
                    </a>
                    <a 
                        href="/blog"
                        onClick={closeMenu}
                        className={`transition-all duration-300 md:duration-500 ease-out will-change-transform hover:text-accent active:scale-95 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                        style={{ 
                            transitionDelay: isOpen ? '50ms' : '0ms',
                            transitionTimingFunction: isOpen ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out',
                            transform: 'translateZ(0)'
                        }}
                    >
                        Blog
                    </a>
                    <a 
                        href="/contact"
                        onClick={closeMenu}
                        className={`transition-all duration-300 md:duration-500 ease-out will-change-transform hover:text-accent active:scale-95 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                        style={{ 
                            transitionDelay: isOpen ? '100ms' : '0ms',
                            transitionTimingFunction: isOpen ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out',
                            transform: 'translateZ(0)'
                        }}
                    >
                        Contact
                    </a>
                    <a 
                        href="/about"
                        onClick={closeMenu}
                        className={`transition-all duration-300 md:duration-500 ease-out will-change-transform hover:text-accent active:scale-95 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                        style={{ 
                            transitionDelay: isOpen ? '150ms' : '0ms',
                            transitionTimingFunction: isOpen ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out',
                            transform: 'translateZ(0)'
                        }}
                    >
                        About Us
                    </a>
                    <a 
                        href="/terms"
                        onClick={closeMenu}
                        className={`transition-all duration-300 md:duration-500 ease-out will-change-transform hover:text-accent active:scale-95 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                        style={{ 
                            transitionDelay: isOpen ? '200ms' : '0ms',
                            transitionTimingFunction: isOpen ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-out',
                            transform: 'translateZ(0)'
                        }}
                    >
                        Our Terms
                    </a>
                </nav>
            </div>
        </div>
        </>
    );
}
