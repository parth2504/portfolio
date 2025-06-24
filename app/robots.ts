import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example: disallow a private admin page
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`, // Replace with your domain
  };
}