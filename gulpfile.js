var gulp = require('gulp');
var util = require("gulp-util");
var karma_gulp = require('gulp-karma');
var gulpProtractorAngular = require('gulp-angular-protractor')

var server = require('karma').server;

gulp.task('KarmaTask', function (done) {
    var karmaServer = server.start({
        configFile: __dirname + '\\DemoApp\\test\\karma.conf.js',
        browsers: ['Chrome']
    }, function (exitCode) {
        done();
        process.exit(exitCode);
    });
});

gulp.task('ExplicitKarmaTest', function () {
    var testFiles = [
    ];

    return gulp.src(testFiles)
        .pipe(karma_gulp({
            configFile: __dirname + '\\DemoApp\\test\\karma.conf.js',
            action: 'watch'
        }))
        .on('error', function (err) {
            throw err;
        })
});

gulp.task('Protractor', function () {
    var testFiles = [];
    var configFile = 'DemoApp/test/protractor-conf.js';

    return gulp.src(testFiles)
        .pipe(gulpProtractorAngular({
            configFile: configFile,
            args: ['--baseUrl', 'http://localhost:8000/'],
            'autoStartStopServer': true
        }))
        .on('error', function (err) {
            throw err;
        });
});




// https://gist.github.com/renegare/9173656
// Very important stuff about using Gulp to start Karma server