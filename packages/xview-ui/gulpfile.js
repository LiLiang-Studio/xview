const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

const compile = () =>
  src('./src/theme/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./dist/theme'))

const copyFont = () =>
  src('./src/theme/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./dist/theme/fonts'))

exports.build = series(compile, copyFont)
