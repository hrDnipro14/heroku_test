var gulp = require('gulp');
//var pm2 = require('pm2');
let cleanCSS = require('gulp-clean-css');
gulp.task('css', function () {
    return gulp.src('./public/stylesheets/test.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/stylesheets/'));
});