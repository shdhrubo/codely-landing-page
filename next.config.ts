import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enables static HTML export to the 'out' folder
  images: {
    unoptimized: true,
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;
