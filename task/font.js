const { src, dest } = require('gulp');

//Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');


//Плагины
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
 

//Обработка font
const font = () => {
    return src(path.font.src)
      .pipe(newer(path.font.dest))
      .pipe(fonter(app.fonter))
      .pipe(dest(path.font.dest));
};

module.exports = font;