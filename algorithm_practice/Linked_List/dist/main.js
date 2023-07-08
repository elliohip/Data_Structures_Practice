/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Linked_List.js":
/*!****************************!*\
  !*** ./src/Linked_List.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Linked_List)\n/* harmony export */ });\n\n/**\n * \n * @param {*} dat \n * @param {Object} nex \n * @returns \n */\nfunction list_node(dat, nex) {\n    let component = {\n        data : dat,\n        next : nex,\n        set_next : function(n) {\n            this.next = n;\n        },\n        set_data : function(d) {\n            this.data = d;\n        }\n    }\n\n    if (dat != null) {\n        component.data = dat\n    }\n    if (nex != null) {\n        component.next = nex\n    }\n    \n    return component;\n} \n\n/**\n * \n * @param {Object} st \n */\nfunction Linked_List(st) {\n    let component = {\n        length : 0,\n        start : list_node(st, null),\n        end : list_node(st, null),\n        /**\n         * \n         * @param {Object}} item item that represents a Node, this will have a current value and a next value\n         */\n        push : function(it) {\n            let item = list_node(it);\n\n            if (this.length == 0) {\n                this.start = item;\n                this.end = item;\n                this.length++;\n            }\n            else {\n                this.end.next = item;\n                this.end = item;\n                this.length++;\n            }\n            \n        },\n        /**\n         * \n         * @param {Object} it \n         * @param {Number} index index from between [0 -> (length - 1)]\n         */\n        add_item_at : function(it, index) {\n            let item = node(it)\n            if (this.length == 0) {\n                this.start = item;\n                this.end = item;\n                this.length++;\n            }\n            else {\n                let i = 0;\n\n                \n\n                let current = this.start;\n                \n                while (i < index - 1) {\n                    current = current.next\n                    i++;\n                }\n\n                if (index == 0) {\n                    item.next = this.start;\n                    this.start = item;\n\n                }\n                else {\n                    item.next = current.next;\n                    current.next = item;\n\n                }\n\n                \n                \n                \n            }\n        },\n        /**\n         * \n         * @param {Object} item Node with other elements, adds these elements to this list\n         * @param {Number} index Index to add the list to\n         * \n         * TODO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n         */\n        add_list_at: function(item, index) {\n\n            if (item.next == null) {\n                this.add_item_at(item, index)\n            }\n\n            let i = 0;\n\n                \n\n                let current = this.start;\n                \n                while (i < index) {\n                    current = current.next\n                }\n\n                let inner_current = item;\n                if (item.next!= null){\n                    inner_current = item.next;\n                    while (inner_current.next != null) {\n                        inner_current = inner_current.next;\n                    }\n                }\n\n                if (index == 0) {\n                    inner_current.next = this.start;\n                    this.start = item;\n\n                }\n                else {\n                    inner_current = item.next;\n                    \n                }\n\n        },\n        /**\n         * \n         * @returns {}\n         */\n        pop: function() {\n            let ret_node = this.end;\n            let current = this.start;\n            while(this.end != current.next) {\n                current = current.next\n            }\n            this.end = current;\n            this.end.next = null;\n\n            this.length--;\n\n            \n            return ret_node;\n        },\n        /**\n         * \n         * @param {} nd Node that will be found \n         * @returns {Number}\n         */\n        find: function(nd) {\n            let node = list_node(nd);\n            let current = this.start;\n            let index = 0;\n\n            while(current != node) {\n                current = current.next\n                index++;\n                if (current.data == node.data) {\n                    return index;\n                }\n                if (current.next == null) {\n                    break;\n                }\n            }\n            return -1;\n        },\n        /**\n         * \n         * @param {Number} index index of the data to grab\n         * @returns {Object}\n         */\n        at : function(index) {\n            let current = this.start;\n            if (index == 0) {\n                return current;\n            }\n            if (index == this.length - 1) {\n                return this.end;\n            }\n            let i = 0;\n            while (i < index) {\n                current = current.next\n                i++;\n            }\n            return current;\n        }\n    }\n\n    return component;\n\n}\n\n//# sourceURL=webpack://linked_list/./src/Linked_List.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Linked_List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Linked_List */ \"./src/Linked_List.js\");\n\n\n\nlet test_arr = [762, 200, 983, 803, 880, 892, 224, 46, 72, 368]\n\n\nlet test1 = 50;\nlet test2 = 68;\nlet test3 = 90;\n\nlet tests = []\n\nlet list = (0,_Linked_List__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\nlet create_numbers = function () {\n\n    let rand_nums = [];\n\n    \n\n    for (let i = 0; i < 10; i++) {\n        let rand = Math.floor(Math.random() * 1000)\n        while (rand_nums.includes(rand) == true) {\n            rand = Math.floor(Math.random() * 1000)\n        }\n        rand_nums.push(rand)\n        list.push(rand)\n        if (i == test1) {\n            tests.append[rand_nums[i]]\n        } else if (i == test2) {\n            tests.append[rand_nums[i]]\n        }\n        else if (i == test3) {\n            tests.append[rand_nums[i]]\n        }\n    }\n\n    return rand_nums\n}\n\n// let nums = create_numbers()\n\n\n// console.log(nums)\n\nconsole.log(list)\n\n\nfor (let i = 0; i < test_arr.length; i++) {\n    list.push(test_arr[i])\n}\n\nconsole.assert(list.at(3).data == 803);\n\n//# sourceURL=webpack://linked_list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;