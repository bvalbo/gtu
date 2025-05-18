/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable images from Strava and Garmin domains
  images: {
    domains: ['strava.com', 'beacon.strava.com', 'connect.garmin.com', 'livetrack.garmin.com'],
  },
  // Set output to export for static site generation without SSR
  output: 'export',
  
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
};

export default nextConfig;