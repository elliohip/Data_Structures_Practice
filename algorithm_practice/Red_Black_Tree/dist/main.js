/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/RBT_Node.js":
/*!*************************!*\
  !*** ./src/RBT_Node.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RBT_Node)\n/* harmony export */ });\nclass RBT_Node {\n    /**\n     * \n     * @param {Object} ro root data of this node\n     * @param {RBT_Node} l left child of this node\n     * @param {RBT_Node} ri right child of this node\n     * @param {RBT_Node} p parent of this node\n     * @param {Number} c color of this node, represented as either T or F, stored in a global color object for the sake\n     * @param {Function} comp compare function, if null, initialized to handle numbers\n     */\n    constructor(ro = null, l = null, ri = null, c = null, p = null, comp = null) {\n\n        this.root = ro;\n        this.left = l;\n        this.right = ri;\n        this.color = c;\n        this.parent = p;\n        this.compare_to = comp;\n\n        if (comp == null) {\n            this.compare_to = function(other) {\n                if (other > this.root) {\n                    return -1;\n                }\n                else if (other < this.root) {\n                    return 1;\n                }\n                else {\n                    return 0;\n                }\n            }\n        }\n    }\n\n    /**\n     * \n     * @param {*} c \n     */\n    set_color(c) {\n        this.color = c;\n    }\n    is_left() {\n        if (this.parent.left == this) {\n            return true;\n        }\n        return false;\n    }\n    is_right() {\n        if (this.parent.right == this) {\n            return true;\n        }\n        return false;\n    }\n\n    find_sibling() {\n\n        if (this.parent == null) {\n            return null;\n        }\n\n        if (this.is_left()) {\n            return this.parent.right;\n        }\n        else {\n            return this.parent.left;\n        }\n    }\n    \n}\n\n//# sourceURL=webpack://red_black_tree/./src/RBT_Node.js?");

/***/ }),

/***/ "./src/Red_Black_Tree.js":
/*!*******************************!*\
  !*** ./src/Red_Black_Tree.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Red_Black_Tree)\n/* harmony export */ });\nconst RBT_Node = (__webpack_require__(/*! ./RBT_Node */ \"./src/RBT_Node.js\")[\"default\"])\n\nconst colors = {\n    red: 1,\n    black: 0\n}\n\nfunction Red_Black_Tree() {\n    let component = {\n        start: null,\n        size: 0,\n        /**\n         * Different flags depending on if the tree needs to be altered through rotations\n         */\n        right_right: false,\n        left_right: false,\n        left_left: false,\n        right_left: false,\n        /**\n         * \n         * @param {RBT_Node} node node to be rotated\n         * @returns {RBT_Node} node that has been rotated to the left\n         */\n        left_rotation: function(node) {\n            let temp_right = node.right;\n            let right_left = temp_right.left;\n            temp_right.left = node;\n            node.right = right_left;\n            node.parent = temp_right;\n\n            if (right_left != null) {\n                right_left.parent = node;\n            }\n\n            return temp_right;\n        },\n        /**\n         * \n         * @param {RBT_Node} node node to be rotated\n         * @returns {RBT_Node} node that has been rotated to the right\n         */\n        right_rotation: function(node) {\n            let temp_left = node.left;\n            let left_right = temp_left.right;\n            temp_left.right = node;\n            node.left = left_right;\n            node.parent = temp_left;\n\n            if (left_right != null) {\n                left_right = node;\n            }\n\n            return temp_left;\n\n        },\n        /**\n         * \n         * @param {RBT_Node} node \n         * @param {Object} data \n         * @returns \n         */\n        find_help : function(node, data) {\n            if (node == null || node.root == data) {\n                return node;\n            }\n\n            if (node.compareTo(data) > 0) {\n                return this.find_help(node.left, data)\n            }\n            else if (node.compareTo(data) < 0) {\n                return this.find_help(node.right, data)\n            }\n            \n        },\n        find : function(data) {\n            return this.find_help(this.start, data)\n        },\n        /**\n         * \n         * @param {Object} data data to insert\n         */\n        insert: function(data) {\n\n            if (this.start == null) {\n                this.start = new RBT_Node(data, null, null, colors.black)\n\n                this.size++;\n            }\n            else {\n                this.insert_helper(this.start, data);\n            }\n\n        },\n        /**\n         * \n         * @param {RBT_Node} node current node in the recursive function\n         * @param {Object} data data that is to be inserted in the red-black binary tree\n         * @returns {RBT_Node} Node objct that represents the root of the red black tree\n         */\n        insert_helper : function (node, data) {\n            let red_red = false;\n\n            if (node == null) {\n                let n = new RBT_Node(data, null, null, colors.red, null);\n                this.size++;\n                return n\n            }\n            else if (node.compareTo(data) < 0) {\n\n                node.right = this.insert_helper(node.right, data);\n                node.right.parent = node;\n                if (node != this.start) {\n                    if (node.right.color == colors.red && node.color == colors.red) {\n                        red_red = true;\n                    }\n                }\n            }\n            else {\n                node.left = this.insert_helper(node.left, data);\n                node.left.parent = node;\n                if (node != this.start) {\n                    if (node.left.color == colors.red && node.color == colors.red) {\n                        red_red = true;\n                    }\n                }\n            }\n\n            if (this.right_right) {\n                node = this.right_rotation(node);\n                node.color = colors.black;\n                node.right.color = colors.red;\n                this.right_right = false;\n\n            }\n            else if (this.right_left) {\n                node.right = this.right_rotation(node.right);\n                node.right.parent = node\n\n                node = this.left_rotation(node);\n                node.color = colors.black;\n                node.left.color = colors.red;\n                this.right_left = false;\n\n            }\n            else if (this.left_right) {\n\n                node.left = this.left_rotation(node.left);\n                node.left.parent = node;\n                \n\n                node = this.right_rotation(node)\n                node.color = colors.black;\n                node.right.color = colors.red;\n                this.left_right = false;\n\n            }\n            else if (this.left_left) {\n                node = this.left_rotation(node);\n                node.left.color = colors.red;\n                node.color = black\n            }\n            if (red_red) {\n                this.red_red_fixup(red_red, node, data)\n            }\n\n            return node\n        },\n        /**\n         * \n         * fixes the red_red conflict for when there is an issue of the parent and inserted node\n         * are both red\n         * \n         * @param {boolean} red_red \n         * @param {RBT_Node} node \n         * @param {Object} data \n         */\n        red_red_fixup : function(red_red, node, data) {\n            if (red_red) {\n                if (node.parent.left == node) {\n                    if (node.parent.right == null || node.parent.right.color == colors.black) {\n\n                        if (node.left != null && node.left.color == colors.red) {\n                            this.right_right = true;\n                        }\n                        else if (node.right != null && node.right.color == colors.black) {\n                            this.left_right = true;\n                        }\n                    }\n                    else {\n                        node.parent.right.color = colors.black\n                        node.color = colors.black\n\n                        if (node.parent != this.start) {\n                            node.parent.color = colors.red\n                        }\n                    }\n                }\n                else if (node.parent.right == node) {\n                    if (node.parent.left == null || node.parent.left.color == colors.black) {\n\n                        if (node.left != null && node.left.color == colors.red) {\n                            this.right_left = true;\n                        }\n                        else if (node.right != null && node.right.color == colors.black) {\n                            this.left_left = true;\n                        }\n                    \n                    }\n                    else {\n                        node.parent.left.color = colors.black;\n                        node.color = colors.black;\n\n                        if (node.parent != this.start) {\n                            node.parent.color = colors.red\n                        }\n                    }\n                }\n            }\n        },\n        /**\n         * \n         * helper method to fix when there is a double black error, and the height of \n         * the black part of the tree will be altered\n         * \n         * @param {RBT_Node} node \n         * @returns \n         */\n        black_black_fixup : function(node) {\n            if (node == this.start) {\n                return;\n            }\n\n            let sibling = node.find_sibling();\n\n            if (sibling == null) {\n                this.black_black_fixup(node.parent)\n            }\n            else {\n                if (sibling.color == colors.red) {\n                    node.parent.color = colors.red\n                    sibling.color = colors.black\n                    if (sibling.is_left()) {\n                        this.right_rotation(node.parent)\n                    }\n                    else {\n                        this.left_rotation(node.parent)\n                    }\n                    this.black_black_fixup(node)\n                }\n                else {\n                    if (sibling.left.color == colors.red || sibling.right.color == colors.red) {\n                        if (sibling.left != null && sibling.left.color == colors.red) {\n                            if (sibling.is_left()) {\n                                sibling.left.color = sibling.color;\n                                sibling.color = sibling.parent.color;\n                                this.right_rotation(node);\n                            }\n                            else {\n                                sibling.left.color = node.parent.color;\n                                this.right_rotation(sibling);\n                                this.left_rotation(node.parent);\n                            }\n                        }\n                        else {\n                            if (sibling.is_left()) {\n                                sibling.right.color = node.parent.color;\n                                this.left_rotation(sibling);\n                                this.right_rotation(node.parent);\n                            }\n                            else {\n                                sibling.right.color = sibling.color;\n                                sibling.color = node.parent.color;\n                                this.left_rotation(node.parent);\n                            }\n                        }\n                        node.parent.color = colors.black;\n\n                    }\n                    else {\n                        sibling.color = colors.red;\n                        if (node.parent.color == colors.black) {\n                            this.black_black_fixup(node.parent)\n                        }\n                        else {\n                            node.parent.color = colors.black\n                        }\n                    }\n                    \n                }\n                \n            }\n\n\n\n\n        },\n        /**\n         * \n         * @param {RBT_Node} node node to delete/find the replacement for\n         * @returns {RBT_Node}\n         */\n        find_replacement : function(node) {\n            if (node.right != null && node.left != null) {\n                let current = node.right;\n                while (node.left != null) {\n                    current = current.left;\n                }\n                return current\n                 \n            }\n            else if (node.left == null && node.right == null) {\n                return null;\n            }\n            \n            if (node.left != null && node.right == null) {\n                return node.left\n            }\n            else {\n                return node.right\n            }\n        },\n        /**\n         * \n         * @param {RBT_Node} node \n         */\n        remove_helper : function (node) {\n            let replacement = this.find_replacement(node)\n\n            let main_parent = node.parent;\n            \n\n            let double_black = (node.color == colors.black && replacement.color == colors.black);\n            \n            if (replacement == null) {\n                if (node == this.start) {\n                    this.start = null;\n                    this.size--;\n                }\n                else {\n                    if (double_black) {\n\n                        this.black_black_fixup(node)\n                    }\n                    else {\n                        if (node.find_sibling() != null) {\n                            let sibling = node.find_sibling();\n                            sibling.color = colors.red;\n                        }\n                    }\n\n                    if (node.is_left()) {\n                        node.parent.left = null;\n                    }\n                    else {\n                        node.parent.right = null;\n                    }\n                }\n                node = null;\n                return;\n            }\n\n            if (node.left == null || node.right == null) {\n                if (node == this.start) {\n                    node.root = replacement.root;\n                    // let temp = replacement.right;\n\n                    node.left = node.right;\n                    node.right = null;\n\n                    replacement = null;\n                }\n                else {\n                    if (node.is_left()) {\n                        main_parent.left = replacement;\n\n                    }\n                    else {\n                        main_parent.right = replacement;\n                    }\n\n                    node = null;\n\n                    replacement.parent = main_parent;\n\n                    if (double_black) {\n                        this.black_black_fixup(replacement)\n                    }\n                    else {\n                        replacement.color = colors.black;\n                    }\n                }\n                return;\n            }\n\n            let temp = replacement.root;\n            replacement.root = node.root;\n            node.root = temp;\n\n            this.remove_helper(replacement);\n        },\n        remove : function(data) {\n            if (this.start == null) {\n                return \n            }\n\n            let node = this.find(data);\n\n            \n        }\n        \n    }\n\n    return component;\n}\n\n//# sourceURL=webpack://red_black_tree/./src/Red_Black_Tree.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const RBT = __webpack_require__(/*! ./Red_Black_Tree.js */ \"./src/Red_Black_Tree.js\")\n\nconst prettyPrint = (__webpack_require__(/*! ./pretty_print.js */ \"./src/pretty_print.js\")[\"default\"])\n\n\n\nlet tree = RBT.default()\n\n\n\n\nlet create_numbers = function () {\n\n    let rand_nums = [];\n\n\n\n    for (let i = 0; i < 10; i++) {\n        let rand = Math.floor(Math.random() * 1000)\n        while (rand_nums.includes(rand) == true) {\n            rand = Math.floor(Math.random() * 1000)\n            \n        }\n        \n        tree.insert(rand)\n\n\n        rand_nums.push(rand)\n        \n    }\n\n    return rand_nums\n}\n\nlet rand_arr = create_numbers();\n\nprettyPrint(tree.start)\n\nconsole.log(tree)\n\n//# sourceURL=webpack://red_black_tree/./src/index.js?");

/***/ }),

/***/ "./src/pretty_print.js":
/*!*****************************!*\
  !*** ./src/pretty_print.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ prettyPrint)\n/* harmony export */ });\nfunction prettyPrint(node, prefix = \"\", isLeft = true) {\n    if (node == null) {\n      return;\n    }\n    if (node.right !== null) {\n      prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n    }\n    console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.root}`);\n    if (node.left !== null) {\n      prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n    }\n  };\n\n//# sourceURL=webpack://red_black_tree/./src/pretty_print.js?");

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