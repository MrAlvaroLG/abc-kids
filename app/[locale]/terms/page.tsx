import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TermsHero from '@/components/terms/TermsHero';
import TermsContent from '@/components/terms/TermsContent';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'termsPage.meta' });
    
    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
    };
}

export default function TermsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <TermsHero />
            <TermsContent />
            <Footer />
        </main>
    );
}
