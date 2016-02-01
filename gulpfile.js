"use strict";

var gulp = require("gulp");
var plugins = require("gulp-load-plugins")({lazy: false});
plugins.gulpConcat = require("gulp-concat");
plugins.gulpMinify = require("gulp-uglify");
plugins.sass = require("gulp-sass");
plugins.rename = require("gulp-rename");
plugins.sourcemaps = require("gulp-sourcemaps");		
plugins.clean = require("del");	
plugins.autoprefixer = require("gulp-autoprefixer");
		

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
	 .pipe(gulp.dest("js"));		
});

gulp.task("compileSass", function(){
gulp.src("src/main.scss")
.pipe(sourcemaps.init())
.pipe(autoprefixer())
.pipe(sass())		
.pipe(sourcemaps.write("./"))
.pipe(gulp.dest("css"));	
});
		
gulp.task("watch", function(){
	gulp.watch("src/main.scss", ["compileSass"]);
	gulp.watch("js/production.js", ["concatScripts"]);
});

gulp.task("clean", function() {
	clean(["dist", "css/main.css", "js/production.js*", "production/production.min.js"]);
});

 gulp.task("build", [ "concatScripts", "minifyScripts", "compileSass", "watch"], function() {
// 	return gulp.src(["css/main.css", "js/production.js", "index.html", "img/**", "fonts/**"], {base: "./"})
// 	.pipe(gulp.dest("dist"));
 });
	
gulp.task("default",["clean"], function() {
	gulp.start("build");
});