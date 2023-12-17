import gulp from 'gulp';
const { src, dest, watch, series, parallel } = gulp;

//

import gulpSourcemaps from 'gulp-sourcemaps';
const { init, write } = gulpSourcemaps;

import bs from 'browser-sync';
const browserSync = bs.create();

import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';

import imagemin from 'gulp-imagemin';
import terser from 'gulp-terser';
import { spawn } from "child_process";


//

const imgSrc        = './assets/img/**/*';
const imgDest       = './_site/assets/img';

const vidSrc        = './assets/vid/**/*';
const vidDest       = './_site/assets/vid';

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
        .pipe(init())
        .pipe(sass())
        .pipe(dest(styleDev))
        .pipe(cleanCSS())
        .pipe(write())
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

function moveVid(cb) {

    return src(vidSrc)
        .pipe(dest(vidDest))
        .pipe(browserSync.stream());

}

function createFonts(cb) {

    return src(fontSrc)
        .pipe(dest(fontDest))
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
        .pipe(init())
        .pipe(terser())
        .pipe(write())
        .pipe(dest(jsDest))
        .pipe(browserSync.stream());

    cb();

}

function buildJekyll(cb) {

    // Build jekyll

    return spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });

    cb();

}

//

function buildSite() {

    createStyle();
    createJS();
    prepImages();
    moveVid();
    createPDF();
    createFonts();
    buildJekyll();

}

function watchAll() {

    startBrowser();

    watch(styleSrc, createStyle);
    watch(jsSrc, createJS);
    watch(imgSrc, prepImages);
    watch(vidSrc, moveVid);
    watch(pdfSrc, createPDF);
    watch(fontSrc, createFonts);

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

const _default = function () {

    watchAll();

};
export { _default as default };

export function build(cb) {

    buildSite();

    cb();

}