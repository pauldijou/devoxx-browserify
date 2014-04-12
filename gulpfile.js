var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('default', function() {
  gulp.src('./js/app.js')
    .pipe(browserify({
      // transform: ['browserify-shim', 'deamdify'],
      // shim: {
      //   samourai: {
      //     path: './js/samourai.js',
      //     exports: 'samourai'
      //   },
      //   ninja: {
      //     path: './js/ninja.js',
      //     exports: 'ninja'
      //   }
      // }
    }))
    .pipe(rename('main.js'))
    .pipe(gulp.dest('./js'));
});
