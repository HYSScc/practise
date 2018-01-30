### git 命令

* test  first
* test second
* test  third
* git branch 查看本地所有分支
* status 查看当前状态
* git commit 提交
* git branch -a 查看所有的分支
* git branch -r 查看远程所有分支
* git commit -am "init" 提交并且加注释
* git remote add origin git@192.168.1.119:ndshow
* git push origin master 将文件给推到服务器上
* git remote show origin 显示远程库origin里的资源
* git push origin master:develop
* git push origin master:hb-dev 将本地库与服务器上的库进行关联
* git checkout --track origin/dev 切换到远程dev分支
* git branch -D master develop 删除本地库develop
* git checkout -b dev 建立一个新的本地分支dev
* git merge origin/dev 将分支dev与当前分支进行合并
* git checkout dev 切换到本地dev分支
* git remote show 查看远程库
* git add .
* git rm 文件名(包括路径) 从git中删除指定文件
* git clone git://github.com/schacon/grit.git 从服务器上将代码给拉下来
* git config --list 看所有用户
* git ls-files 看已经被提交的
* git rm [file name] 删除一个文件
* git commit -a 提交当前repos的所有的改变
* git add [file name] 添加一个文件到git index
* git commit -v 当你用－v参数的时候可以看commit的差异
* git commit -m "This is the message describing the commit" 添加commit信息
* git commit -a -a是代表add，把所有的change加到git index里然后再commit
* git commit -a -v 一般提交命令
* git log 看你commit的日志
* git diff 查看尚未暂存的更新
* git rm a.a 移除文件(从暂存区和工作区中删除)
* git rm --cached a.a 移除文件(只从暂存区中删除)
* git commit -m "remove" 移除文件(从Git中删除)
* git rm -f a.a 强行移除修改后文件(从暂存区和工作区中删除)
* git diff --cached 或 $ git diff --staged 查看尚未提交的更新
* git stash push 将文件给push到一个临时空间中
* git stash pop 将文件从临时空间pop下来

###this and apply

* 使用apply方法时，参数中第一个是要指向的对象，后面的参数要放在数组中，callback.apply(callbackObj,[option1,option2]);
* 使用call方法时，参数中第一个也是要指向的对象，后面的参数一一列出。callback.call(callbackObj,option1,option2)

### javascript中的单线程、异步和时间循环机制
###单线程
    在浏览器的一个页面中，该页面的JS程序只有一个线程，所以叫单线程，所以一个JS文件只能从前到后同步执行，同一时间只能有一段代码执行，
### 任务队列和事件循环
   * 首先是同步任务，就是一个JS文件首次被执行的任务，是那些能立即执行不耗时的任务,比如函数、变量的声明，事件的绑定等等；这些同步的任务都存储到栈中；堆中用来存储已经声明的变量、对象，
   * 其次是任务队列，在这里存储的是即将要执行的任务，当同步任务全部执行完成后，内存里面的栈被清空，这时读取任务队列中待执行的任务，并把相关的回调函数压到栈中，单线程开始执行新的同步任务，
   * 单线程从任务队列中读取任务是不断循环的，每次栈被清空后，都会在任务队列中读取新的任务，如果没有新的任务，就会等待，直到有新的任务，这就叫任务循环。

### 可以考虑使用回调函数的情况：

    避免重复代码 (DRY—Do Not Repeat Yourself)
    在你需要更多的通用功能的地方更好地实现抽象(可处理各种类型的函数)。
    增强代码的可维护性
    增强代码的可读性
    有更多定制的功能

###在JavaScript中经常使用回调函数时注意以下几点，尤其是现在的web应用开发，在第三方库和框架中

    异步执行(例如读文件，发送HTTP请求)
    事件监听和处理
    设置超时和时间间隔的方法
    通用化：代码简洁 




### javascript概念

* 1、数值类型VS引用类型 —了解如何复制对象、数组和函数以及如何将它们传递到函数中。知道引用类型复制的是什么。了解原始值是通过复制值来复制及传递的；
* 2、作用域 —了解全局作用域、函数作用域及块作用域的不同。了解变量的作用范围。知道 JavaScript 引擎如何查找变量。
* 3、声明提升 — 了解变量和函数声明会被提升到可用范围的顶部。了解函数表达式不会被提升。
* 4、闭包 — 知道函数内部创建的函数可以访问该函数的作用域。知道这种方式允许我们做什么，比如数据隐藏、记忆以及动态函数变换。
* 5、this — 知道 this 绑定的原则。知道它的工作原理，在函数中指代的内容以及为什么有用。
* 6、new — 知道它与面向对象编程的关系。知道使用 new 调用的函数发生了什么。了解使用 new 生成的对象是如何从函数的原型继承的。
* 7、apply, call, bind — 知道每个函数是如何工作的。知道如何使用它们。知道它们对 this 做什么。
* 8、原型 & 继承 — 了解 JavaScript 的继承是通过 [[Prototype]] 实现的。了解如何通过函数及对象建立继承并通过 new 实现继承。理解__proto__ 及 prototype 的属性以及作用。
* 9、异步的 JS — 了解事件循环。理解浏览器如何处理一般的用户输入、网络请求以及事件。知道如何正确认识和实现异步代码。了解 JavaScript 是异步的和单线程的。
* 10、高阶函数 — 了解 JavaScript 中的函数是第一类对象以及它的意义。知道从另一个函数返回函数是完全合法的。了解闭包及高阶函数允许使用的技术。



### javascript中的变量查找
var a = "abc";

var obj = {
    a: "def",
    display3: function () {
        var a = "sssss";
        console.log(a);
    },
    display4: function() {
        console.log(this.a);
    }
}

Object.prototype.a = "ghi";

function display1() {
    // var = "hahaha";
    console.log(a)
}

function display2() {
    console.log(this.a);
}

display1(); // "abc"
display2();  // "abc"

obj.display3();
obj.display4();

// display2.call(obj);  // "def"
// display1.call(obj);  // "abc"


###变量查找
* 1. 直接访问标识符是通过作用域链和原型链综合进行查找的。
* 2. 通过this访问标识符是通过原型链来查找的。
### 然后又出现了一个问题：直接访问标识符的查找顺序是 
* 1：先查找作用域链前端的变量对象，然后再查找它的原型，然后再查找作用域链中下一个变量对象，然后再查找它的原型 还是 
* 2：一直查找作用域链中的变量对象，知道window对象，再查找它的原型呢？

### 然后又突然发现，在调用display1时，如果display1中没有定义a变量，访问到的则是window中的a = "abc"，而不是Object.prototype中的a = "ghi".


### 最后
* 直接访问标识符的顺序是按顺序查找作用域链中的每一个变量对象直至全局变量对象，如果全局变量对象中没
  有该变量，则沿着window对象的原型链进行查找。(全局对象在所有变量的最后端，即存在于运行期上下文作用域链的最末端，因此在标识符解析的时候，全局变量的查找是最慢的，)

* 通过this访问标识符是通过原型链来查找的。
* 若是直接访问标识符查找变量，查找方法是按顺序查找作用域中的每一个变量，直到最后的全局变量，若在全局变量中也没找到，则从window对象的原型链继续查找，
* 通过this访问标识符是沿着原型链来查找的，从最近的原型链开始一直往上查找。



### 作用域和作用域链
* 在JavaScript中，函数也是对象，实际上，JavaScript里一切都是对象。函数对象和其它对象一样，拥有可以通过代码访问的属性和一系列仅供JavaScript引擎访问的内部属性。其中一个内部属性是[[Scope]]，由ECMA-262标准第三版定义，该内部属性包含了函数被创建的作用域中对象的集合，这个集合被称为函数的作用域链，它决定了哪些数据能被函数访问

* 因为全局变量总是存在于运行期上下文作用域链的最末端，因此在标识符解析的时候，查找全局变量是最慢的。所以，在编写代码的时候应尽量少使用全局变量，尽可能使用局部变量。


```js
<p align="center">
 <a href="http://gulpjs.com">
   <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
  <p align="center">The streaming build system</p>
</p>
```

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![OpenCollective Backers][backer-badge]][backer-url] [![OpenCollective Sponsors][sponsor-badge]][sponsor-url] [![Gitter chat][gitter-image]][gitter-url]


## What is gulp?

- **Automation** - gulp is a toolkit that helps you automate painful or time-consuming tasks in your development workflow.
- **Platform-agnostic** - Integrations are built into all major IDEs and people are using gulp with PHP, .NET, Node.js, Java, and other platforms.
- **Strong Ecosystem** - Use npm modules to do anything you want + over 2000 curated plugins for streaming file transformations
- **Simple** - By providing only a minimal API surface, gulp is easy to learn and simple to use

## Documentation

For a Getting started guide, API docs, recipes, making a plugin, etc. check out our docs!

- Need something reliable? Check out the [documentation for the current release](/docs/README.md)!
- Want to help us test the latest and greatest? Check out the [documentation for the next release](https://github.com/gulpjs/gulp/tree/4.0)!

## Sample `gulpfile.js`

This file will give you a taste of what gulp does.

```js
var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var paths = {
  scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
  images: 'client/img/**/*'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['build']);
});

gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(coffee())
      .pipe(uglify())
      .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

// Copy all static images
gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts', 'images']);
```

## Incremental Builds

We recommend these plugins:

- [gulp-changed](https://github.com/sindresorhus/gulp-changed) - only pass through changed files
- [gulp-cached](https://github.com/contra/gulp-cached) - in-memory file cache, not for operation on sets of files
- [gulp-remember](https://github.com/ahaurw01/gulp-remember) - pairs nicely with gulp-cached
- [gulp-newer](https://github.com/tschaub/gulp-newer) - pass through newer source files only, supports many:1 source:dest

## Want to test the latest and greatest?

We're hard at work on our latest release, but we need your help testing it!

```sh
npm install gulpjs/gulp#4.0
```

There's a slew of major (wonderful) changes in 4.0, so make sure you check out the [docs on that branch](https://github.com/gulpjs/gulp/tree/4.0)!

## Want to contribute?

Anyone can help make this project better - check out our [Contributing guide](/CONTRIBUTING.md)!

## Backers

Support us with a monthly donation and help us continue our activities.

[![Backers][backers-image]][support-url]

## Sponsors

Become a sponsor to get your logo on our README on Github.

[![Sponsors][sponsors-image]][support-url]

[downloads-image]: https://img.shields.io/npm/dm/gulp.svg
[npm-url]: https://www.npmjs.com/package/gulp
[npm-image]: https://img.shields.io/npm/v/gulp.svg

[travis-url]: https://travis-ci.org/gulpjs/gulp
[travis-image]: https://img.shields.io/travis/gulpjs/gulp/master.svg

[coveralls-url]: https://coveralls.io/r/gulpjs/gulp
[coveralls-image]: https://img.shields.io/coveralls/gulpjs/gulp/master.svg

[gitter-url]: https://gitter.im/gulpjs/gulp
[gitter-image]: https://badges.gitter.im/gulpjs/gulp.svg

[backer-url]: #backers
[backer-badge]: https://opencollective.com/gulpjs/backers/badge.svg?color=blue
[sponsor-url]: #sponsors
[sponsor-badge]: https://opencollective.com/gulpjs/sponsors/badge.svg?color=blue

[support-url]: https://opencollective.com/gulpjs#support

[backers-image]: https://opencollective.com/gulpjs/backers.svg
[sponsors-image]: https://opencollective.com/gulpjs/sponsors.svg

//软件开发工具包    SDK