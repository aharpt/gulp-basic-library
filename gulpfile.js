'use strict'

var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("hello", function(){
	console.log("hello");
});	

gulp.task("compileSass", function(){
gulp.src("src/main.scss")
.pipe(sass())
.pipe(gulp.dest("css/main.css"));
});

gulp.task("default", ["hello", "compileSass"], function(){
	console.log("default task");
});