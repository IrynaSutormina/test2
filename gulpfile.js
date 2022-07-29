const { src, dest, parallel, series, watch } = require('gulp');

const concat = require('gulp-concat'); // склейка нескольких файлов в один (JS+CSS)
const autoprefixer = require('gulp-autoprefixer'); // автопрефиксы CSS
const cleanCSS = require('gulp-clean-css'); // минификация CSS файлов
const sourcemaps = require('gulp-sourcemaps'); // запоминаем путь к стилям/JS
const terser = require('gulp-terser'); // Минификация скриптов
const imagemin = require('gulp-imagemin');

const sass = require('gulp-sass')(require('sass'));
sass.compiler = require('node-sass');

  // Оптимизация стилей
  function stylesFunc() {
    return src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(concat('styles.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions']
    }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('maps/'))
    .pipe(dest('./dist/styles/'));
  }

  //  // Оптимизация JS
   function scriptsFunc() {
    return src('./src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.min.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('maps/'))
    .pipe(dest('./dist/js/'));
  }

    // // Функция оптимизации картинок
    function imagesFunc() {
      return src('./src/images/**/*')
      .pipe(imagemin())
      .pipe(dest('./dist/images/'))
    }

    // Функция, которая следит за изменениями в файлах
  function startWatchFunc() {
    watch('./src/styles/**/*.scss', stylesFunc);
    watch('./src/js/**/*.js', scriptsFunc);
    watch('./src/images/**/*', imagesFunc);
  }

exports.stylesTask = stylesFunc;
exports.scriptsTask = scriptsFunc;
exports.imagesTask = imagesFunc;
exports.watchTask = startWatchFunc;

exports.default = parallel(stylesFunc, scriptsFunc, imagesFunc, startWatchFunc);


