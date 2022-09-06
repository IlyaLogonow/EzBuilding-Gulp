const { src, dest, watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

//Плагины
const fileInclude = require('gulp-file-include');

//Обработка HTML
const html = () => {
    return src('./src/html/*.html')
    .pipe(fileInclude())
    .pipe(dest('./public'))
    .pipe(browserSync.stream());
}

//Сервер 
const server = () => {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
}

//Наблюдение 
const watcher = () => {
    watch('./src/html/**/*.html', html);
}

//Модули-задачи
module.exports.html = html;
module.exports.watch = watcher;

//Сборка
exports.dev = series (
    html,
    parallel(watcher, server)
);