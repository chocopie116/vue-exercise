var gulp = require('gulp'),
    browserify = require('browserify'),
    vsource = require('vinyl-source-stream');

//build javascript
gulp.task('js-build-dev', function() {
    browserify('./script/app.js')
        .bundle()
        .pipe(vsource('build.js'))
        .pipe(gulp.dest('./build'));
});


