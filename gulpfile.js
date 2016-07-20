var gulp = require('gulp');
var util = require("gulp-util");
var karma_gulp = require('gulp-karma');
var gulpProtractorAngular = require('gulp-angular-protractor')
var webserver = require('gulp-webserver');
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

gulp.task('Protractor', ['httpServer'], function () {
    /* Parameter(s) in square brackets are names of tasks to be run before the task itself */

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

/****************************************************************************************/
/* This is a custom Gulp server.bat command. Instead of going to cmd in targeted dir the     user can start the VS Code task. The difference is the root folder because the VS Code    uses the opened folder as root. 
   https://github.com/gulpjs/gulp/blob/master/docs/API.md#async-task-support
*/

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var events = require(__dirname + '/DemoApp/scripts/eventsControllerForGulp');
var rootPath = path.normalize(__dirname + '/../AngularFundamentals/DemoApp/app');

gulp.task('httpServer', function (cb) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(express.static(rootPath));

    app.get('/data/event', events.getAll);
    app.get('/data/event/:id', events.get);
    app.post('/data/event/:id', events.save);

    app.get('*', function (req, res) { res.sendFile(rootPath + '/index.html'); });
    // this line tells us that for any other link the server has to load /app/index.html

    app.listen(8000);
    console.log('Listening on port ' + 8000 + '...');
    cb();
    /* callback which signales that the task is done - must be used to signal the second task to start */
});