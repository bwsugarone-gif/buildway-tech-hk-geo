import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buildway.tech'; // Replace with actual production domain

  const staticRoutes = [
    '',
    '/blog',
    '/cases',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogRoutes = [
    '/blog/sme-ai-automation-2026',
    '/blog/whatsapp-ai-crm',
    '/blog/ai-document-automation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const caseRoutes = [
    '/cases/construction-admin-automation',
    '/cases/insurance-team-crm',
    '/cases/renovation-quotation-ai',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...caseRoutes];
}
