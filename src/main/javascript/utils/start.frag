(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        root.SDS = factory();
    }
}(this, function () {