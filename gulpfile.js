'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

var files = ['manifest.json', 'not-alt-right.js'];
var xpiName = 'not-alt-right.xpi'

gulp.task('default', function () {
	gulp.src(files)
		.pipe(zip(xpiName))
		.pipe(gulp.dest('.'));
});
