var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
//ts转js
var tsify = require('tsify');
// convert the streaming vinyl file object
var buffer = require('vinyl-buffer');
//压缩js
var uglify = require('gulp-uglify');

var sourcemaps = require('gulp-sourcemaps');

gulp.task('browserify', function () {
  return browserify('./src/index.ts')
    .transform('babelify', {//适配es6语法
      global: true,//不加会报错
      presets: ['@babel/preset-env'],
      extensions: ['.js', '.ts']
    })
    .plugin(tsify)
    .bundle()
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('bundle.js'))
    .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(uglify()) //压缩混淆js
    .pipe(sourcemaps.write('./map'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('./dist/'));
});

gulp.task("dev", gulp.parallel('browserify'));