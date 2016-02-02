"use strict";

var gulp = require("gulp");
var plugins = require("gulp-load-plugins")({
	lazy: false, pattern:"*"
});
var pluginsgulpConcat = require("gulp-concat");
var pluginsgulpMinify = require("gulp-uglify");
var pluginssass = require("gulp-sass");
var pluginsrename = require("gulp-rename");
var pluginssourcemaps = require("gulp-sourcemaps");		
var pluginsclean = require("del");	
var pluginsautoprefixer = require("gulp-autoprefixer");
		

gulp.task('concatScripts', function() {
	return gulp.src('src/*.js')	
	  .pipe(plugins.sourcemaps.init())
.pipe(pluginsgulpConcat('production.js'))
  .pipe(plugins.sourcemaps.write("./"))
.pipe(gulp.dest('js'));
});

gulp.task("minifyScripts", ["concatScripts"], function(){
	return gulp.src('js/production.js')
	.pipe(pluginsgulpMinify())	
	 .pipe(gulp.dest("js"));		
});

gulp.task("compileSass", function(){
gulp.src("src/main.scss")
.pipe(plugins.sourcemaps.init())
.pipe(plugins.autoprefixer())
.pipe(plugins.sass())		
.pipe(plugins.sourcemaps.write("./"))
.pipe(gulp.dest("css"));	
});
		
gulp.task("watch", function(){
	gulp.watch("src/main.scss", ["compileSass"]);
	gulp.watch("js/production.js", ["concatScripts"]);
});

gulp.task("clean", function() {
	pluginsclean(["dist", "css/main.css", "js/production.js*", "production/production.min.js"]);
});

 gulp.task("build", [ "concatScripts", "minifyScripts", "compileSass", "watch"], function() {
// 	return gulp.src(["css/main.css", "js/production.js", "index.html", "img/**", "fonts/**"], {base: "./"})
// 	.pipe(gulp.dest("dist"));
 });
	
gulp.task("default",["clean"], function() {
	gulp.start("build");
});