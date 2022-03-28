const path= require('path');

module.exports = {
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles'),path.join(__dirname, '/src')],
    },
  },
  images: {
    minimumCacheTTL: 60,
    domains: [
      'http://localhost:3000',
      's3-us-west-2.amazonaws.com'
    ],
  },
}
