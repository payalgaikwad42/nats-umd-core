(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('nats.ws')) :
    typeof define === 'function' && define.amd ? define(['nats.ws'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.NATS = factory(global.nats));
})(this, (function (nats) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var nats__namespace = /*#__PURE__*/_interopNamespace(nats);

    // Explicitly expose to global scope for UMD consumers like Tulip
    if (typeof window !== 'undefined') {
        window.NATS = nats__namespace;
    }

    return nats__namespace;

}));
//# sourceMappingURL=nats.js.map
