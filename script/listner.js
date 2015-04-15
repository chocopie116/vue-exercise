'use strict';

var Listner = function(router) {
    this.router = router;
}

Listner.prototype.listhenClick = function(targets) {
    var that = this;
    that._init();

    for (var i = 0; i < targets.length; i++) {
        targets[i].onclick = function(e) {
            var path = this.href.split('#')[1];
            that.router.parse(path);
        }
    }
}

Listner.prototype._init = function() {
    var that = this;
    var path = location.href.split('#')[1];
    that.router.parse(path);
}


module.exports = Listner;
