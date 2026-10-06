import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/licencia-argentina/privacy",
        destination: "/aproba/privacidad",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
