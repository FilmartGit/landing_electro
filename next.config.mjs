/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    TELEGRAM_BOT_TOKEN : process.env.TELEGRAM_BOT_TOKEN, 
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID
  },
};

export default nextConfig;