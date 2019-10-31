// https://cobwwweb.com/compile-es6-code-gulp-babel-part-1
const gulp 			= require('gulp')
const babel 		= require('gulp-babel')
const plumber		= require('gulp-plumber')
const minify		= require('gulp-minify')
const sass			= require('gulp-sass')
const postcss		= require('gulp-postcss')
const autoprefixer	= require('autoprefixer')



// source and build 
const source 	= {
	'script' : 'source/script/*.js',
	'style'  : 'source/style/*.scss'
}

const build 	= {
	'js' 	: 'build/js/',
	'css' 	: 'build/css/'
}



// build JS
gulp.task( 'build-js', function() {
	return gulp.src( source.script )
		.pipe( plumber() )
		.pipe( babel(
			{
				presets: [
					[ '@babel/env', { modules: false } ]
				]
			}
		))
		.pipe( minify() )
		.pipe( gulp.dest( build.js ) )
})

// build SCSS
gulp.task( 'build-sass', function() {
	return gulp.src( source.style )
		.pipe( sass() )
		.pipe( postcss( [ autoprefixer ] ) )
		.pipe( gulp.dest( build.css ) )
});

// Watch
gulp.task( 'watch', function() {
	gulp.watch( source.style, gulp.series( 'build-sass' ) )
	gulp.watch( source.script, gulp.series( 'build-js' ) )
})

// build Default
gulp.task( 'default', gulp.series( 'build-sass', 'build-js' ) )

