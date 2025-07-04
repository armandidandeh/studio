import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/genai-studio-public-images/user-provided/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dropbox.com',
        port: '',
        pathname: '/scl/fi/**',
      }
    ],
  },
};

export default nextConfig;
