// Copyright 2017 FOCUS Inc.All Rights Reserved.

/**
 * @fileOverview koa-example
 * @author oneroundseven@gmail.com
 */

// hello world
var helloWorldAsync = async function() {
    await new Promise(function(resolve, reject) {
            setTimeout(function (){
                console.log('hello');
                resolve();
            }, 1000);
        });
    await new Promise(function(resolve, reject) {
            setTimeout(function (){
                console.log('world');
                resolve();
            }, 1000);
        });

    console.log('ending');
}

helloWorldAsync();