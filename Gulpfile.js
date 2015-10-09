var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var gzip = require('gulp-gzip');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

const BUILD_DIR = {
  js: 'public/javascripts',
  css: 'public/stylesheets'
};

gulp.task('js', function() {
  gulp.src(['source/javascripts/index.js'])
    .pipe(browserify({
      debug: false,
      transform: ['babelify', 'reactify']
    }))
    .pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gzip())
    .pipe(gulp.dest(BUILD_DIR.js));
});

gulp.task('css', function() {
  gulp.src(['source/stylesheets/style.css'])
    .pipe(minify())
    .pipe(gzip())
    .pipe(gulp.dest(BUILD_DIR.css));
});

gulp.task('build', ['js', 'css']);

