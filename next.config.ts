import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // Redirect configuration for SEO
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'antalyadiyetisyen.net',
          },
        ],
        destination: 'https://diyetisyenalikosar.com/:path*',
        permanent: true, // 301 redirect
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.antalyadiyetisyen.net',
          },
        ],
        destination: 'https://diyetisyenalikosar.com/:path*',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
