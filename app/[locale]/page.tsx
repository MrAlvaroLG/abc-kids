import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import CtaSection from "@/components/home/CtaSection";
import LocationSection from "@/components/home/LocationSection";
import { seoConfig } from "@/components/seo/seo.config";

/**
 * Metadata específica para la página de inicio
 * 
 * Esta metadata sobrescribe la del layout para la página principal.
 * Está optimizada con keywords de alta intención para "daycare Tampa".
 */
export async function generateMetadata({ 
    params 
}: { 
    params: Promise<{ locale: string }> 
}): Promise<Metadata> {
    const { locale } = await params;
    const { site, business, keywords } = seoConfig;
    
    // Metadata en español
    if (locale === 'es') {
        return {
            title: `${business.name} Tampa | La Mejor Guardería y Preescolar en Tampa FL`,
            description: business.description.es,
            keywords: keywords.es,
            alternates: {
                canonical: `${site.url}/es`,
                languages: {
                    'en': `${site.url}/en`,
                    'es': `${site.url}/es`,
                },
            },
            openGraph: {
                title: `${business.name} Tampa | La Mejor Guardería en Tampa`,
                description: "Guardería bilingüe en Tampa. Cuidado de bebés, Pre-K, VPK. ¡Agenda tu visita!",
                locale: "es_US",
            },
        };
    }
    
    // Metadata en inglés (por defecto)
    return {
        title: `${business.name} Tampa | Best Childcare & Preschool in Tampa FL`,
        description: `${business.name} is Tampa's #1 rated daycare and preschool. Infant care, toddler programs, Pre-K, VPK, and after-school. Bilingual staff. Trusted by 500+ families. Secure facility with cameras. Schedule your free tour today!`,
        keywords: keywords.en,
        alternates: {
            canonical: `${site.url}/en`,
            languages: {
                'en': `${site.url}/en`,
                'es': `${site.url}/es`,
            },
        },
        openGraph: {
            title: `${site.name} | Best Childcare & Preschool`,
            description: "Tampa's top-rated daycare. Infant care, Pre-K, VPK & after-school. Schedule your tour!",
            locale: "en_US",
        },
    };
}

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <HeroSection />
            <TrustSection />
            <ProgramsSection />
            <LocationSection />
            <CtaSection />
            <Footer />
        </main>
    );
}
