// requiring gulp and gulp plugins
var gulp = require("gulp");
var plugins = require("gulp-load-plugins")({DEBUG: true});
var clean = require("del");	
var browsersync = require("browser-sync");
		
// Concat javascript and put into a file named production.js in the js folder
gulp.task('concatScripts', function() {
	return gulp.src('src/*.js')	
	  .pipe(plugins.sourcemaps.init())
.pipe(plugins.concat('production.js'))
  .pipe(plugins.sourcemaps.write("./"))
.pipe(gulp.dest('js'));
});
// minify javascript and put into a keep it at production.js in the js folder
gulp.task("minifyScripts", ["concatScripts"], function(){
	return gulp.src('js/production.js')
	.pipe(plugins.sourcemaps.init())
	.pipe(plugins.uglify())	
	.pipe(plugins.sourcemaps.write("./"))
	 .pipe(gulp.dest("js"));		
});

// compile sass Automatically
gulp.task("compileSass", function(){
gulp.src("src/main.scss")
.pipe(plugins.sourcemaps.init())
// autoprefixer to add prefixes for older browsers
.pipe(plugins.autoprefixer())
.pipe(plugins.sass())		
.pipe(plugins.sourcemaps.write("./"))
.pipe(gulp.dest("css"))
// allows automatic css injecting
.pipe(browsersync.stream());	
});
// watch task to watch for changes to css, js, html	
gulp.task("watch",["compileSass", "minifyScripts", "concatScripts"], function(){
	// add browsersync  local server
	browsersync.init({
		server: "./"
		});
	gulp.watch("src/main.scss", ["compileSass"]);
	gulp.watch("js/production.js", ["concatScripts"]);
	gulp.watch("./*.html").on("change", browsersync.reload);
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