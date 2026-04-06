/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  // Optimisation du cache webpack
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = {
        type: 'memory',
      }
    }
    return config
  },
  // Désactiver les avertissements de webpack pour le cache
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig
