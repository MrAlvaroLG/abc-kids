import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import { ContactDetails, BusinessHours } from '@/components/contact/ContactInfo';
import ContactSocialResponse from '@/components/contact/ContactSocialResponse';
import ContactMap from '@/components/contact/ContactMap';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'contactPage.meta' });
    
    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        openGraph: {
            title: t('title'),
            description: t('description'),
            type: 'website',
            locale,
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
        <main className="min-h-screen bg-white">
            <Navbar />
            <ContactHero />
            
            {/* Main Content Section */}
            <section className="relative py-16 md:py-24 bg-gray-50">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-40 -right-40 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Contact Form - Full Width */}
                    <div className="mb-12">
                        <ContactForm />
                    </div>

                    {/* Two Column Layout: Contact Details + Business Hours */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <ContactDetails />
                        <BusinessHours />
                    </div>

                    {/* Social Media & WhatsApp CTA */}
                    <div className="mb-16">
                        <ContactSocialResponse />
                    </div>

                    {/* Map Section */}
                    <ContactMap />
                </div>
            </section>

            <Footer />
        </main>
    );
}
