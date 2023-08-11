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

/***/ "./src/BST/BSTNode.js":
/*!****************************!*\
  !*** ./src/BST/BSTNode.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BST_Node)\n/* harmony export */ });\n/* harmony import */ var _BST_Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BST_Data */ \"./src/BST/BST_Data.js\");\n\n\nfunction BST_Node(data, count) {\n    let component = {\n        root: (0,_BST_Data__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, count),\n        left: null,\n        right: null,\n        is_empty() {\n            if (this.root == null) {\n                return true;\n            }\n            if (this.left == null && this.right == null) {\n                return true;\n            }\n            \n            return false;\n        },\n        /**\n         * \n         * @param {Object} o BST_DATA object\n         * @returns \n         */\n        left_or_right : function(o) {\n            if (o.compareFn(this.root) > 0) {\n                return this.right;\n            }\n            else if (o.compareFn(this.root) < 0) {\n                return this.left;\n            }\n            else {\n                return this;\n            }\n        }\n    }\n\n    return component;\n}\n\n//# sourceURL=webpack://balanced_binary_search_tree/./src/BST/BSTNode.js?");

/***/ }),

/***/ "./src/BST/BST_Data.js":
/*!*****************************!*\
  !*** ./src/BST/BST_Data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BST_Data)\n/* harmony export */ });\n/**\n * \n * @param {Object} dat data to be incorporated\n * @param {Number} count \n * @returns {Object}\n */\nfunction BST_Data(dat, count) {\n    let component = {\n        data : dat,\n        count : count,\n        /**\n         * \n         * compare funciton, can be altered if other function is required\n         * \n         * @param {Object} other other object to be compared \n         */\n        compareFn : function (other) {\n            if (this.data > other.data) {\n                return 1;\n            }\n            else if (this.data < other.data) {\n                return -1;\n            }\n            else {\n                return 0;\n            }\n        }\n    }\n    return component;\n}\n\n//# sourceURL=webpack://balanced_binary_search_tree/./src/BST/BST_Data.js?");

/***/ }),

/***/ "./src/BST/Odin_visualisation/prettyprint.js":
/*!***************************************************!*\
  !*** ./src/BST/Odin_visualisation/prettyprint.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ prettyPrint)\n/* harmony export */ });\nfunction prettyPrint(node, prefix = \"\", isLeft = true) {\n    if (node === null) {\n      return;\n    }\n    if (node.right !== null) {\n      prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n    }\n    console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.root.data}`);\n    if (node.left !== null) {\n      prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n    }\n  };\n\n//# sourceURL=webpack://balanced_binary_search_tree/./src/BST/Odin_visualisation/prettyprint.js?");

/***/ }),

/***/ "./src/BST/Tree.js":
/*!*************************!*\
  !*** ./src/BST/Tree.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tree)\n/* harmony export */ });\n/* harmony import */ var _BSTNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BSTNode */ \"./src/BST/BSTNode.js\");\n/* harmony import */ var _BST_Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BST_Data */ \"./src/BST/BST_Data.js\");\n\n\n\n/**\n * \n * @returns {Object} Object for a general binary tree.  This is to say, an unbalanced binary tree.\n * This has the functionality to add, delete, and \n */\nfunction tree(){\n    \n    let component = {\n        root : null,\n        size : 0,\n        /**\n         * \n         * @param {Object} data \n         * @param {Object} node current node in recursive depth, first node should be root of this tree\n         * @param {Number} depth \n         * @returns \n         */\n        find : function(data, node, depth) {\n            // let data = BST_Data(dat, 0);\n            if (data.compareFn(node.root.data) < 0) {\n                this.find(data, node.left, depth + 1);\n            }\n            else if (data.compareFn(node.root.data) > 0) {\n                this.find(data, node.right, depth + 1)\n            }\n            else {\n                return node;\n            }\n        },\n        /**\n         * inserts a node with the following conditions :\n         * \n         * if left\n         * \n         * \n         * @param {Object} dat a piece of data that that will be added to the binary search tree\n         * @param {Object} node a node that represents the current node in the recursive function call\n         * @param {Number} depth a number that represents the recursive depth\n         */\n        insert : function(dat, node, depth) {\n\n            let data = (0,_BSTNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dat, 1)\n            \n\n            if (this.size == 0) {\n                this.root = data;\n                this.size++;\n                return\n            }\n\n            if (node.root.compareFn(data.root) == 0) {\n                node.root.count += 1\n                this.size++;\n                return;\n            }\n            else if (node == null) {\n                return;\n            }\n\n            \n                if (data.root.compareFn(node.root) < 0) {\n                    \n                    if (node.left == null) {\n                        node.left = data;\n                        this.size++;\n                        return\n                    }\n                    else {\n                        this.insert(dat, node.left, depth + 1);\n                    }\n                }\n                else if (data.root.compareFn(node.root) > 0) {\n                    if (node.right == null) {\n                        \n                        node.right = data;\n                        this.size++;\n                        return\n                    }\n                    else {\n                        this.insert(dat, node.right, depth + 1)\n                    }\n                    \n                }\n                else {\n                    node.root.count += 1;\n                    this.size++;\n                    return\n                }\n           \n        },\n        /**\n         * \n         * @param {Object} dat object that represents the value of the node to destroy\n         */\n        delete_data : function(dat) {\n            let node = this.find(dat)\n\n            if (node.root.count > 1) {\n                node.root.count -= 1\n                return\n            }\n\n            \n            if (node != null) {\n                if (dat != null) {\n                    let data = (0,_BST_Data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dat, 0)\n\n                    if (node.is_empty()) {\n                        node = null;\n                    }\n                    else if ((node.left != null && node.right != null)) {\n                        let temp = node.right;\n\n                        node = node.left;\n                        this.insert(temp.root, node, 0);\n                    }\n                    else if (node.left != null) {\n                        node = node.left\n                    }\n                    else if (node.right != null) {\n                        node = node.right\n                    }\n                    \n                }\n                else {\n                    console.log(\"cant find null value\");\n                }\n            }\n            else {\n                console.log(\"ERROR in Find\")\n                return \n            }\n                    \n        },\n        /**\n         * \n         * @param {*} node initial node, represents the\n         * @param {*} depth \n         * @param {Function} callback callback funciton to apply to the data within the node (note, not bst data, but the underlying data that it references)\n         */\n        inorder : function (node, depth, callback) {\n            if (node != null) {\n                this.inorder(node.left, depth + 1, callback);\n                callback(node.root);\n                this.inorder(node.right, depth + 1, callback)\n                return\n            }\n            else {\n                return\n            }\n\n        },\n        /**\n         * \n         * @param {*} node node for the recursive traversal\n         * @param {*} depth node for the depth of the recursive function\n         * @param {Function} callback function to apply to each element, which is the element that should be provided as a parameter to the callback Will be a BST Data Object\n         * @returns \n         */\n        preorder : function (node, depth, callback) {\n            if (node != null) {\n                callback(node.root);\n                this.preorder(node.left, depth + 1, callback);\n                this.preorder(node.right, depth + 1, callback);\n                return\n            }\n            else {\n                return\n            }\n\n        },\n        /**\n         * \n         * @param {*} node node for the recursive traversal\n         * @param {*} depth \n         * @param {*} callback \n         * @returns \n         */\n        postorder : function (node, depth, callback) {\n            if (node != null) {\n                this.postorder(node.left, depth + 1, callback);\n                this.postorder(node.right, depth + 1, callback)\n                callback(node.root);\n                return\n            }\n            else {\n                return\n            }\n\n        },\n        /**\n         * \n         * @param {BST_Node} node \n         * @param {*} height \n         */\n        height : function(node, height) {\n            if (node != null) {\n                let left_height = height(node.left, height + 1);\n                let right_height = height(node.right, height + 1);\n                return Math.max([left_height, right_height])\n            }\n            else {\n                return height;\n            }\n        },\n        /**\n         * \n         * TODO Handle repeating values\n         * \n         * Returns a node with left and right pointers to a balanced binary search tree from a\n         * sorted array of values\n         * \n         * @param {[*]} arr Sorted array of data \n         * @param {*} start \n         * @param {*} end \n         * @param {*} depth \n         */\n        balanced_binary_tree : function(arr, start, end, depth) {\n\n            \n\n            if (start > end) {\n                return null;\n            }\n\n            \n            let middle = parseInt((start + end) / 2);\n\n            let node = (0,_BSTNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr[middle], 1);\n\n            node.left = this.balanced_binary_tree(arr, start, middle - 1);\n            node.right = this.balanced_binary_tree(arr, middle + 1, end);\n\n            \n\n            \n            return node\n            \n\n        },\n        /**\n         * \n         * @param {Function} callback callback function with the argument being the node that is to be\n         * Affected\n         * @param {} node node for the recursive\n         */\n        bredth_first_search : function(callback, node) {\n            let queue = [];\n\n            queue.push(node)\n\n            let current_node;\n\n            while (queue.length != 0) {\n                \n                current_node = queue.shift();\n                callback(current_node);\n\n                if (current_node.left != null) {\n                    queue.push(current_node.left);\n                }\n                if (current_node.right != null) {\n                    queue.push(current_node.right);\n                }\n\n            }\n\n        },\n        get_height : function(node, h) {\n            if (node == null) {\n                return h\n            }\n            if (node.left != null) {\n                return this.get_height(node.left, h + 1);\n            }\n            else if (node.right != null) {\n                return this.get_height(node.right, h + 1);\n            }\n            else if (node.left != null && node.right != null) {\n                return Math.max(this.get_height(node.left), this.get_height(node.right));\n            }\n            \n        }\n        ,\n        is_balanced : function() {\n            return Math.abs(this.get_height(this.root.left) - this.get_height(this.root.right)) <= 1;\n        },\n        /**\n         * \n         * @returns {[]} List that stores the array version of this tree\n         */\n        tree_to_list_BFS : function() {\n            let list = [];\n\n            const callback = function(current) {\n                list.push(current);\n            }\n\n            this.bredth_first_search(callback, this.root);\n\n            return list;\n        }\n\n        \n\n    }\n\n    return component;\n}\n\n//# sourceURL=webpack://balanced_binary_search_tree/./src/BST/Tree.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BST_Odin_visualisation_prettyprint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BST/Odin_visualisation/prettyprint */ \"./src/BST/Odin_visualisation/prettyprint.js\");\n/* harmony import */ var _BST_Tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BST/Tree */ \"./src/BST/Tree.js\");\n\n\n\n\n\nlet test_tree = (0,_BST_Tree__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n\n\nlet create_numbers = function () {\n\n    let rand_nums = [];\n\n\n\n    for (let i = 0; i < 10; i++) {\n        let rand = Math.floor(Math.random() * 1000)\n        while (rand_nums.includes(rand) == true) {\n            rand = Math.floor(Math.random() * 1000)\n            \n        }\n        \n\n\n        rand_nums.push(rand)\n        \n    }\n\n    return rand_nums\n}\n\nlet compare = function(c, o) {\n    if (c > o) {\n        return 1;\n    }\n    if (c < o) {\n        return -1;\n    }\n    else {\n        return 0;\n    }\n}\n\n//let arr = create_numbers();\n\nlet arr = [20, 40,5,29,81,3,4,22, 1,0];\n\narr.sort(compare)\n\nconsole.log(arr);\n\ntest_tree.root = test_tree.balanced_binary_tree(arr, 0, arr.length - 1, test_tree.root, 0);\n\n(0,_BST_Odin_visualisation_prettyprint__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(test_tree.root);\n\nconsole.log(test_tree.tree_to_list_BFS());\n\n\n\n//test_tree.bredth_first_search(function(element) {\n  //  console.log(element);\n//}, test_tree.root);\n\n\n//# sourceURL=webpack://balanced_binary_search_tree/./src/index.js?");

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