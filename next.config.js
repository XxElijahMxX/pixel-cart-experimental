/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/checkout',
        permanent: true,
      }
    ]
  }
}
module.exports = nextConfig
