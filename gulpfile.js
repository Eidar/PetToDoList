var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');

// Exports
exports.sasswatch = gulp.series(clean, sassWatcher);

// Constants
const paths = {
    root: {
      app: 'app/',
      style: {css: 'app/assets/styles/css/**/*.css', scss: 'app/assets/styles/scss/**/*.scss'}
    }
  };

//Functions
function clean(cb) {
    return del([
        paths.root.style.css
    ], cb);
};

function sassWatcher() {
    return gulp.src(paths.root.style.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.root.style.css));
};


