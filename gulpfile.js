// Requiring gulp and gulp plugins
var gulp = require("gulp");
var plugins = require("gulp-load-plugins")({DEBUG: true});


// Gulp webserver
gulp.task("webserver", function () {
    "use strict";
    gulp.src("./")
        .pipe(plugins.webserver({
            livereload: true,
            open: true,
            fallback: "index.html"
        }));
});


// Concat javascript and put into a file named production.js in the js folder
gulp.task("concatScripts", function () {
    "use strict";
    return gulp.src("src/*.js")
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat("production.js"))
        .pipe(plugins.sourcemaps.write("./"))
        .pipe(gulp.dest("js"))
        .pipe(plugins.livereload());
});

// Minify javascript and put into a keep it at production.js in the js folder
gulp.task("minifyScripts", ["concatScripts"], function () {
    "use strict";
    return gulp.src("js/production.js")
        .pipe(plugins.uglify())
        .pipe(gulp.dest("js"))
        .pipe(plugins.livereload());
});

// Compile sass automatically
gulp.task("compileSass", function () {
    "use strict";
    gulp.src("src/main.scss")
        .pipe(plugins.sourcemaps.init())
        //  autoprefixer to add prefixes for older browsers
        .pipe(plugins.autoprefixer())
        .pipe(plugins.sass())
        .pipe(plugins.sourcemaps.write("./"))
        .pipe(gulp.dest("css"))
        // allows automatic css injecting
        .pipe(plugins.livereload());
});

// Watch task to watch for changes to sass and js
gulp.task("watch", ["compileSass", "minifyScripts", "concatScripts"], function () {
    "use strict";
    plugins.livereload.listen();
    // Watch sass/js for changes
    gulp.watch("src/*.scss", ["compileSass"]);
    gulp.watch("src/*.js", ["concatScripts", "minifyScripts"]);
});

gulp.task("build", ["webserver", "concatScripts", "minifyScripts", "compileSass", "watch"], function () {
    "use strict";
});

gulp.task("default", function () {
    "use strict";
    gulp.start("build");
});
