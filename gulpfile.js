"use strict";

var gulp = require("gulp");
var gulpConcat = require("gulp-concat");
var gulpMinify = require("gulp-uglify");
var sass = require("gulp-sass");
var rename = require("gulp-rename");


gulp.task("hello", function(){
	console.log("hello");
});		

gulp.task('concatScripts', function() {
	return gulp.src('src/*.js')	
.pipe(gulpConcat('production.js'))
.pipe(gulp.dest('js'));
});

gulp.task("minifyScripts", function(){
	return gulp.src('js/production.js')
	.pipe(gulpMinify())
	.pipe(rename("production.min.js"))
	.pipe(gulp.dest('production'));
});

gulp.task("compileSass", function(){
gulp.src("src/main.scss")
.pipe(sass())
.pipe(gulp.dest("css/main.css"));
});

gulp.task("default", ["hello","concatScripts", "minifyScripts","compileSass"], function(){
	console.log("default task");
});