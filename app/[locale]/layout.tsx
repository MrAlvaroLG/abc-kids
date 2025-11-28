import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Poppins, Fredoka } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { seoConfig } from "@/components/seo/seo.config";
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

/**
 * Metadata SEO Global
 * 
 * Esta es la metadata base que se aplica a todas las páginas.
 * Cada página puede sobrescribir estos valores con su propia metadata.
 * 
 * La información se importa desde seo.config.ts para facilitar su mantenimiento.
 */
export const metadata: Metadata = {
    // Base URL para resolver URLs relativas en metadata
    metadataBase: new URL(seoConfig.site.url),
    
    // Título por defecto y template para páginas hijas
    title: {
        default: `${seoConfig.business.name} Tampa | Best Childcare & Preschool in Tampa FL`,
        template: `%s | ${seoConfig.site.name}`
    },
    
    // Descripción optimizada con keywords locales
    description: seoConfig.business.description.en,
    
    // Keywords importantes para SEO local
    keywords: seoConfig.keywords.en,
    
    // Información del autor/empresa
    authors: [{ name: seoConfig.business.name, url: seoConfig.site.url }],
    creator: seoConfig.business.name,
    publisher: seoConfig.business.name,
    
    // Configuración de robots
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    
    // Open Graph para Facebook, LinkedIn, etc.
    openGraph: {
        type: "website",
        locale: "en_US",
        alternateLocale: ["es_US"],
        url: seoConfig.site.url,
        siteName: seoConfig.site.name,
        title: `${seoConfig.site.name} | Best Childcare & Preschool`,
        description: `Tampa's top-rated daycare center. Infant care, toddlers, Pre-K, VPK & after-school programs. Bilingual staff. Trusted by 500+ happy families!`,
        images: [
            {
                url: seoConfig.images.ogImage,
                width: seoConfig.images.ogImageDimensions.width,
                height: seoConfig.images.ogImageDimensions.height,
                alt: `${seoConfig.business.name} - Happy Children Learning and Playing`,
                type: "image/jpeg",
            }
        ],
    },
    
    // Twitter/X Card
    twitter: {
        card: "summary_large_image",
        title: `${seoConfig.site.name} | Best Childcare & Preschool`,
        description: "Tampa's top-rated daycare. Infant care, Pre-K, VPK & after-school. Schedule your tour today!",
        images: [seoConfig.images.ogImage],
        creator: seoConfig.social.twitter || undefined,
        site: seoConfig.social.twitter || undefined,
    },
    
    // Verificación de Google Search Console
    verification: {
        google: seoConfig.verification.google || undefined,
    },
    
    // URLs canónicas y alternativas de idioma
    alternates: {
        canonical: seoConfig.site.url,
        languages: {
            'en': `${seoConfig.site.url}/en`,
            'es': `${seoConfig.site.url}/es`,
            'x-default': `${seoConfig.site.url}/en`,
        },
    },
    
    // Categoría del sitio
    category: "childcare",
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
            <head>
                {/* Schema.org LocalBusiness para SEO local */}
                <LocalBusinessSchema />
            </head>
            <body className={`${poppins.variable} ${fredoka.variable} bg-bg antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
