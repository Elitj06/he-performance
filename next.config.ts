import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias["lucide-react"] = path.resolve(process.cwd(), "lib/lucide-react.ts");
    return config;
  },
};

export default nextConfig;
