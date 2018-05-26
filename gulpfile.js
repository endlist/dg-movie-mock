'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var sassFiles = './content/styles/scss/**/*.scss';

gulp.task('sass', function () {
  return gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./content/styles/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(sassFiles, ['sass']);
});
