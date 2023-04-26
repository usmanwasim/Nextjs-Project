/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        url: 'http://localhost:3000',
    },
};

module.exports = nextConfig;
