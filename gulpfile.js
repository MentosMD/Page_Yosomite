var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('sass', function(){
	gulp.src('src/sass/*.scss')
	    .pipe(sass())
	    .pipe(gulp.dest('src/css'));
});

gulp.task('pug', function(){
	gulp.src('src/pug/*.pug')
	    .pipe(pug())
	    .pipe(gulp.dest('src/site/'));
});

gulp.task('watch', function () {
	gulp.watch('src/sass/*.scss', ['sass']);
	gulp.watch('src/pug/*.pug', ['pug']);
})

