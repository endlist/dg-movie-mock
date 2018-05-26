'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

var sassFiles = './content/styles/scss/**/*.scss';

gulp.task('sass', function () {
  return gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./content/styles/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(sassFiles, ['sass']);
});

gulp.task('js', function () {
  gulp.src(['scripts/**/index.js', 'scripts/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('scripts'));
});

gulp.task('js:watch', function () {
  gulp.watch('src/**/*.js', ['js']);
});

gulp.task('watch', ['sass:watch', 'js:watch']);
