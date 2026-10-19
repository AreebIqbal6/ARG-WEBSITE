import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'Anthropic-AI', 'ClaudeBot', 'PerplexityBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://argregistrars.com/sitemap.xml',
    host: 'https://argregistrars.com',
  };
}
