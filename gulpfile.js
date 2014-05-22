// Base
var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    rename  = require('gulp-rename');

// JS
var coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// Sass
var sass   = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    minify = require('gulp-minify-css');

var paths = {
  scripts: 'src/**/*.coffee'
};

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(coffee())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(uglify())
    .pipe(rename('main.js.min'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('serve', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watch', ['serve'], function() {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['serve', 'watch']);
