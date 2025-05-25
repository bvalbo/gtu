/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable images from various domains
  images: {
    domains: ['strava.com', 'beacon.strava.com', 'connect.garmin.com', 'livetrack.garmin.com'],
    // Allow local images
    unoptimized: false,
  },
  
  // Remove static export since we need API routes for the gallery
  // output: 'export', // Commented out to enable API routes
  
  // Redirect root domain to www subdomain (optional)
  async redirects() {
    return [
      // Uncomment this if you want to redirect the root domain to www
      // {
      //   source: '/',
      //   has: [
      //     {
      //       type: 'host',
      //       value: 'grimstad.run',
      //     },
      //   ],
      //   destination: 'https://www.grimstad.run/',
      //   permanent: true,
      // },
    ];
  },
  
  // Ensure API routes work correctly
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

export default nextConfig;