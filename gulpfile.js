var gulp = require('gulp');
var sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass',function(){
    return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(sourcemaps.write('.',{includeContent: true}))
    .pipe(gulp.dest('src/css/'));
});

gulp.task('watch',function(){
    gulp.watch('src/scss/**/*.scss',['sass']);
    gulp.watch('src/js/*.js',['concat:js']);
});

gulp.task('sprite', function() {
    var spriteData = gulp.src('src/sprite_img/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: '_sprite.scss',
            padding: 4,
            imgPath: '../img/sprite.png'
        }));
    var imgStream = new Promise(function(resolve) {
        spriteData.img
            .pipe(gulp.dest('src/img/'))
            .on('end',resolve);
    });
        
    var cssStream = new Promise(function(resolve) {
        spriteData.css
            .pipe(gulp.dest('src/sprite_scss/'))
            .on('end',resolve);
    });
    return Promise.all([imgStream, cssStream]);
});
