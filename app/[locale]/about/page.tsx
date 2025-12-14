import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutVision from '@/components/about/AboutVision';
import AboutPhilosophy from '@/components/about/AboutPhilosophy';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';
import ProgramsCTA from '@/components/programs/ProgramsCTA';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'aboutPage.meta' });
    
    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        openGraph: {
            title: t('title'),
            description: t('description'),
            type: 'website',
        },
    };
}

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <AboutHero />
            <AboutMission />
            <AboutVision />
            <AboutPhilosophy />
            <AboutValues />
            <AboutTeam />
            <ProgramsCTA />
            <Footer />
        </main>
    );
}
