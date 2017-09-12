'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const rollup = require('gulp-better-rollup');

const rollupConfig = require('./rollup.config');

gulp.task('default', ['flow', 'transpile']);

gulp.task('flow', () => {
  return gulp.src('components/*/index.js')
    .pipe(rename(path => {
      path.basename = path.dirname;
      path.dirname = '.';
      path.extname += '.flow';
    }))
    .pipe(gulp.dest('packages/teatime-components/components'));
});

gulp.task('transpile', () => {
  return gulp.src('components/*/index.js')
    .pipe(rollup(rollupConfig, 'cjs'))
    .pipe(rename(path => {
      path.basename = path.dirname;
      path.dirname = '.';
    }))
    .pipe(gulp.dest('packages/teatime-components/components'));
});
