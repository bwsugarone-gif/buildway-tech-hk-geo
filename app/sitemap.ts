import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buildway.tech'; // Replace with actual production domain

  const staticRoutes = [
    '',
    '/blog',
    '/cases',
    '/about',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogRoutes = [
    '/blog/start-sme-ai-automation',
    '/blog/whatsapp-crm-value',
    '/blog/renovation-ai-quotation',
    '/blog/engineering-doc-automation',
    '/blog/insurance-team-crm-compare',
    '/blog/site-foreman-ai-automation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const caseRoutes = [
    '/cases/poc-doc-search',
    '/cases/poc-quotation-assistant',
    '/cases/poc-site-diary',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...caseRoutes];
}
