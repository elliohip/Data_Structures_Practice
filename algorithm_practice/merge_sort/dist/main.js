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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_js_merge_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts.js/merge_sort */ \"./src/scripts.js/merge_sort.js\");\n\n\n\nlet create_numbers = function () {\n\n    let rand_nums = [];\n\n    \n\n    for (let i = 0; i < 100; i++) {\n        let rand = Math.floor(Math.random() * 1000)\n        while (rand_nums.includes(rand) == true) {\n            rand = Math.floor(Math.random() * 1000)\n        }\n        rand_nums.push(rand)\n\n    }\n\n    return rand_nums\n}\n\n\nvar example_list = create_numbers()\n\nvar main = function() {\n    console.log(example_list)\n    let example_list2 = (0,_scripts_js_merge_sort__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(example_list, 0);\n    temp_test(example_list, example_list2)\n    console.log(example_list2);\n    \n}\n\nmain()\n\n/**\n * \n * @param {[]} arr \n * @param {[]} sorted_arr \n */\nfunction temp_test(arr, sorted_arr) {\n    let largest;\n    let large_ind = 0;\n    largest = sorted_arr[large_ind];\n    for (let i = 0, j = 0; i < arr.length; i++, j++) {\n        if (!sorted_arr.includes(arr[i])) {\n            console.log(\"ERROR\")\n        }\n        if (sorted_arr[i] > largest) {\n            largest = sorted_arr[i];\n            \n        }\n        else {\n            console.log(\"ERROR\");\n        }\n    }\n}\n\n//# sourceURL=webpack://merge_sort/./src/index.js?");

/***/ }),

/***/ "./src/scripts.js/merge_sort.js":
/*!**************************************!*\
  !*** ./src/scripts.js/merge_sort.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ merge_sort)\n/* harmony export */ });\n/**\n * \n * @param {Number} num \n * @returns {Number} number object that represents greater, less, and equal to\n */\nNumber.prototype.compare_to = function(num) {\n    if (this > num) {\n        return 1;\n    }\n    else if (this < num) {\n        return -1;\n    }\n    else {\n        return 0;\n    }\n}\n\n/**\n * \n * @param {Object[]} items Array of items, must have a built in compare_to(<obj>) method for each\n * element\n * @param {Number} depth Depth of the recursive function call\n * @returns {Object[]} Sorted list of absteact objects\n */\nfunction merge_sort(items, depth) {\n    \n    if (items.length > 1) {\n        let middle = Math.ceil((items.length) / 2)\n\n        let left = items.slice(0, middle)\n        let right = items.slice(middle, items.length)\n\n        let left_sorted = merge_sort(left, depth + 1)\n        let right_sorted = merge_sort(right, depth + 1)\n\n        if (depth <= 1) {\n            console.log(depth)\n        }\n\n        return merge(left_sorted, right_sorted, depth)\n    }\n    else {\n        return items;\n    }\n    \n}\n\n\n\n/**\n * \n * @param {Number[]} left Left portion of the array\n * @param {Number[]} right Right portion of the array, can sometimes be\n *      one smaller than the other array\n * @param {Number} depth the depth of this function call\n * @returns {Number[]} array of the two other arrays that is sorted by using a built in comparator\n * that the object must have.  For the sake of error, this script includes a built in comparator\n * for the Number prototype\n */\nfunction merge(left, right, depth){\n\n    if (left.length == 0 || right.length == 0) {\n        return;\n    }\n\n    if (left.length == 1 && right.length == 1) {\n        switch(left[0].compare_to(right[0])) {\n            case 1:\n                return [right[0], left[0]]; \n            break;\n            case -1: \n            return [left[0], right[0]];\n            break;\n            case 0:\n                return [left[0], right[0]];\n                break;\n\n        }\n    }\n\n    let new_array = [];\n\n    if (depth == 1) {\n        console.log(depth)\n    }\n    \n    for (let i = 0, j = 0; new_array.length < (left.length) + (right.length);) {\n\n        \n        if (left[i] == null || right[j] == null) {\n//            console.log(\"\")\n        }\n        let check_greater_equal = left[i].compare_to(right[j]);\n\n\n            if (check_greater_equal == 1) {\n\n                \n                if (j < right.length - 1) {\n                    new_array.push(right[j])\n                    j++;\n                }\n                else if (j == right.length - 1) {\n                    if (right[j].compare_to(new_array[new_array.length - 1]) >= 0)\n                        new_array.push(right[j])\n\n                    new_array.push(left[i])\n                    i++;\n                    //j++;\n                }\n                \n            }\n\n            else if (check_greater_equal ==  -1){\n                \n                \n                if (i < left.length - 1){\n                    new_array.push(left[i])\n                    i++;\n                }\n                else if (i == left.length - 1){\n                    if (left[i].compare_to(new_array[new_array.length -1]) > 0){\n                        new_array.push(left[i])\n                    }\n                    \n                    new_array.push(right[j])\n                    j++;\n                    //i++;\n                }\n                \n                \n                \n            }\n\n            else if (check_greater_equal == 0) {\n                \n                new_array.push(left[i]);\n                new_array.push(right[j]);\n\n                i++;\n\n                j++;\n                \n\n                \n            }\n\n            \n    }\n\n\n\n    if (depth < 2) {\n\n        console.log(\" \")\n\n        for (let i = 0; i < left.length; i++) {\n            if (i < right.length) {\n                if (new_array.includes(right[i]) == false) {\n//                    console.log(\"missing value\")\n                }\n            }\n            if (new_array.includes(left[i]) == false) {\n//                console.log(\"missing value\")\n            }\n\n        }\n\n    }\n\nreturn new_array\n}\n\n//# sourceURL=webpack://merge_sort/./src/scripts.js/merge_sort.js?");

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