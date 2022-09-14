const { src, dest } = require('gulp');

//Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

//Плагины
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const gulpGroupCssMediaQueries = require('gulp-group-css-media-queries');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');

//Обработка SCSS
const scss = () => {
    return src(path.scss.src, { sourcemaps: true })
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(gulpGroupCssMediaQueries())
        .pipe(size({ title: 'main.css'}))
        .pipe(dest(path.scss.dest, { sourcemaps: true }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(csso())
        .pipe(size({ title: 'main.min.css'}))
        .pipe(dest(path.scss.dest, { sourcemaps: true }))
}

module.exports = scss;