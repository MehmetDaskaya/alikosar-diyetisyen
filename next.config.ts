import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Depoda üst klasörde başka bir lockfile olduğu için kökü açıkça belirtiyoruz.
  turbopack: {
    root: __dirname,
  },

  // Eski alan adından 301 yönlendirme
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "antalyadiyetisyen.net" }],
        destination: "https://diyetisyenalikosar.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.antalyadiyetisyen.net" }],
        destination: "https://diyetisyenalikosar.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
