"use strict";

var gulp = require("gulp");
var gulpConcat = require("gulp-concat");
var gulpMinify = require("gulp-uglify");
var sass = require("gulp-sass");
	

gulp.task("hello", function(){
	console.log("hello");
});		

gulp.task('concatScripts', function() {
	return gulp.src('src/*.js')	
.pipe(gulpConcat('production.js'))
.pipe(gulp.dest('js'));
});

gulp.task("compileSass", function(){
gulp.src("src/main.scss")
.pipe(sass())
.pipe(gulp.dest("css/main.css"));
});

gulp.task("default", ["hello","concatScripts", "compileSass"], function(){
	console.log("default task");
});