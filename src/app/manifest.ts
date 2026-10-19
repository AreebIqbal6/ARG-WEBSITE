import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ARG REGISTRARS PAKISTAN',
    short_name: 'ARG Registrars',
    description: 'Accredited ISO Management Certifications & C-TPAT Security Audits',
    start_url: '/',
    display: 'standalone',
    background_color: '#030906',
    theme_color: '#00873E',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
