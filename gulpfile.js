var gulp = require ('gulp');
var sass = require ('gulp-sass');
var browserSync = require ('browser-sync').create();


gulp.task('sass',function(){
	gulp.src('app/sass/**/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function(){

	browserSync.init({
		server: "./app"
	});

	gulp.watch("app/sass/**/*.sass",['sass']);
	gulp.watch("app/*.html").on('change', browserSync.reload);	
});

gulp.task('default',['serve']);