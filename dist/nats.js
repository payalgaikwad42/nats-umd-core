(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('nats.ws')) :
	typeof define === 'function' && define.amd ? define(['exports', 'nats.ws'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.NATS = {}, global.nats));
})(this, (function (exports, nats_ws) { 'use strict';

	Object.keys(nats_ws).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () { return nats_ws[k]; }
		});
	});

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=nats.js.map
