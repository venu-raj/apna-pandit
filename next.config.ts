import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true,
  images: {
    unoptimized: true, // disables the optimizer entirely
    remotePatterns: [
      new URL(
        "https://smartpuja-prod-s3.s3.ap-south-1.amazonaws.com/services-images/**",
      ),
    ],
  },
};

export default nextConfig;
