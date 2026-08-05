import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  transpilePackages: ["darkroom-ui"],
};

export default nextConfig;
