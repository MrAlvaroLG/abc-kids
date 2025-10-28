import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Poppins, Fredoka } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import "../globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
});

const fredoka = Fredoka({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-fredoka",
    display: "swap",
});

export const metadata: Metadata = {
    title: "ABC Kids - Day Care",
    description: "Education and daycare center",
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    
    if (!routing.locales.includes(locale as 'en' | 'es')) {
        notFound();
    }
    
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${poppins.variable} ${fredoka.variable} bg-bg antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
