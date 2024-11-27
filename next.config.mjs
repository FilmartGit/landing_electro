/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // publicRuntimeConfig: {
  //   API_URL: process.env.API_URL,
  // },
  
  webpack(config) {
    config.resolve.fallback = {

      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,  

      fs: false, // the solution
      net: false,
      tls: false
    };
    
    return config;
  },
  webpack: "false"
};

export default nextConfig;
