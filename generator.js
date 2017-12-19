// Copyright 2017 FOCUS Inc.All Rights Reserved.

/**
 * @fileOverview koa-example
 * @author oneroundseven@gmail.com
 */

// hello world
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
hw.next(); // {value: "hello", done: false}
hw.next(); // {value: "world", done: false}
hw.next(); // {value: "ending", done: true}
hw.next(); // {value: undefined, done: true}


// no yield
function* noYield() {
    console.log('noYield');
}

var _noYield = noYield();
_noYield.next(); // {value: undefined, done: true}

// arguments
function* g() {
    var o = 1;
    var a = yield o++;
    console.log('a = ' + a);
    var b = yield o++;
}
var gen = g();
gen.next(); // {value: 1, done: false}
gen.next(11); // a = 11 {value: 2, done: false}
gen.next(); // {value: undefined, done: true}

// for of
function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

let a = foo();

for (let v of a) {
    console.log(v);
}
// 1 2 3 4 5