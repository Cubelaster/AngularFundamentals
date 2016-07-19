module.exports = function (config) {
  config.set({

    basePath: '../',

    preprocessors: {
      '**/*.html': 'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app'
    },

    files: [
      'app/lib/angular/angular.js',
      'test/lib/angular-mocks.js',
      'test/lib/sinon-1.10.2.js',
      'app/lib/angular/angular-*.js',
      'app/js/**/*.js',
      'test/unit/**/*.js',
      'app/templates/directives/*.html'
      /* the last line adds html partials used for directives to list of files loaded by Karma. The path for partials is very important. That's why the preprocessor and ngHtml2JsPreprocessor are added - the path must match in directive.js and karma config.  */
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
