const { src, dest } = require('gulp');

//Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

//Плагины
const babel = require('gulp-babel');

//Обработка JavaScript
const js = () => {
    return src(path.js.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(dest(path.js.dest, { sourcemaps: true }))
}

module.exports = js;