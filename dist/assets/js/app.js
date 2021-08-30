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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/accordion.js":
/*!************************************!*\
  !*** ./src/assets/js/accordion.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.querySelector(\".faq-accordion\").addEventListener(\"click\", (event) => {\r\n  if (\r\n    event.target.closest(\".faq-accordion__item\") &&\r\n    event.target.className !== \"faq-accordion__item-content-text\"\r\n  ) {\r\n    event.target\r\n      .closest(\".faq-accordion__item\")\r\n      .classList.toggle(\"faq-accordion__item--active\");\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/accordion.js?");

/***/ }),

/***/ "./src/assets/js/burgerMenu.js":
/*!*************************************!*\
  !*** ./src/assets/js/burgerMenu.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// for burger menu and disable scroll\nconst header = document.querySelector(\".section-header\");\n\ndocument.querySelector(\".btn-burger\").addEventListener(\"click\", (event) => {\n  header.classList.toggle(\"section-header--active-nav\");\n\n  document.body.classList.toggle(\"no-scroll\");\n});\n\n// hide menu and disable class no-scroll when customer resizing our site\nwindow.addEventListener(\"resize\", () => {\n  hideMenuAndEnableScroll();\n});\n\nconst hideMenuAndEnableScroll = () => {\n  const activeHeader = document.querySelector(\".section-header--active-nav\");\n\n  if (document.body.classList.contains(\"no-scroll\") && activeHeader) {\n    document.body.classList.remove(\"no-scroll\");\n    activeHeader.classList.remove(\"section-header--active-nav\");\n  }\n};\n\n\n//# sourceURL=webpack:///./src/assets/js/burgerMenu.js?");

/***/ }),

/***/ "./src/assets/js/hero-swiper.js":
/*!**************************************!*\
  !*** ./src/assets/js/hero-swiper.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const swiper = new Swiper(\".section-hero-image\", {\n  // Optional parameters\n  direction: \"vertical\",\n  loop: true,\n\n  // If we need pagination\n  // pagination: {\n  //   el: \".swiper-pagination\",\n  // },\n\n  // // Navigation arrows\n  // navigation: {\n  //   nextEl: \".swiper-button-next\",\n  //   prevEl: \".swiper-button-prev\",\n  // },\n\n  // // And if we need scrollbar\n  // scrollbar: {\n  //   el: \".swiper-scrollbar\",\n  // },\n});\n\n\n//# sourceURL=webpack:///./src/assets/js/hero-swiper.js?");

/***/ }),

/***/ 0:
/*!*******************************************************************************************************!*\
  !*** multi ./src/assets/js/accordion.js ./src/assets/js/burgerMenu.js ./src/assets/js/hero-swiper.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/rmyhailovich/www/blade/src/assets/js/accordion.js */\"./src/assets/js/accordion.js\");\n__webpack_require__(/*! /Users/rmyhailovich/www/blade/src/assets/js/burgerMenu.js */\"./src/assets/js/burgerMenu.js\");\nmodule.exports = __webpack_require__(/*! /Users/rmyhailovich/www/blade/src/assets/js/hero-swiper.js */\"./src/assets/js/hero-swiper.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/accordion.js_./src/assets/js/burgerMenu.js_./src/assets/js/hero-swiper.js?");

/***/ })

/******/ });