(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
})((function () { 'use strict';

	/*
	 * Copyright 2024 The NATS Authors
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.wsconnect = exports.usernamePasswordAuthenticator = exports.UserAuthenticationExpiredError = exports.tokenAuthenticator = exports.TimeoutError = exports.syncIterator = exports.RequestError = exports.ProtocolError = exports.PermissionViolationError = exports.nuid = exports.Nuid = exports.NoRespondersError = exports.nkeys = exports.nkeyAuthenticator = exports.nanos = exports.MsgHdrsImpl = exports.millis = exports.Metric = exports.Match = exports.jwtAuthenticator = exports.InvalidSubjectError = exports.InvalidOperationError = exports.InvalidArgumentError = exports.headers = exports.hasWsProtocol = exports.errors = exports.Empty = exports.DrainingConnectionError = exports.delay = exports.deferred = exports.deadline = exports.credsAuthenticator = exports.createInbox = exports.ConnectionError = exports.ClosedConnectionError = exports.canonicalMIMEHeaderKey = exports.buildAuthenticator = exports.Bench = exports.backoff = exports.AuthorizationError = void 0;
	var internal_mod_1 = require("./internal_mod");
	Object.defineProperty(exports, "AuthorizationError", { enumerable: true, get: function () { return internal_mod_1.AuthorizationError; } });
	Object.defineProperty(exports, "backoff", { enumerable: true, get: function () { return internal_mod_1.backoff; } });
	Object.defineProperty(exports, "Bench", { enumerable: true, get: function () { return internal_mod_1.Bench; } });
	Object.defineProperty(exports, "buildAuthenticator", { enumerable: true, get: function () { return internal_mod_1.buildAuthenticator; } });
	Object.defineProperty(exports, "canonicalMIMEHeaderKey", { enumerable: true, get: function () { return internal_mod_1.canonicalMIMEHeaderKey; } });
	Object.defineProperty(exports, "ClosedConnectionError", { enumerable: true, get: function () { return internal_mod_1.ClosedConnectionError; } });
	Object.defineProperty(exports, "ConnectionError", { enumerable: true, get: function () { return internal_mod_1.ConnectionError; } });
	Object.defineProperty(exports, "createInbox", { enumerable: true, get: function () { return internal_mod_1.createInbox; } });
	Object.defineProperty(exports, "credsAuthenticator", { enumerable: true, get: function () { return internal_mod_1.credsAuthenticator; } });
	Object.defineProperty(exports, "deadline", { enumerable: true, get: function () { return internal_mod_1.deadline; } });
	Object.defineProperty(exports, "deferred", { enumerable: true, get: function () { return internal_mod_1.deferred; } });
	Object.defineProperty(exports, "delay", { enumerable: true, get: function () { return internal_mod_1.delay; } });
	Object.defineProperty(exports, "DrainingConnectionError", { enumerable: true, get: function () { return internal_mod_1.DrainingConnectionError; } });
	Object.defineProperty(exports, "Empty", { enumerable: true, get: function () { return internal_mod_1.Empty; } });
	Object.defineProperty(exports, "errors", { enumerable: true, get: function () { return internal_mod_1.errors; } });
	Object.defineProperty(exports, "hasWsProtocol", { enumerable: true, get: function () { return internal_mod_1.hasWsProtocol; } });
	Object.defineProperty(exports, "headers", { enumerable: true, get: function () { return internal_mod_1.headers; } });
	Object.defineProperty(exports, "InvalidArgumentError", { enumerable: true, get: function () { return internal_mod_1.InvalidArgumentError; } });
	Object.defineProperty(exports, "InvalidOperationError", { enumerable: true, get: function () { return internal_mod_1.InvalidOperationError; } });
	Object.defineProperty(exports, "InvalidSubjectError", { enumerable: true, get: function () { return internal_mod_1.InvalidSubjectError; } });
	Object.defineProperty(exports, "jwtAuthenticator", { enumerable: true, get: function () { return internal_mod_1.jwtAuthenticator; } });
	Object.defineProperty(exports, "Match", { enumerable: true, get: function () { return internal_mod_1.Match; } });
	Object.defineProperty(exports, "Metric", { enumerable: true, get: function () { return internal_mod_1.Metric; } });
	Object.defineProperty(exports, "millis", { enumerable: true, get: function () { return internal_mod_1.millis; } });
	Object.defineProperty(exports, "MsgHdrsImpl", { enumerable: true, get: function () { return internal_mod_1.MsgHdrsImpl; } });
	Object.defineProperty(exports, "nanos", { enumerable: true, get: function () { return internal_mod_1.nanos; } });
	Object.defineProperty(exports, "nkeyAuthenticator", { enumerable: true, get: function () { return internal_mod_1.nkeyAuthenticator; } });
	Object.defineProperty(exports, "nkeys", { enumerable: true, get: function () { return internal_mod_1.nkeys; } });
	Object.defineProperty(exports, "NoRespondersError", { enumerable: true, get: function () { return internal_mod_1.NoRespondersError; } });
	Object.defineProperty(exports, "Nuid", { enumerable: true, get: function () { return internal_mod_1.Nuid; } });
	Object.defineProperty(exports, "nuid", { enumerable: true, get: function () { return internal_mod_1.nuid; } });
	Object.defineProperty(exports, "PermissionViolationError", { enumerable: true, get: function () { return internal_mod_1.PermissionViolationError; } });
	Object.defineProperty(exports, "ProtocolError", { enumerable: true, get: function () { return internal_mod_1.ProtocolError; } });
	Object.defineProperty(exports, "RequestError", { enumerable: true, get: function () { return internal_mod_1.RequestError; } });
	Object.defineProperty(exports, "syncIterator", { enumerable: true, get: function () { return internal_mod_1.syncIterator; } });
	Object.defineProperty(exports, "TimeoutError", { enumerable: true, get: function () { return internal_mod_1.TimeoutError; } });
	Object.defineProperty(exports, "tokenAuthenticator", { enumerable: true, get: function () { return internal_mod_1.tokenAuthenticator; } });
	Object.defineProperty(exports, "UserAuthenticationExpiredError", { enumerable: true, get: function () { return internal_mod_1.UserAuthenticationExpiredError; } });
	Object.defineProperty(exports, "usernamePasswordAuthenticator", { enumerable: true, get: function () { return internal_mod_1.usernamePasswordAuthenticator; } });
	Object.defineProperty(exports, "wsconnect", { enumerable: true, get: function () { return internal_mod_1.wsconnect; } });

}));
