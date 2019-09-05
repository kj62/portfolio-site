let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');
let babelMinify = require('gulp-babel-minify');
let minifyCSS = require('gulp-clean-css');
let minifyImg = require('gulp-imagemin');
let minifyHtml = require('gulp-htmlmin');
let changed = require('gulp-changed');

let onError = function(err) {
    console.log(err);
}

// -- GULP TASKS --

function sassMain() {
    return gulp.src('./src/index.scss')
        .pipe(sass())
        .on('error', onError)
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream());
}

function serve() {
    browserSync({
        server: './src',
        port: '9000'
    });	
}

function minifyScripts() {
    return gulp.src('src/views/**/*.js')
        .pipe(babelMinify())
        .on('error', onError)
        .pipe(gulp.dest('./dist/views/'));
}

function minifyCSSFiles() {
    return gulp.src('src/css/**/*.css')
        .pipe(minifyCSS())
        .on('error', onError)
        .pipe(gulp.dest('./dist/css'));
}

function minifyHtmlFiles() {
    return gulp.src('src/views/**/*.html')
        .pipe(minifyHtml())
        .on('error', onError)
        .pipe(gulp.dest('./dist/views/'));
}

function minifyIndexFile() {
    return gulp.src('src/index.html')
        .pipe(minifyHtml())
        .on('error', onError)
        .pipe(gulp.dest('./dist'));
}

function minifyImgFiles() {
    return gulp.src('src/assets/**/*.{jpg,jpeg,png,gif}')
        .pipe(changed('./dist/assets'))
        .pipe(minifyImg())
        .pipe(gulp.dest('./dist/assets'));
}

function watch() {
    gulp.watch(['src/index.html'])
		.on('error', onError)
		.on('change', gulp.series(minifyIndexFile, browserSync.reload));
	gulp.watch(['src/views/**/*.html'])
        .on('error', onError)
        .on('change', gulp.series(minifyHtmlFiles, browserSync.reload));
    gulp.watch(['src/index.scss', 'src/views/**/*.scss'])
        .on('error', onError)
        .on('change', gulp.series(sassMain, minifyCSSFiles, browserSync.reload));
	gulp.watch(['src/views/**/*.js'])
        .on('error', onError)
        .on('change', gulp.series(minifyScripts, browserSync.reload));
	gulp.watch(['src/assets/**/*.{jpg,jpeg,png,gif}'])
        .on('error', onError)
        .on('change', gulp.series(minifyImgFiles, browserSync.reload));
}


// Main run task

exports.sassMain = sassMain;
exports.minifyImgFiles = minifyImgFiles;
exports.minifyCSSFiles = minifyCSSFiles;
exports.minifyHtmlFiles = minifyHtmlFiles;
exports.minifyIndexFile = minifyIndexFile;
exports.minifyScripts = minifyScripts;
exports.serve = serve;
exports.watch = watch;

exports.default = gulp.series(sassMain, minifyImgFiles, minifyCSSFiles, minifyScripts,
	minifyHtmlFiles, minifyIndexFile, gulp.parallel(serve, watch));
