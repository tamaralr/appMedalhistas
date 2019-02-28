var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

// Compilação com JS
gulp.task('scripts', function() {
    var tsResult = gulp.src("src/**/*.ts") // or tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});

//Chamada do watch
gulp.task('watch', gulp.series('scripts', function(done) {
    gulp.watch('src/*.ts', gulp.task('scripts'));
	done();
}));

//Chamada das assets para o JSON_FILES
gulp.task('assets', gulp.series(function(done) {
	return gulp.src(JSON_FILES).pipe(gulp.dest('dist'));
	done();
}));

//Chamada do gulp
gulp.task('default', gulp.series('watch', 'assets'));
 
// gulp restart
gulp.task('watch', function() {
 
  var restart = require('gulp-restart');
 
  // will restart the entire gulp on every file change
  gulp.watch(['src/**/*'], restart);
 
});
