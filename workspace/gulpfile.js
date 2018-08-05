var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var babelregister = require('babel-core/register');
var babelregister2 = require('babel-register');
var Server = require('karma').Server;


gulp.task('lint', function() {
    return gulp.src(['app/**/*.js', 'test/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  return gulp.src(['test/**/*.test.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
      globals: {
        should: require('should')
      }
    }));
});

gulp.task('test-design-patterns', function() {
    return gulp.src(['design-patterns/**/*.spec.js'])
   // .pipe(babel())
      .pipe(mocha({
        compilers: 'js:babel-core/register',
        //compilers: babelregister2,
        reporter: 'spec',
        globals: {
          should: require('should')
        }
      }));
  });

gulp.task('karma', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function () {
        done();
    }).start();
});


gulp.task('default', [ 'lint', 'test']);