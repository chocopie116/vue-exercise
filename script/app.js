'use strict';
var Vue = require('vue'),
    router = require('crossroads');

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


var a = document.querySelectorAll('a');
for (var i=0; i<a.length; i++) {
    a[i].onclick=function(e){
        var path = this.href.split('#')[1];
        router.parse(path);
    }
}
