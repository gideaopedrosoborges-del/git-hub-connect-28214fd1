/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
};

export default nextConfig;
