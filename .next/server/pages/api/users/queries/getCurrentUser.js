module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+1QM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1N0Q");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _prisma_client__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _prisma_client__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


let prisma;

if (true) {
  prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__["PrismaClient"]();
} else {}

/* harmony default export */ __webpack_exports__["default"] = (prisma);

/***/ }),

/***/ "1N0Q":
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("uawd");


/***/ }),

/***/ "clan":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// NAMESPACE OBJECT: ./app/_resolvers/users/queries/getCurrentUser.ts
var getCurrentUser_namespaceObject = {};
__webpack_require__.r(getCurrentUser_namespaceObject);
__webpack_require__.d(getCurrentUser_namespaceObject, "default", function() { return getCurrentUser; });

// EXTERNAL MODULE: external "@blitzjs/core"
var core_ = __webpack_require__("jwnU");

// EXTERNAL MODULE: ./db/index.ts
var db = __webpack_require__("+1QM");

// CONCATENATED MODULE: ./app/_resolvers/users/queries/getCurrentUser.ts

async function getCurrentUser(_ = null, {
  session
}) {
  if (!session.userId) return null;
  const user = await db["default"].user.findFirst({
    where: {
      id: session.userId
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true
    }
  });
  return user;
}
// CONCATENATED MODULE: ./app/users/queries/getCurrentUser.ts



/* harmony default export */ var queries_getCurrentUser = __webpack_exports__["a"] = (Object(core_["getIsomorphicEnhancedResolver"])(getCurrentUser_namespaceObject, 'app/_resolvers/users/queries/getCurrentUser', 'getCurrentUser', 'query', undefined, {
  warmApiEndpoints: false
}));

/***/ }),

/***/ "jwnU":
/***/ (function(module, exports) {

module.exports = require("@blitzjs/core");

/***/ }),

/***/ "kHmN":
/***/ (function(module, exports) {

module.exports = require("@blitzjs/server");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "uawd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var app_users_queries_getCurrentUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("clan");
/* harmony import */ var _blitzjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jwnU");
/* harmony import */ var _blitzjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blitzjs_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kHmN");
/* harmony import */ var _blitzjs_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blitzjs_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
// This imports the output of getIsomorphicEnhancedResolver()



 // Ensure these files are not eliminated by trace-based tree-shaking (like Vercel)

path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve("next.config.js");
path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve("blitz.config.js");
path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(".next/__db.js"); // End anti-tree-shaking

let db;
let connect;

try {
  var _db, _db2;

  db = __webpack_require__("+1QM").default;

  if (__webpack_require__("+1QM").connect) {
    connect = __webpack_require__("+1QM").connect;
  } else if ((_db = db) !== null && _db !== void 0 && _db.$connect || (_db2 = db) !== null && _db2 !== void 0 && _db2.connect) {
    connect = () => db.$connect ? db.$connect() : db.connect();
  } else {
    connect = () => {};
  }
} catch (_) {}

/* harmony default export */ __webpack_exports__["default"] = (Object(_blitzjs_server__WEBPACK_IMPORTED_MODULE_2__["rpcApiHandler"])(app_users_queries_getCurrentUser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], Object(_blitzjs_core__WEBPACK_IMPORTED_MODULE_1__["getAllMiddlewareForModule"])(app_users_queries_getCurrentUser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]), () => {
  var _connect;

  return db && ((_connect = connect) === null || _connect === void 0 ? void 0 : _connect());
}));
const config = {
  api: {
    externalResolver: true
  }
};

/***/ })

/******/ });