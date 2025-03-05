/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // Ignore during builds (should already be there)
    },
    // Disable ESLint completely (just for testing)
    typescript: {
      ignoreBuildErrors: true,  // You can add this too if you have typescript errors
    }
  };
  
  export default nextConfig;