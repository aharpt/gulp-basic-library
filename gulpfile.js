"use strict";

var gulp = require("gulp");
var gulpConcat = require("gulp-concat");
var gulpMinify = require("gulp-uglify");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var clean = require("del");
var browsersync = require("browser-sync").create();


gulp.task("browsersync", function() {
	browsersync.init({
		proxy: "local.dev"
});
});

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

gulp.task("minifyScripts", ["concatScripts"], function(){
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
.pipe(gulp.dest("css"))
});
		
gulp.task("watch", function(){
	gulp.watch("src/*.scss", ["compileSass"]);
	gulp.watch("js/production.js", ["concatScripts"]);
});

gulp.task("clean", function() {
	clean(["dist", "css/main.css*", "js/production.js*", "production/production.min.js"]);
})

gulp.task("build", ["hello", "concatScripts", "minifyScripts", "compileSass", "watch"], function() {
	return gulp.src(["css/main.css", "production/production.min.js", "index.html", "img/**", "fonts/**"], {base: "./"})
	.pipe(gulp.dest("dist"));
});
	
gulp.task("default", ["clean"], function() {
	gulp.start("build");
});

