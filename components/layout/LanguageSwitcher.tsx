'use client'

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { LanguageIcon } from '@heroicons/react/24/outline';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'es' : 'en';
        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            aria-label="Change language"
            disabled={isPending}
            title={locale === 'en' ? 'Cambiar a Español' : 'Switch to English'}
        >
            <div className={`p-1 md:p-2 rounded-lg  ${
                locale === 'en' 
                    ? 'bg-linear-to-br from-blue-500 via-red-500 to-blue-600' 
                    : 'bg-linear-to-br from-red-500 via-yellow-500 to-red-600'
            }`}>
                <LanguageIcon className="h-5 w-5 md:h-7 md:w-7 text-white" />
            </div>
            <span className={`text-xl md:text-2xl font-semibold uppercase ${
                locale === 'en' ? 'text-blue' : 'text-red-600'
            }`}>
                {locale === 'en' ? 'EN' : 'ES'}
            </span>
        </button>
    );
}
