import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://parthdhameliya.vercel.app/'; // TODO: Replace with your actual domain
  const pages = [
    '',
    'about',
    'experience',
    'projects',
    'contact',
  ];
  const lastModified = new Date().toISOString();

  const urls = pages.map(
    (page) => `    <url>\n      <loc>${baseUrl}/${page}</loc>\n      <lastmod>${lastModified}</lastmod>\n    </url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 