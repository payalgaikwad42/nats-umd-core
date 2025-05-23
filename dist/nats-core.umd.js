(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@nats-io/nats')) :
	typeof define === 'function' && define.amd ? define(['exports', '@nats-io/nats'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.nats = {}, global.nats));
})(this, (function (exports, nats) { 'use strict';

	Object.keys(nats).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () { return nats[k]; }
		});
	});

	Object.defineProperty(exports, '__esModule', { value: true });

}));
