const { src, dest } = require('gulp');

//Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

//Плагины
const fileInclude = require('gulp-file-include');

//Обработка HTML
const html = () => {
    return src(path.html.src)
    .pipe(fileInclude())
    .pipe(dest(path.html.dest));
}

module.exports = html;