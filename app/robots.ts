import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example: disallow a private admin page
    },
    sitemap: 'https://your-domain.com/sitemap.xml', // Replace with your domain
  };
} 