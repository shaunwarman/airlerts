const babel = require('gulp-babel');
const del = require('del');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const sourcemaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');


gulp.task('clean', function() {
    return del(['dist/server']);
});

gulp.task('build', function(callback) {
    runSequence('clean', function(done) {
        return gulp.src('src/server/**/*.js')
            .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist/server'));
    });
});

gulp.task('start', function(callback) {
    nodemon({
        script: 'dist/server/index.js',
        ext: 'js',
        watch: ['./src/server'],
        tasks: ['build']
    });
});

gulp.task('test', function(callback) {
    console.log('No server tests specified');
});

gulp.task('lint', function(callback) {
    return gulp.src(['src/server/**/*.js'])
        .pipe(eslint('./.server.eslintrc'))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['start']);
