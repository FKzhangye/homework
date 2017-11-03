// 引入gulp, 实际上是Gulp的一个实例对象
let gulp = require('gulp');
// 是一个压缩js的插件 ，返回的是一个函数
let uglify = require('gulp-uglify');
// 是一个压缩css的插件，返回的是一个函数
let minifyCss = require('gulp-minify-css');
let babel = require('gulp-babel');
let imagemin = require('gulp-imagemin')
let less = require('gulp-less')
let sass = require('gulp-ruby-sass')




// 新建一个名叫script的任务
gulp.task('script', () => {
  //读取js/*.js; 通过管道让uglify()去处理所有的流，通过管道把文件写入到目标文件中
  //**/表示js目录任意多层级目录下的js文件
  gulp.src('js/**/*.js')
  .pipe(babel())
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});
// 新建一个名为css的任务
gulp.task('css', () => {
  // 读取css/*.css文件, 通过管道minifycss()去处理，再放入到目标文件
  gulp.src('css/**/*.css')
  .pipe(minifyCss())
  .pipe(gulp.dest('dist/css'));
});
// 新建一个名为images的任务
gulp.task('images', () =>{
	gulp.src('images/**/*.*')
	.pipe(imagemin({
		progressive:true
	}))
	.pipe(gulp.dest('dist/images'));
});
// 新建一个名为less的任务
gulp.task('less',() =>{
	gulp.src('less/**/**.less')
	.pipe(less())
	.pipe(gulp.dest('dist/css'));
});
// 新建一个名为sass的任务
gulp.task('sass',() =>{
	return sass('sass/*.*')
	.on('error',function(err){
		console.error('Error!',err.message);
	})
	.pipe(gulp.dest('dist/css'))
});




//新建一个名为auto的任务
gulp.task('auto', function(){
  // 监听js/*.js文件，如果发生变化则执行script
  gulp.watch('js/**/*.js', ['script']);
  gulp.watch('css/**/*.css', ['css']);
  gulp.watch('images/**/*.*',['images']);
  gulp.watch('less/**/**.less',['less']);
  gulp.watch('sass/**/**.scss',['sass'])
});

//新建一个名叫default的任务，执行这些任务之前，先执行script,css,auto任务
gulp.task('default', ['script', 'css', 'images','less','sass','auto']);
//console.log(gulp);
//console.log(gulp.__proto__);












//var gulp = require('gulp');
//var uglify = require('gulp-uglify')
//var minifyCss = require("gulp-minify-css")
//var babel = require("gulp-babel")

//let gulp = require("gulp");
//let uglify = require("gulp-uglify");
//let minifyCss = require("gulp-minify-css");
//let babel = require("gulp-babel");
//
//
//gulp.task('script',()=>{
//	gulp.src('js/**/*.js')
//	.pipe(babel())
//	.pipe(uglify())
//	.pipe(gulp.dest('dist/js'));
//})
//
//gulp.task('css',() =>{
//	gulp.src('css/**/*.css')
//	.pipe(minifyCss())
//	.pipe(gulp.dest('dist/css'));
//})
//
//
//
//// 在命令行使用 gulp auto 启动此任务
//gulp.task('auto',function(){
//	// 监听文件修改，当文件被修改则执行 script 任务
//	gulp.watch('js/**/*.js',['script']);
//	gulp.watch('css/**/*.css',['css']);
//})
//
//// 使用 gulp.task('default') 定义默认任务
//// 在命令行使用 gulp 启动 script 任务和 auto 任务
//gulp.task('default',['script','css','auto']);










//gulp-uglify 压缩js文件
console.log(gulp);

/*gulp.task('script',function(){
	gulp.src("js/*.js")
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
})
*/
/*// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function() {
    // 1. 找到文件
    gulp.src('js/*.js')
    // 2. 压缩文件
        .pipe(uglify())
    // 3. 另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
})*/


//  gulp.task(name, fn) - 定义任务，第一个参数是任务名，第二个参数是任务内容。
//  gulp.src(path) - 选择文件，传入参数是文件路径。
//  gulp.dest(path) - 输出文件 path：执行操作后文件保存路径（自己创建）
//  gulp.pipe() - 管道，你可以暂时将 pipe 理解为将操作加入执行队列

