module.exports = {
  async redirects() {
    return [
      {
        source: '/*',
        destination: '/api/x', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}
