import { getTranslations } from 'next-intl/server';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'blogPage.meta' });

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
    };
}

async function getPosts() {
    return await client.fetch(postsQuery);
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <main className="min-h-screen">
            <Navbar />
            <BlogHero />
            <BlogGrid posts={posts} />
            <Footer />
        </main>
    );
}
