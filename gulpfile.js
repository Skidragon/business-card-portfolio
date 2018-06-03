const gulp = require('gulp'),
less = require('gulp-less'),
path = require('path'),
browserSync = require('browser-sync').create();

gulp.task('less', function () {
  return gulp.src('./less/index.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});