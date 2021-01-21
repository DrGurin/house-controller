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

/***/ "./src/assets/js/accordeon.js":
/*!************************************!*\
  !*** ./src/assets/js/accordeon.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let buttons = document.getElementsByClassName(\"burger__wrapper__button\");\nlet accordions = document.getElementsByClassName(\"accordion\");\nlet pannels = document.getElementsByClassName(\"accordion__panel\");\n\nfor (let i = 0; i < buttons.length; i++) {\n  buttons[i].addEventListener(\"click\", function () {\n    this.classList.toggle(\"open\");\n    accordions[i].classList.toggle(\"active\");\n    let panel = pannels[i];\n    if (panel.style.maxHeight) {\n      panel.style.maxHeight = null;\n    } else {\n      panel.style.maxHeight = panel.scrollHeight + \"px\";\n    }\n    console.log(pannels[i]);\n  });\n}\n\n\n//# sourceURL=webpack:///./src/assets/js/accordeon.js?");

/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let arr = __webpack_require__(/*! ./../../data/data.json */ \"./src/data/data.json\")\r\n// INITING CONNECTION TO SOCKET AT FIRST\r\nfunction updateWsStatus(msg) {\r\n  document.getElementById(\"wsStatus\").innerHTML = msg;\r\n  return true;\r\n}\r\nfunction initWebSocket() {\r\n  // let buttons = document.getElementsByClassName(\"burger__wrapper__button\");\r\n  // let accordions = document.getElementsByClassName(\"accordion\");\r\n  // let pannels = document.getElementsByClassName(\"accordion__panel\");\r\n  // buttons[0].click();\r\n  // accordions[0].classList.toggle(\"active\");\r\n  // pannels[0].style.maxHeight = pannels[0].scrollHeight + \"px\";\r\n  if (\"WebSocket\" in window) {\r\n    console.log(\"WebSocket is supported by your Browser! Initing connection\");\r\n    updateWsStatus(\"Initializing Websocket...\");\r\n    \r\n    // from another ip \r\n    // const WSURI = `ws://192.168.0.109/ws`;\r\n\r\n    // for local usage \r\n    const WSURI = `ws://192.168.4.1/ws`;\r\n\r\n    let ws = new WebSocket(WSURI);\r\n    ws.onopen = function () {\r\n      ws.send(\"Connection succesfull\");\r\n      console.log(\"Sending PING on opening connection\");\r\n      updateWsStatus(\"Opening Websocket...\");\r\n    };\r\n    ws.onmessage = function (evt) {\r\n      document.getElementById(\"wsStatus\").classList.toggle(\"success\");\r\n      var received_msg = JSON.parse(evt.data);\r\n      console.log(`Getting PONG: ${received_msg}`);\r\n      document.getElementById(\"inside\").innerHTML = received_msg.inside;\r\n      document.getElementById(\"inh\").innerHTML = received_msg.inh;\r\n      document.getElementById(\"outside\").innerHTML = received_msg.outside;\r\n      document.getElementById(\"outh\").innerHTML = received_msg.outh;\r\n      document.getElementById(\"atm\").innerHTML = received_msg.atm;\r\n      // console.log(\"GIgit\", arr);\r\n      updateWsStatus(\"Connected to Websocket successfully &#128513;\");\r\n      showContent(true);\r\n    };\r\n    ws.onclose = function () {\r\n      document.getElementById(\"wsStatus\").classList.toggle(\"error\");\r\n      console.log(\"Connection has been closed.\");\r\n      updateWsStatus(\"Connection has been closed.\");\r\n      showContent(false);\r\n    };\r\n    ws.onerror = function (event) {\r\n      document.getElementById(\"wsStatus\").classList.toggle(\"error\");\r\n      console.error(`Error: ${event}`);\r\n      updateWsStatus(`Error: ${event}`);\r\n      showContent(false);\r\n    };\r\n  } else {\r\n    console.log(\"WebSocket NOT supported by your Browser!\");\r\n    updateWsStatus(\"WebSocket NOT supported by your Browser!\");\r\n    document.getElementById(\"wsStatus\").classList.toggle(\"error\");\r\n    showContent(false);\r\n  }\r\n}\r\n// initWebSocket();\r\nwindow.addEventListener(\"load\", initWebSocket, false);\r\n// INITING CONNECTION TO SOCKET AT FIRST\r\n\r\nfunction showContent(argument) {\r\n  if (argument) {\r\n    document.getElementById(\"loader\").classList.add(\"--unactivated\");\r\n    document.getElementById(\"viewWrapper\").classList.add(\"--active\");\r\n  } else {\r\n    document.getElementById(\"loader\").classList.remove(\"--unactivated\");\r\n    document.getElementById(\"viewWrapper\").classList.remove(\"--active\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/data/data.json":
/*!****************************!*\
  !*** ./src/data/data.json ***!
  \****************************/
/*! exports provided: inside, inh, outside, outh, atm, outsc, insc, flowsc, powersc, dailysc, outsfb, insfb, flowsfb, powersfb, dailysfb, hws, tank, pres, vsc, vsfb, vhws, vheat, vtank, vpool, pump, pumpt, pumpgb, scr, sfbr, hwsr, hr, tr, pr, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"inside\\\":22,\\\"inh\\\":60,\\\"outside\\\":10,\\\"outh\\\":60,\\\"atm\\\":743,\\\"outsc\\\":68,\\\"insc\\\":20,\\\"flowsc\\\":455,\\\"powersc\\\":5.6,\\\"dailysc\\\":10.2,\\\"outsfb\\\":50,\\\"insfb\\\":20,\\\"flowsfb\\\":432,\\\"powersfb\\\":5.6,\\\"dailysfb\\\":45,\\\"hws\\\":75.5,\\\"tank\\\":55.2,\\\"pres\\\":1.6,\\\"vsc\\\":1,\\\"vsfb\\\":1,\\\"vhws\\\":0,\\\"vheat\\\":1,\\\"vtank\\\":0,\\\"vpool\\\":1,\\\"pump\\\":1,\\\"pumpt\\\":1,\\\"pumpgb\\\":1,\\\"scr\\\":80,\\\"sfbr\\\":80,\\\"hwsr\\\":50,\\\"hr\\\":60,\\\"tr\\\":50,\\\"pr\\\":80}\");\n\n//# sourceURL=webpack:///./src/data/data.json?");

/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi ./src/assets/js/accordeon.js ./src/assets/js/app.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/drgurin/Documents/Projects/house-controll/src/assets/js/accordeon.js */\"./src/assets/js/accordeon.js\");\nmodule.exports = __webpack_require__(/*! /Users/drgurin/Documents/Projects/house-controll/src/assets/js/app.js */\"./src/assets/js/app.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/accordeon.js_./src/assets/js/app.js?");

/***/ })

/******/ });