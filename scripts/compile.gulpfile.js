'use strict';

const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const debug = require('gulp-debug');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const pkg = require('../package');
const url = require('postcss-url');

gulp.task('css', () => gulp.src('../component/**/*.css')
  .pipe(debug({title: 'css'}))
  .pipe(postcss([
    autoprefixer(),
    url({inline: 'encodeURIComponent', url: 'inline'}),
  ]))
  .pipe(gulp.dest('../packages/teatime-components/component')));

gulp.task('js', () => gulp.src('../component/**/*.js')
  .pipe(debug({title: 'js'}))
  .pipe(babel(pkg.babel))
  .pipe(gulp.dest('../packages/teatime-components/component')));
