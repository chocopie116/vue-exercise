'use strict';
var Vue = require('vue'),
    router = require('crossroads'),
    Listner = require('./listner');

Vue.config.debug = true;


var MyComponent = Vue.extend({
    template: '<p>{{ footer_message }}</p>',
    data: function() {
        return {
            footer_message: 'this is footer'
        }
    }
});

Vue.component('my-component', MyComponent);

var vm = new Vue({
    el: '#js-demo-app',
    data: {
        message: 'Hi. This is Vue.js SPA demo',
        currentPage: 'welcome',
        affiliates: [],
        affiliate_detail: []
    }
});

router.addRoute('welcome', function() {
    console.log('here comes welcome');
    vm.$data.currentPage = 'welcome';
});

router.addRoute('home', function() {
    console.log('here comes home');
    vm.$data.currentPage = 'home';
    vm.$data.affiliates = [
        {name: 'aff_1', link: '#affiliate/1'},
        {name: 'aff_2', link: '#affiliate/2'},
        {name: 'aff_3', link: '#affiliate/3'},
    ];
});

router.addRoute('affiliate/{id}', function(id) {
    console.log('here comes affiliate detail', 'id=' + id);
    vm.$data.currentPage = 'affiliate';
    vm.$data.affiliate_detail = [
        {'id': id}
    ];
});


var listner = new Listner(router);
listner.listhenClick(document.querySelectorAll('a'));
