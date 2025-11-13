import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactSocialResponse from '@/components/contact/ContactSocialResponse';
import ContactMap from '@/components/contact/ContactMap';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale: params.locale, namespace: 'contactPage.meta' });
    
    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        openGraph: {
            title: t('title'),
            description: t('description'),
            type: 'website',
            locale: params.locale,
        },
        twitter: {
            card: 'summary_large_image',
            title: t('title'),
            description: t('description'),
        }
    };
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-bg">
            <Navbar />
            <ContactHero />
            
            <div className="relative py-16 md:py-24">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-20 -right-32 w-96 h-96 bg-blue-800/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
                        {/* Contact Form */}
                        <ContactForm />
                        
                        {/* Contact Info */}
                        <ContactInfo />
                    </div>

                    {/* Social Media & Response Time - Full Width */}
                    <ContactSocialResponse />

                    {/* Map Section */}
                    <ContactMap />
                </div>
            </div>

            <Footer />
        </main>
    );
}
