/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./sass/main.scss":
/*!*****************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--5-2!./sass/main.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! owl.carousel/src/img/owl.video.play.png */ "../node_modules/owl.carousel/src/img/owl.video.play.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./../fonts/ProximaNovaBlack/ProximaNovaBlack.eot */ "./fonts/ProximaNovaBlack/ProximaNovaBlack.eot");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./../fonts/ProximaNovaBlack/ProximaNovaBlack.woff */ "./fonts/ProximaNovaBlack/ProximaNovaBlack.woff");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./../fonts/ProximaNovaBlack/ProximaNovaBlack.ttf */ "./fonts/ProximaNovaBlack/ProximaNovaBlack.ttf");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ./../fonts/ProximaNovaBold/ProximaNovaBold.eot */ "./fonts/ProximaNovaBold/ProximaNovaBold.eot");
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ./../fonts/ProximaNovaBold/ProximaNovaBold.woff */ "./fonts/ProximaNovaBold/ProximaNovaBold.woff");
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ./../fonts/ProximaNovaBold/ProximaNovaBold.ttf */ "./fonts/ProximaNovaBold/ProximaNovaBold.ttf");
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ./../fonts/ProximaNovaRegular/ProximaNovaRegular.eot */ "./fonts/ProximaNovaRegular/ProximaNovaRegular.eot");
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ./../fonts/ProximaNovaRegular/ProximaNovaRegular.woff */ "./fonts/ProximaNovaRegular/ProximaNovaRegular.woff");
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ./../fonts/ProximaNovaRegular/ProximaNovaRegular.ttf */ "./fonts/ProximaNovaRegular/ProximaNovaRegular.ttf");
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ./../img/icons/x-icon.svg */ "./img/icons/x-icon.svg");
var ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ./../img/slider/slide-1.jpg */ "./img/slider/slide-1.jpg");
var ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! ./../img/slider/slide-2.jpg */ "./img/slider/slide-2.jpg");
var ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(/*! ./../img/slider/snowman.png */ "./img/slider/snowman.png");
var ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(/*! ./../img/icons/next.svg */ "./img/icons/next.svg");
var ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(/*! ./../img/icons/prev.svg */ "./img/icons/prev.svg");
var ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(/*! ./../img/bg/content-photo-bg.jpg */ "./img/bg/content-photo-bg.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);
// Module
exports.push([module.i, "/*\n *  Owl Carousel - Core\n */\n.owl-carousel {\n  display: none;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  /* position relative and z-index fix webkit rendering fonts issue */\n  position: relative;\n  z-index: 1;\n}\n.owl-carousel .owl-stage {\n  position: relative;\n  -ms-touch-action: pan-Y;\n  touch-action: manipulation;\n  -moz-backface-visibility: hidden;\n  /* fix firefox animation glitch */\n}\n.owl-carousel .owl-stage:after {\n  content: \".\";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  line-height: 0;\n  height: 0;\n}\n.owl-carousel .owl-stage-outer {\n  position: relative;\n  overflow: hidden;\n  /* fix for flashing background */\n  -webkit-transform: translate3d(0px, 0px, 0px);\n}\n.owl-carousel .owl-wrapper,\n.owl-carousel .owl-item {\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -ms-backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n}\n.owl-carousel .owl-item {\n  position: relative;\n  min-height: 1px;\n  float: left;\n  -webkit-backface-visibility: hidden;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n.owl-carousel .owl-item img {\n  display: block;\n  width: 100%;\n}\n.owl-carousel .owl-nav.disabled,\n.owl-carousel .owl-dots.disabled {\n  display: none;\n}\n.owl-carousel .owl-nav .owl-prev,\n.owl-carousel .owl-nav .owl-next,\n.owl-carousel .owl-dot {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.owl-carousel .owl-nav button.owl-prev,\n.owl-carousel .owl-nav button.owl-next,\n.owl-carousel button.owl-dot {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0 !important;\n  font: inherit;\n}\n.owl-carousel.owl-loaded {\n  display: block;\n}\n.owl-carousel.owl-loading {\n  opacity: 0;\n  display: block;\n}\n.owl-carousel.owl-hidden {\n  opacity: 0;\n}\n.owl-carousel.owl-refresh .owl-item {\n  visibility: hidden;\n}\n.owl-carousel.owl-drag .owl-item {\n  touch-action: pan-y;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.owl-carousel.owl-grab {\n  cursor: move;\n  cursor: grab;\n}\n.owl-carousel.owl-rtl {\n  direction: rtl;\n}\n.owl-carousel.owl-rtl .owl-item {\n  float: right;\n}\n\n/* No Js */\n.no-js .owl-carousel {\n  display: block;\n}\n\n/*\n *  Owl Carousel - Animate Plugin\n */\n.owl-carousel .animated {\n  animation-duration: 1000ms;\n  animation-fill-mode: both;\n}\n.owl-carousel .owl-animated-in {\n  z-index: 0;\n}\n.owl-carousel .owl-animated-out {\n  z-index: 1;\n}\n.owl-carousel .fadeOut {\n  animation-name: fadeOut;\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*\n * \tOwl Carousel - Auto Height Plugin\n */\n.owl-height {\n  transition: height 500ms ease-in-out;\n}\n\n/*\n * \tOwl Carousel - Lazy Load Plugin\n */\n.owl-carousel .owl-item {\n  /**\n  \tThis is introduced due to a bug in IE11 where lazy loading combined with autoheight plugin causes a wrong\n  \tcalculation of the height of the owl-item that breaks page layouts\n   */\n}\n.owl-carousel .owl-item .owl-lazy {\n  opacity: 0;\n  transition: opacity 400ms ease;\n}\n.owl-carousel .owl-item .owl-lazy[src^=\"\"], .owl-carousel .owl-item .owl-lazy:not([src]) {\n  max-height: 0;\n}\n.owl-carousel .owl-item img.owl-lazy {\n  transform-style: preserve-3d;\n}\n\n/*\n * \tOwl Carousel - Video Plugin\n */\n.owl-carousel .owl-video-wrapper {\n  position: relative;\n  height: 100%;\n  background: #000;\n}\n.owl-carousel .owl-video-play-icon {\n  position: absolute;\n  height: 80px;\n  width: 80px;\n  left: 50%;\n  top: 50%;\n  margin-left: -40px;\n  margin-top: -40px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  cursor: pointer;\n  z-index: 1;\n  -webkit-backface-visibility: hidden;\n  transition: transform 100ms ease;\n}\n.owl-carousel .owl-video-play-icon:hover {\n  transform: scale(1.3, 1.3);\n}\n.owl-carousel .owl-video-playing .owl-video-tn,\n.owl-carousel .owl-video-playing .owl-video-play-icon {\n  display: none;\n}\n.owl-carousel .owl-video-tn {\n  opacity: 0;\n  height: 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  transition: opacity 400ms ease;\n}\n.owl-carousel .owl-video-frame {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n}\n\n@font-face {\n  font-family: \"Proxima Nova Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Proxima Nova Bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Proxima Nova Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n.header {\n  display: flex;\n  align-items: center;\n  background-color: #000;\n  padding-top: 29px;\n  padding-bottom: 29px;\n  padding-left: 50px;\n  padding-right: 90px;\n}\n\n.nav-link {\n  margin-right: 30px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 13px;\n  color: #fff;\n  transition: all 0.2s ease-in;\n}\n.nav-link:hover {\n  color: #bdbdbd;\n}\n.nav-link:last-child {\n  margin-right: 0;\n}\n\n.logo {\n  width: 140px;\n  cursor: pointer;\n}\n\n.cart {\n  margin-left: auto;\n  font-size: 15px;\n}\n.cart .cart__icon {\n  color: #fff;\n}\n.cart .cart__icon:hover, .cart .cart__icon:focus, .cart .cart__icon:active {\n  color: #bdbdbd;\n}\n.cart .fa-search {\n  margin-right: 25px;\n  transition: all 0.2s ease-in;\n}\n.cart .fa-shopping-bag {\n  margin-right: 10px;\n  transition: all 0.2s ease-in;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody {\n  font-family: \"Proxima Nova Regular\", sans-serif;\n  color: #fff;\n}\n\na:hover {\n  text-decoration: none;\n}\n\n.title-1 {\n  font-family: \"Proxima Nova Black\", sans-serif;\n  font-size: 48px;\n  text-transform: uppercase;\n  color: #000;\n  margin: 0;\n  text-align: center;\n}\n\n.header-group {\n  position: relative;\n  padding-bottom: 50px;\n  padding-top: 45px;\n  text-align: center;\n}\n\n.header-group::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  left: 50%;\n  bottom: 0px;\n  margin-left: -15px;\n  height: 30px;\n  width: 30px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  color: #000;\n}\n\n.container__snowboards {\n  margin-bottom: 200px;\n}\n\n.slider {\n  height: 760px;\n  width: 100%;\n}\n.slider .slider__item {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 760px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.slider .slider__item.slider__item--1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n  color: #000;\n}\n.slider .slider__item.slider__item--2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\n}\n\n.slider__centered-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.slider__title {\n  font-size: 80px;\n  font-family: \"Proxima Nova Black\", sans-serif;\n  text-transform: uppercase;\n  margin-bottom: 60px;\n}\n.slider__title.slider__title--snowboardman {\n  position: relative;\n}\n.slider__title.slider__title--snowboardman:after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  right: -100px;\n  top: -200px;\n  height: 380px;\n  width: 395px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.slider-button {\n  background-color: #000;\n  color: #fff;\n  display: inline-block;\n  padding: 20px 33px;\n  line-height: 1;\n  font-size: 14px;\n  text-transform: uppercase;\n  font-family: \"Proxima Nova Bold\", sans-serif;\n  margin-left: auto;\n  transition: all 0.2s ease-in;\n  cursor: pointer;\n}\n\n.slider-button:hover {\n  background-color: #333333;\n}\n\n.container-full {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.subtitle {\n  font-size: 14px;\n  color: #000;\n  text-transform: uppercase;\n  margin-top: 20px;\n}\n\n.slider-snowboards-holder {\n  width: 100%;\n  overflow: hidden;\n}\n\n.slider-snowboards.owl-carousel {\n  width: 1110px;\n  padding-top: 117px;\n  padding-bottom: 50px;\n}\n\n.slider-snowboards.owl-carousel .owl-stage-outer {\n  overflow: visible;\n}\n\n.owl-carousel .owl-item img {\n  margin-right: auto;\n  margin-left: auto;\n  width: auto;\n  display: block !important;\n}\n\n.slider-snowboards .owl-item {\n  opacity: 0.5;\n}\n\n.slider-snowboards .owl-item.center {\n  opacity: 1;\n}\n\n.slider-snowboards.owl-carousel .owl-nav .owl-next,\n.slider-snowboards.owl-carousel .owl-nav .owl-prev {\n  color: #000000;\n  display: block;\n  width: 123px;\n  height: 230px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: absolute;\n  top: 250px;\n  margin-top: -50px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.slider-snowboards.owl-carousel {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.slider-snowboards.owl-carousel .owl-nav .owl-next {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ");\n  right: -120px;\n}\n\n.slider-snowboards.owl-carousel .owl-nav .owl-prev {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\n  left: -120px;\n}\n\n.caption {\n  font-size: 24px;\n  font-family: \"Proxima Nova Bold\", sans-serif;\n  text-transform: uppercase;\n  color: #000;\n}\n\n.slider-snowboards__item {\n  width: 370px;\n  text-align: center;\n}\n.slider-snowboards__item img {\n  max-height: 405px;\n  text-align: center;\n  width: auto;\n  margin-left: auto;\n  margin-right: auto;\n  display: block !important;\n}\n\n.desc {\n  height: 885px;\n  width: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.desc__section {\n  padding-bottom: 240px;\n  padding-top: 170px;\n  display: flex;\n  flex-direction: column;\n  margin-left: 220px;\n}\n\n.desc--title {\n  margin-bottom: 60px;\n  font-size: 48px;\n  font-family: \"Proxima Nova Bold\", sans-serif;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\n.desc--description {\n  width: 750px;\n  margin-bottom: 30px;\n  font-size: 18px;\n  line-height: 2;\n}\n.desc--description:last-child {\n  margin-bottom: 0;\n}\n\n.features {\n  height: 690px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  color: #000;\n}\n\n.features-container {\n  display: flex;\n  justify-content: space-between;\n  margin-right: auto;\n  margin-left: auto;\n  min-width: 960px;\n  margin-top: 85px;\n  margin-bottom: 140px;\n}\n\n.feature-item {\n  width: 220px;\n}\n\n.feature-item--title {\n  display: inline-block;\n  margin-top: 20px;\n  font-size: 16px;\n  line-height: 1.8;\n  color: #000;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\n\n.feature-item--title:hover {\n  color: #575757;\n}\n\n.footer {\n  background-color: #000;\n  padding-top: 75px;\n  padding-bottom: 75px;\n}\n\n.container {\n  width: 960px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.row {\n  margin-right: -10px;\n  margin-left: -10px;\n}\n\n.col-3 {\n  width: 25%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.footer-title {\n  text-transform: uppercase;\n  font-family: \"Proxima Nova Bold\", sans-serif;\n  font-size: 17px;\n  margin-bottom: 15px;\n}\n\n.footer-nav {\n  display: flex;\n  flex-direction: column;\n}\n\n.footer-nav__link {\n  font-size: 14px;\n  color: #c8c8c8;\n  transition: all 0.2s ease-in;\n  margin-bottom: 15px;\n}\n\n.footer-nav__link:hover {\n  text-decoration: none;\n  color: #fff;\n}\n\n.footer-form {\n  margin-bottom: 60px;\n  display: flex;\n}\n\n.footer-form__input-text {\n  background-color: #fff;\n  color: #000;\n  width: 160px;\n  height: 42px;\n  padding-right: 12px;\n  padding-left: 12px;\n  border: none;\n  font-size: 14px;\n}\n\n.footer-form__input-text:focus {\n  outline: none;\n}\n\n.footer-form__input-button {\n  background-color: #c8c8c8;\n  color: #000;\n  text-transform: uppercase;\n  height: 42px;\n  width: 60px;\n  border: none;\n  transition: all 0.2s ease-in;\n  cursor: pointer;\n}\n\n.footer-form__input-button:hover {\n  background-color: #575757;\n  color: #fff;\n}\n\n.footer-form__input-button:focus {\n  outline: none;\n}\n\n.nav-links {\n  width: 220px;\n  font-size: 20px;\n  display: flex;\n  justify-content: space-between;\n  color: #fff;\n}\n\n.nav-links a {\n  color: #fff;\n}\n\n.nav-links a svg path {\n  transition: all 0.2s ease-in;\n  cursor: pointer;\n}\n\n.nav-links a:hover svg path {\n  fill: #c8c8c8;\n}\n\n.footer-copyright {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 40px;\n}\n.footer-copyright p {\n  margin: 0;\n}\n.footer-copyright .region {\n  display: flex;\n  align-items: baseline;\n}\n.footer-copyright .region img {\n  margin-right: 10px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./fonts/ProximaNovaBlack/ProximaNovaBlack.eot":
/*!*****************************************************!*\
  !*** ./fonts/ProximaNovaBlack/ProximaNovaBlack.eot ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/ProximaNovaBlack/ProximaNovaBlack.eot");

/***/ }),

/***/ "./fonts/ProximaNovaBlack/ProximaNovaBlack.ttf":
/*!*****************************************************!*\
  !*** ./fonts/ProximaNovaBlack/ProximaNovaBlack.ttf ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/ProximaNovaBlack/ProximaNovaBlack.ttf");

/***/ }),

/***/ "./fonts/ProximaNovaBlack/ProximaNovaBlack.woff":
/*!******************************************************!*\
  !*** ./fonts/ProximaNovaBlack/ProximaNovaBlack.woff ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/ProximaNovaBlack/ProximaNovaBlack.woff");

/***/ }),

/***/ "./fonts/ProximaNovaBold/ProximaNovaBold.eot":
/*!***************************************************!*\
  !*** ./fonts/ProximaNovaBold/ProximaNovaBold.eot ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/ProximaNovaBold/ProximaNovaBold.eot");

/***/ }),

/***/ "./fonts/ProximaNovaBold/ProximaNovaBold.ttf":
/*!***************************************************!*\
  !*** ./fonts/ProximaNovaBold/ProximaNovaBold.ttf ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/ProximaNovaBold/ProximaNovaBold.ttf");

/***/ }),

/***/ "./fonts/ProximaNovaBold/ProximaNovaBold.woff":
/*!****************************************************!*\
  !*** ./fonts/ProximaNovaBold/ProximaNovaBold.woff ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/ProximaNovaBold/ProximaNovaBold.woff");

/***/ }),

/***/ "./fonts/ProximaNovaRegular/ProximaNovaRegular.eot":
/*!*********************************************************!*\
  !*** ./fonts/ProximaNovaRegular/ProximaNovaRegular.eot ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/ProximaNovaRegular/ProximaNovaRegular.eot");

/***/ }),

/***/ "./fonts/ProximaNovaRegular/ProximaNovaRegular.ttf":
/*!*********************************************************!*\
  !*** ./fonts/ProximaNovaRegular/ProximaNovaRegular.ttf ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/ProximaNovaRegular/ProximaNovaRegular.ttf");

/***/ }),

/***/ "./fonts/ProximaNovaRegular/ProximaNovaRegular.woff":
/*!**********************************************************!*\
  !*** ./fonts/ProximaNovaRegular/ProximaNovaRegular.woff ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/ProximaNovaRegular/ProximaNovaRegular.woff");

/***/ }),

/***/ "./img/bg/content-photo-bg.jpg":
/*!*************************************!*\
  !*** ./img/bg/content-photo-bg.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/bg/content-photo-bg.jpg");

/***/ }),

/***/ "./img/icons/logo.svg":
/*!****************************!*\
  !*** ./img/icons/logo.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/icons/logo.svg");

/***/ }),

/***/ "./img/icons/next.svg":
/*!****************************!*\
  !*** ./img/icons/next.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/icons/next.svg");

/***/ }),

/***/ "./img/icons/prev.svg":
/*!****************************!*\
  !*** ./img/icons/prev.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/icons/prev.svg");

/***/ }),

/***/ "./img/icons/usa-flag.png":
/*!********************************!*\
  !*** ./img/icons/usa-flag.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/icons/usa-flag.png");

/***/ }),

/***/ "./img/icons/x-icon.svg":
/*!******************************!*\
  !*** ./img/icons/x-icon.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/icons/x-icon.svg");

/***/ }),

/***/ "./img/posts/post-1.jpg":
/*!******************************!*\
  !*** ./img/posts/post-1.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/posts/post-1.jpg");

/***/ }),

/***/ "./img/posts/post-2.jpg":
/*!******************************!*\
  !*** ./img/posts/post-2.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/posts/post-2.jpg");

/***/ }),

/***/ "./img/posts/post-3.jpg":
/*!******************************!*\
  !*** ./img/posts/post-3.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/posts/post-3.jpg");

/***/ }),

/***/ "./img/posts/post-4.jpg":
/*!******************************!*\
  !*** ./img/posts/post-4.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/posts/post-4.jpg");

/***/ }),

/***/ "./img/products/board-1.png":
/*!**********************************!*\
  !*** ./img/products/board-1.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/products/board-1.png");

/***/ }),

/***/ "./img/products/board-2.png":
/*!**********************************!*\
  !*** ./img/products/board-2.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/products/board-2.png");

/***/ }),

/***/ "./img/products/board-3.png":
/*!**********************************!*\
  !*** ./img/products/board-3.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/products/board-3.png");

/***/ }),

/***/ "./img/products/board-4.png":
/*!**********************************!*\
  !*** ./img/products/board-4.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/products/board-4.png");

/***/ }),

/***/ "./img/products/board-5.png":
/*!**********************************!*\
  !*** ./img/products/board-5.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/products/board-5.png");

/***/ }),

/***/ "./img/slider/slide-1.jpg":
/*!********************************!*\
  !*** ./img/slider/slide-1.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/slider/slide-1.jpg");

/***/ }),

/***/ "./img/slider/slide-2.jpg":
/*!********************************!*\
  !*** ./img/slider/slide-2.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/slider/slide-2.jpg");

/***/ }),

/***/ "./img/slider/snowman.png":
/*!********************************!*\
  !*** ./img/slider/snowman.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/slider/snowman.png");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! owl.carousel */ "../node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sass/main.scss */ "./sass/main.scss");
/* harmony import */ var sass_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sass_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_reboot_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap-reboot.min.css */ "../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_reboot_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_reboot_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_grid_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap-grid.min.css */ "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_grid_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_grid_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! normalize.css/normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var img_icons_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! img/icons/logo.svg */ "./img/icons/logo.svg");
/* harmony import */ var img_products_board_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! img/products/board-1.png */ "./img/products/board-1.png");
/* harmony import */ var img_products_board_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! img/products/board-2.png */ "./img/products/board-2.png");
/* harmony import */ var img_products_board_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! img/products/board-3.png */ "./img/products/board-3.png");
/* harmony import */ var img_products_board_4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! img/products/board-4.png */ "./img/products/board-4.png");
/* harmony import */ var img_products_board_5_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! img/products/board-5.png */ "./img/products/board-5.png");
/* harmony import */ var img_posts_post_1_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! img/posts/post-1.jpg */ "./img/posts/post-1.jpg");
/* harmony import */ var img_posts_post_2_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! img/posts/post-2.jpg */ "./img/posts/post-2.jpg");
/* harmony import */ var img_posts_post_3_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! img/posts/post-3.jpg */ "./img/posts/post-3.jpg");
/* harmony import */ var img_posts_post_4_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! img/posts/post-4.jpg */ "./img/posts/post-4.jpg");
/* harmony import */ var img_icons_usa_flag_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! img/icons/usa-flag.png */ "./img/icons/usa-flag.png");
 //import 'owl.carousel/dist/assets/owl.carousel.css';

















jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(".slider").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(".slider-snowboards").owlCarousel({
    items: 3,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    nav: true,
    center: true,
    navText: ['', '']
  });
});

/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./sass/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./js/main.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./js/main.js */"./js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map