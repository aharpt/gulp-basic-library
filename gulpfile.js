// requiring gulp and gulp plugins
var gulp = require("gulp");
var plugins = require("gulp-load-plugins")({DEBUG: true});
var clean = require("del");


// gulp webserver
gulp.task("webserver", function() {
	gulp.src("./")
	.pipe(plugins.webserver({
		livereload: true,
		open: true,
		fallback: "index.html"
	}));
});


// Concat javascript and put into a file named production.js in the js folder
gulp.task('concatScripts', function() {
	return gulp.src('src/*.js')
	  .pipe(plugins.sourcemaps.init())
.pipe(plugins.concat('production.js'))
  .pipe(plugins.sourcemaps.write("./"))
.pipe(gulp.dest('js'))
 .pipe(plugins.livereload());
});

// minify javascript and put into a keep it at production.js in the js folder
gulp.task("minifyScripts", ["concatScripts"], function(){
	return gulp.src('js/production.js')
	// .pipe(plugins.sourcemaps.init())
	.pipe(plugins.uglify())
	// .pipe(plugins.sourcemaps.write("./"))
	 .pipe(gulp.dest("js"))
	 .pipe(plugins.livereload());
});

//compile sass Automatically
 gulp.task("compileSass", function(){
 gulp.src("src/main.scss")
 .pipe(plugins.sourcemaps.init())
//  autoprefixer to add prefixes for older browsers
 .pipe(plugins.autoprefixer())
 .pipe(plugins.sass())
 .pipe(plugins.sourcemaps.write("./"))
 .pipe(gulp.dest("css"))
// // allows automatic css injecting
 .pipe(plugins.livereload());
 });

// watch task to watch for changes to sass and js
gulp.task("watch",["compileSass", "minifyScripts", "concatScripts"], function(){
	plugins.livereload.listen();
	// watch sass/js for changes
	gulp.watch("src/*.scss", ["compileSass"]);
	gulp.watch("src/*.js", ["concatScripts", "minifyScripts"]);
});

gulp.task("clean", function() {
	clean(["dist", "css/main.css", "js/production.js*", "production/production.min.js"]);
});

 gulp.task("build", ["webserver", "concatScripts", "minifyScripts", "compileSass", "watch"], function() {

 });

gulp.task("default",["clean"], function() {
	gulp.start("build");
});
