const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");



gulp.task('hello', function(done) {
  console.log('Привет, Мир!');
  done();
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "../"
      }
  });
  gulp.watch("../*.index.html").on('change', browserSync.reload);
});

gulp.task('minify-css', () => {
  return gulp.src('../css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('../css/'));
});