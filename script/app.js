'use strict';
var Vue = require('vue'),
    router = require('crossroads'),
    Listner = require('./listner');

var vm = new Vue({
    el: '#myapp',
    data: {
        name: 'chocopie116',
        isAdmin: true,
        phone: 'iPhone',
        city: 'tokyo'
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
