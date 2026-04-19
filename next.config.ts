import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export", // Disabled: Server Actions do not work with Static Export
  images: {
    unoptimized: true,
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;
