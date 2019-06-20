'use strict';

// 在gulpfile中先载入gulp包，因为这个包提供了一些API
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano'); 

//压缩混淆 
gulp.task('build', function () {
    //合并几个js到一个js中
    gulp.src([
        "src/lib/Cesium/Cesium.js",
        "src/lib/cesium-mars/mars3d.js",
        "src/lib/CesiumPlugins/navigation/viewerCesiumNavigationMixin.min.js",
    ])
    .pipe(concat('Cesium.js')) //输出的文件名称
    //.pipe(uglify()) //需要混淆时取消注释
    .pipe(gulp.dest('dist/'));


    //合并几个css到一个css中
    gulp.src([
        "src/lib/Cesium/Widgets/widgets.css",
        "src/lib/cesium-mars/mars3d.css",
        "src/lib/CesiumPlugins/navigation/viewerCesiumNavigationMixin.css",
    ])
    .pipe(concat('widgets.css')) //输出的文件名称
    .pipe(cssnano())
    .pipe(gulp.dest('dist/'));

});

