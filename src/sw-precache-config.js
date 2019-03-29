module.exports = {
  staticFileGlobs: [
    'build/images/**.png',
    'build/locales/**/*.json',
    'build/static/js/**.js',
    'build/favicon.ico',
    'build/index.html',
  ],
  swFilePath: './build/service-worker.js',
  stripPrefix: 'build/',
  handleFetch: false,
};