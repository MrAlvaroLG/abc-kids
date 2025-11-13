import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProgramsHero from '@/components/programs/ProgramsHero';
import ProgramsGrid from '@/components/programs/ProgramsGrid';
import ProgramsBenefits from '@/components/programs/ProgramsBenefits';
import ProgramsCTA from '@/components/programs/ProgramsCTA';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'programsPage.meta' });
    
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

export default function ProgramsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <ProgramsHero />
            <ProgramsGrid />
            <ProgramsBenefits />
            <ProgramsCTA />
            <Footer />
        </main>
    );
}
