'use strict';
var Vue = require('vue'),
    router = require('crossroads'),
    Listner = require('./listner');


var vm = new Vue({
    el: '#js-demo-app',
    data: {
        message: 'Hi. This is Vue.js SPA demo',
    },
});

router.addRoute('welcome', function() {
    console.log('here comes welcome');
});

router.addRoute('home', function() {
    console.log('here comes home');
});

router.addRoute('affiliate/{id}', function(id) {
    console.log('here comes affiliate detail', 'id=' + id);
});


var listner = new Listner(router);
listner.listhenClick(document.querySelectorAll('a'));
