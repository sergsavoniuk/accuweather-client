const workboxBuild = require('workbox-build');

const buildSW = () => {
  return workboxBuild.injectManifest({
    swSrc: 'src/sw-template.js',
    swDest: 'build/sw.js',
    globDirectory: 'build',
    globPatterns: ['**/*.{js,css,html,png,ico,json}'],
  });
};

buildSW();
