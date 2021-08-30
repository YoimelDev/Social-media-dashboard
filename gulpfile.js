const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');



function css() {
    return src('scss/*.scss')
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        .pipe( postcss([autoprefixer(), cssnano()]))
        .pipe( sourcemaps.write('.') )
        .pipe( dest('./css') )
}

function watchArchivos() {
    watch('scss/*.scss', css)
}

exports.css = css;
exports.watchArchivos = watchArchivos;

exports.default = series( css, watchArchivos );