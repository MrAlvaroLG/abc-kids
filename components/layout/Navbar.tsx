'use client'

import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [language, setLanguage] = useState<'es' | 'en'>('en')

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es')
    }

    return (
        <div className="sticky top-0 z-50 bg-surface shadow-md rounded-2xl md:shadow-none md:rounded-none">
            <div className="flex items-center justify-between p-4">
                {/*logo*/}
                <div className="">Logo</div>
                
                {/* Botones de idioma y menú */}
                <div className="flex items-center gap-7">
                    {/* Botón de idioma */}
                    <button 
                        className="flex items-center gap-1 md:hidden"
                        onClick={toggleLanguage}
                    >
                        <GlobeAltIcon className="h-6 w-6" />
                        <span className="text-sm font-medium uppercase">
                            {language === 'es' ? 'EN' : 'ES'}
                        </span>
                    </button>
                    
                    {/* Botón hamburguesa */}
                    <button 
                        className="block md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
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
            <div className={`transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <nav className="flex flex-col gap-4 p-4 w-full text-lg">
                    <a href="/programs">Programs</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                    <a href="/about">About Us</a>
                    <a href="/terms">Our Terms</a>
                </nav>
            </div>
        </div>
    );
}
