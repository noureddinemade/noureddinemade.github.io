const { src, dest, watch, series, parallel } = require('gulp');

//

const browserSync   = require('browser-sync').create();
const sass          = require('gulp-sass')(require('sass'));
const cleanCSS      = require('gulp-clean-css');
const sourceMap     = require('gulp-sourcemaps');
const imagemin      = require('gulp-imagemin');
const terser        = require('gulp-terser');
const cp            = require("child_process");


//

const imgSrc        = './assets/img/**/*';
const imgDest       = './_site/assets/img';

const pdfSrc        = './assets/pdf/*.pdf';
const pdfDest       = './_site/assets/pdf';

const fontSrc       = './assets/font/*';
const fontDest      = './_site/assets/font';

const jsSrc         = './assets/js/*.js';
const jsDest        = './_site/assets/js';

const styleSrc      = './assets/sass/**/*.sass';
const styleDev      = './assets/css/';
const styleDest     = './_site/assets/css';

const ready         = './_site/';

//

function startBrowser() {

    browserSync.init({
        server: {
            baseDir: './_site/'
        },
        port: 2323
    });

}

function reloadBrowser(cb) {

    browserSync.reload();

    cb();

}

function createStyle(cb) {

    return src(styleSrc)
        .pipe(sourceMap.init())
        .pipe(sass())
        .pipe(dest(styleDev))
        .pipe(cleanCSS())
        .pipe(sourceMap.write())
        .pipe(dest(styleDest))
        .pipe(browserSync.stream());

    cb();

}

function createPDF(cb) {

    return src(pdfSrc)
        .pipe(dest(pdfDest))
        .pipe(browserSync.stream());

    cb();

}

function prepImages(cb) {

    return src(imgSrc)
        .pipe(imagemin())
        .pipe(dest(imgDest))
        .pipe(browserSync.stream());

    cb();

}

function createJS(cb) {

    // Get Javascript, uglify it and then move to ready.

    return src(jsSrc)
        .pipe(sourceMap.init())
        .pipe(terser())
        .pipe(sourceMap.write())
        .pipe(dest(jsDest))
        .pipe(browserSync.stream());

    cb();

}

function buildJekyll(cb) {

    // Build jekyll

    return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });

    cb();

}

//

function watchAll() {

    startBrowser();

    watch(styleSrc, createStyle);
    watch(jsSrc, createJS);
    watch(pdfSrc, createPDF);
    watch(imgSrc, prepImages);

    watch(
        [
            './_includes/**/*',
            './_layouts/**/*',
            './_posts/**/*',
            './_work/**/*',
            './*.md',
            './*.html'
        ],
        series(buildJekyll, reloadBrowser)
    );

}

//

exports.default = function() {

    watchAll();

}