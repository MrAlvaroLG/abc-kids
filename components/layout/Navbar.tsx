'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="sticky top-0 z-50 bg-surface shadow-md rounded-2xl md:shadow-none md:rounded-none">
            <div className="flex items-center justify-between p-4">
                {/*logo*/}
                <div className="">Logo</div>
                {/*hamburger button*/}
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
