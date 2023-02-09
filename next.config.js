/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    devIndicators: {
        buildActivity: false
    }
}

module.exports = nextConfig
