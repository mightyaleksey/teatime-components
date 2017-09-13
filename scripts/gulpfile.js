'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const rollup = require('gulp-better-rollup');

const rollupConfig = require('./rollup.config');

gulp.task('default', ['transpile']);

gulp.task('transpile', () => {
  return gulp.src('components/*/*.js')
    .pipe(rollup(rollupConfig, 'cjs'))
    .pipe(rename(path => {
      path.dirname = '.';
    }))
    .pipe(gulp.dest('packages/teatime-components/components'));
});
