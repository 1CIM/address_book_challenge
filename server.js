const superstatic = require('superstatic');
const browserSync = require('browsersync').create();

browserSync.init({
  server: {
    baseDir: 'src',
    middleware: [superstatic({ stack: 'strict' })]
  },
  port: 3000,
  watch: true,
  files: ['./src/*.html', './src/**/*.css', './src/**/*.js']
});