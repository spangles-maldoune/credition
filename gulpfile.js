// подключение модулей
const gulp = require('gulp');
const concat = require('gulp-concat');


const sccFiles = [
    'src/css/reset.css',
    'src/css/style.css'
]

const jsFiles = [
    'src/js/lib.js',
    'src/js/main.js'
]

// таск на стили
function styles() {
   return gulp.src(sccFiles)
       .pipe(concat('style.css'))
       .pipe(gulp.dest('build/css'))
}

function scripts() {
   return gulp.src(jsFiles)
       .pipe(concat('script.js'))
       .pipe(gulp.dest('build/js'))
}

// таск, вызывающий функцию styles
gulp.task('styles', styles);
// таск, вызывающий функцию scripts
gulp.task('scripts', scripts);