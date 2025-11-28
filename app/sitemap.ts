/**
 * Sitemap.xml Dinámico
 * 
 * Este archivo genera automáticamente un sitemap.xml con todas las páginas de tu sitio.
 * Google usa este archivo para descubrir e indexar todas tus páginas.
 * 
 * El sitemap estará disponible en: https://tudominio.com/sitemap.xml
 * 
 * La información del dominio se importa desde seo.config.ts
 */

import { MetadataRoute } from 'next';
import { seoConfig } from '@/components/seo/seo.config';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = seoConfig.site.url;
    
    // Todas las rutas de tu sitio
    const routes = [
        { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
        { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
        { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
        { path: '/programs', priority: 0.95, changeFrequency: 'weekly' as const },
        { path: '/programs/infants', priority: 0.85, changeFrequency: 'monthly' as const },
        { path: '/programs/toddlers', priority: 0.85, changeFrequency: 'monthly' as const },
        { path: '/programs/prek', priority: 0.85, changeFrequency: 'monthly' as const },
        { path: '/programs/vpk', priority: 0.85, changeFrequency: 'monthly' as const },
        { path: '/programs/after-school', priority: 0.85, changeFrequency: 'monthly' as const },
        { path: '/blog', priority: 0.8, changeFrequency: 'daily' as const },
        { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    ];
    
    // Idiomas disponibles desde config
    const locales = seoConfig.site.locales;
    
    const sitemapEntries: MetadataRoute.Sitemap = [];
    
    // Generar entrada para cada combinación de idioma y ruta
    locales.forEach(locale => {
        routes.forEach(route => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${route.path}`,
                lastModified: new Date(),
                changeFrequency: route.changeFrequency,
                priority: route.priority,
                alternates: {
                    languages: Object.fromEntries(
                        locales.map(l => [l, `${baseUrl}/${l}${route.path}`])
                    ),
                },
            });
        });
    });
    
    return sitemapEntries;
}
