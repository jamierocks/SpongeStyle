const
    gulp = require('gulp'),

    sass = require('gulp-sass'),
    packageImporter = require('node-sass-package-importer');

function scss() {
    return gulp.src('./src/scss/sponge.scss')
        .pipe(sass({
            importer: packageImporter()
        }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
}

function watch() {
    gulp.watch('./src/scss/**', scss);
}

exports.build = gulp.series(scss);
exports.watch = gulp.series(this.build, watch);
exports.default = this.build;

