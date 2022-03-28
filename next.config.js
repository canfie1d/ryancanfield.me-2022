const path= require('path');

module.exports = {
  reactStrictMode: true,
  modules: true,
  // experimental: {
  //   concurrentFeatures: true,
  //   serverComponents: true,
  //   runtime: true
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  images: {
    minimumCacheTTL: 60,
    domains: ['s3-us-west-2.amazonaws.com'],
  }
}
