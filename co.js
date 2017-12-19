// Copyright 2017 FOCUS Inc.All Rights Reserved.

/**
 * @fileOverview koa-example
 * @author oneroundseven@gmail.com
 */

var co = require('co');

// hello world
co(function* (){
    yield timer(1000, 'hello');
    yield timer(1000, 'world');
});

function timer(delay, str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(str);
            resolve();
        }, delay);
    });
}