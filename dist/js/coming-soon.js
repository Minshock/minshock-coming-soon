/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_coming_soon_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/coming-soon.scss */ \"./assets/scss/coming-soon.scss\");\n/* harmony import */ var _scss_coming_soon_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_coming_soon_scss__WEBPACK_IMPORTED_MODULE_0__);\n// import JQuery from Jquery\n// import Bootstrap from Bootstrap\n// import Fontawesome from Fontawesome\n\n\n(function ($) {\n  'use strict'; // Start of use strict\n  // No JS\n\n  console.log(\"Hello World!!!\");\n})(jQuery); // End of use strict\n// console.log(JQuery, Bootstrap, Fontawesome)\n\n//# sourceURL=webpack:///./assets/js/index.js?");

/***/ }),

/***/ "./assets/scss/coming-soon.scss":
/*!**************************************!*\
  !*** ./assets/scss/coming-soon.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleParseError: Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\\n    at handleParseError (/mnt/d/Code/minshock-coming-soon/node_modules/webpack/lib/NormalModule.js:469:19)\\n    at /mnt/d/Code/minshock-coming-soon/node_modules/webpack/lib/NormalModule.js:503:5\\n    at /mnt/d/Code/minshock-coming-soon/node_modules/webpack/lib/NormalModule.js:358:12\\n    at /mnt/d/Code/minshock-coming-soon/node_modules/loader-runner/lib/LoaderRunner.js:373:3\\n    at iterateNormalLoaders (/mnt/d/Code/minshock-coming-soon/node_modules/loader-runner/lib/LoaderRunner.js:214:10)\\n    at Array.<anonymous> (/mnt/d/Code/minshock-coming-soon/node_modules/loader-runner/lib/LoaderRunner.js:205:4)\\n    at Storage.finished (/mnt/d/Code/minshock-coming-soon/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\\n    at /mnt/d/Code/minshock-coming-soon/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9\\n    at /mnt/d/Code/minshock-coming-soon/node_modules/graceful-fs/graceful-fs.js:90:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:61:3)\");\n\n//# sourceURL=webpack:///./assets/scss/coming-soon.scss?");

/***/ })

/******/ });