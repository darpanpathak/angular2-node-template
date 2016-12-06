var gulp = require('gulp');
var jsFiles = ['*.js', 'src/**/*.js'];

var nodemon = require('nodemon');
livereload = require('gulp-livereload');

gulp.task('serve', ['watch'], function () {
    var options = {
        script: 'server.js',
        delayTime: 1,
        env: {
            'PORT': 3002
        },
        watch: jsFiles
    };
    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Hey restarting ....');
        });
});

gulp.task('ejs', function () {
    return gulp.src('src/**/*.ejs')
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/**/*.ejs', ['ejs']);
});