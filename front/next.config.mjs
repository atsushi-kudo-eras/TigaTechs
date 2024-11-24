/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'asset.tigatechs.com',
        port: '',
      },
    ],
  },
  // サーバサイドで使用するURL
  env: {
    HOOK_URL: process.env.HOOK_URL,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 5000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
