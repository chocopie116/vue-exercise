var gulp = require('gulp'),
    browserify = require('browserify'),
    vsource = require('vinyl-source-stream');

//build js
gulp.task('js-build-dev', function() {
    browserify('./script/app.js')
        .bundle()
        .pipe(vsource('build.js'))
        .pipe(gulp.dest('./build'));
});

//detect file change and build js
gulp.task('watch-js', ['js-build-dev'], function() {
    gulp.watch('./script/*.js', ['js-build-dev']);
});
