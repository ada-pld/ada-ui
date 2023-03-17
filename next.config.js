/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BASE_API_URL: process.env.BASE_API_URL,
        BASE_URL: process.env.BASE_URL,
    },
    devIndicators: {
        buildActivity: false
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.HOSTNAME,
            },
        ],
    },
    trailingSlash: true,
}

module.exports = nextConfig
