"use strict";

var gulp = require("gulp");
var gulpConcat = require("gulp-concat");
var gulpMinify = require("gulp-uglify");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");


gulp.task("hello", function(){
	console.log("hello");
});		

gulp.task('concatScripts', function() {
	return gulp.src('src/*.js')	
	.pipe(sourcemaps.init())
.pipe(gulpConcat('production.js'))
.pipe(sourcemaps.write("./"))
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
.pipe(sourcemaps.init())
.pipe(sass())
.pipe(sourcemaps.write("./"))
.pipe(gulp.dest("css"));
});

gulp.task("default", ["hello","concatScripts", "minifyScripts","compileSass"], function(){
	console.log("default task");
});