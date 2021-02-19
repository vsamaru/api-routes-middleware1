module.exports = {
  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: '/api/x?o=$1', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}
