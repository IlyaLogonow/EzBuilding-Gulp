const { src, dest } = require('gulp');

//Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

//Плагины
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');
 

//Обработка img
const img = () => {
    return src(path.img.src)
      .pipe(newer(path.img.dest))
      .pipe(imagemin(app.imagemin))
      .pipe(dest(path.img.dest));
};

module.exports = img;