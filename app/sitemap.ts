import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/experience`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6
    },
  ];
}