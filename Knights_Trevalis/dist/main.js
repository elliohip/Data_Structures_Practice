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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Board */ \"./src/scripts/Board.js\");\n/* harmony import */ var _scripts_Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Position */ \"./src/scripts/Position.js\");\n\n\n\nlet board = (0,_scripts_Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0,0);\nboard.add_board_and_knight();\n\nlet posit = new _scripts_Position__WEBPACK_IMPORTED_MODULE_1__[\"default\"](5,4)\nlet pos = board.get_piece(posit.x, posit.y)\nlet moves = board.knight_move_tree().move_to(pos, board.pieces);\n\n\nconst knight_moves_inefficient = function () {\n    let new_list = [];\n    for (let i = 0; i < moves.length; i++) {\n        if (moves[i] != pos) {\n            if (new_list.includes(moves[i])) {\n                console.log(\"ERROR, LIST DUPES\")\n            }\n            new_list.push(moves[i]);\n            \n        } else {\n            new_list.push(moves[i]);\n            break;\n        }\n\n    }\n    return new_list;\n}\n\n// let other_moves = knight_moves_inefficient()\n\n\n\nconsole.log(moves);\n\n//# sourceURL=webpack://knights_trevalis/./src/index.js?");

/***/ }),

/***/ "./src/scripts/Board.js":
/*!******************************!*\
  !*** ./src/scripts/Board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _Knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Knight */ \"./src/scripts/Knight.js\");\n/* harmony import */ var _Move_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Move_Node */ \"./src/scripts/Move_Node.js\");\n/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Position */ \"./src/scripts/Position.js\");\n\n\n\n\n/**\n * Board factory function\n * @param {Number} x \n * @param {Number} y \n * @returns Main board object\n */\nfunction Board(x, y){\n\n    let component = {\n        pieces: [],\n        knight : (0,_Knight__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x, y),\n        make_pieces : function () {\n            let columns = [];\n            for (let i = 0; i < 8; i++) {\n                let column = [];\n\n                for (let j = 0; j < 8; j++) {\n                    column[j] = new _Position__WEBPACK_IMPORTED_MODULE_2__[\"default\"](i, j);\n                }\n                columns[i] = column; \n            }\n\n            console.log(columns);\n            this.pieces = columns\n        },\n        /**\n         * \n         * @param {Number} x \n         * @param {Nuumber} y \n         * @returns {position} position for this board piece\n         */\n        get_piece : function(x, y) {\n            return this.pieces[x][y]\n        },\n        /**\n         * helper function to add the knight to the board by setting the knight's current board\n         */\n        add_board_and_knight : function() {\n            this.make_pieces();\n\n            this.knight.board = this.pieces;\n\n            this.knight\n        },\n        /**\n         * \n         * @param {Object} p position object, must have an x and y component\n         */\n        knight_moves_to: function(p) {\n\n            let total_moves = [];\n            this.knight.set_moves();\n\n            if (p == null || p == this.knight.position) {\n                return []\n            }\n            else {\n                let tree = this.knight_move_tree()\n\n                tree.move_graph(this.pieces);\n\n                total_moves = tree.move_to(p);\n                \n            }\n\n        },\n        knight_moves_helper : function(p, moves, depth) {\n            \n        }, \n        knight_move_tree : function() {\n            let its = this.pieces;\n            let component = {\n                start: new _Move_Node__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.knight.position.to_board(its)),\n                /**\n                 * meant to be fired after the move tree has been created, will\n                 * find the list of moves that end in the parameter position object\n                 * \n                 * @param {position} p \n                 * @param {position[][]} b board of elements as a 2D array\n                 */\n                move_to : function (p, b) {\n                    let queue = [];\n                    queue.push(this.start);\n\n                    while (queue.length > 0) {\n                        let node = queue.shift();\n                    }\n                },\n                /**\n                 * \n                 * @param {Move_Node} item \n                 * @param {Move_Node[]} list \n                 * @param {Move_Node} curr\n                 */\n                add_helper : function(item, list, curr) {\n\n                    // !(curr.position.is_equal(item.position)) &&\n                    if (item != null && item.position.discovered == false) {\n                        list.push(item)\n                        item.position.set_discovered(true)\n                    }\n                }\n                \n                \n        }\n            \n            return component\n        },\n        \n    }\n\n    return component\n}\n\n//# sourceURL=webpack://knights_trevalis/./src/scripts/Board.js?");

/***/ }),

/***/ "./src/scripts/Knight.js":
/*!*******************************!*\
  !*** ./src/scripts/Knight.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Knight)\n/* harmony export */ });\n/* harmony import */ var _Move_Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Move_Node */ \"./src/scripts/Move_Node.js\");\n/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Position */ \"./src/scripts/Position.js\");\n/* harmony import */ var _Possible_Knight_Moves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Possible_Knight_Moves */ \"./src/scripts/Possible_Knight_Moves.js\");\n\n\n\n\n/**\n * knight factory\n * \n * @param {Number} x an integer between 0-7\n * @param {Number} y an integer between 0-7\n * @param {[]} b array representation of the board, as a 2d array\n */\nfunction Knight(x,y, b) {\n    if (x >= 8 || x < 0) {\n        console.log(\"invalid knight\");\n        return;\n    }\n    let component = {\n        position : new _Position__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x,y,b),\n        moves : [],\n        possible_moves : new _Move_Node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](new _Position__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x,y)),\n        board : null,\n        /**\n         * checks if the position passed in is near the knight's position\n         * @param {position} p \n         */\n        check_near : function (p) {\n            if (Math.abs(p.x - this.position.x) <= 1) {\n                return true;\n            }\n        },\n        /**\n         * \n         * @param {position} p position object with x and y \n         * @returns \n         */\n        is_at : function(p) {\n            if (this.position.x == p.x && this.position.y == p.y) {\n                return true\n            }\n\n            return false\n        }\n    }\n\n    return component\n}\n\n//# sourceURL=webpack://knights_trevalis/./src/scripts/Knight.js?");

/***/ }),

/***/ "./src/scripts/Move_Node.js":
/*!**********************************!*\
  !*** ./src/scripts/Move_Node.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Move_Node)\n/* harmony export */ });\n/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Position */ \"./src/scripts/Position.js\");\n\n\n/**\n * main move node object for graph building\n */\nclass Move_Node {\n    /**\n     * \n     * @param {position} m position \n     * @param \n     */\n    constructor(m) {\n\n        \n\n        this.position = m;\n        \n        this.down_left;\n        this.up_left;\n        this.left_down;\n        this.left_up;\n        this.up_right;\n        this.right_down;\n        this.right_up;\n        this.down_right;\n\n        this.score;\n    }\n    /**\n     * creates available moves for this knight, checking if the position is unavailable\n     */\n    set_tree(b) {\n\n        this.position = b[this.position.x][this.position.y];\n        this.set_down_left(b);\n        this.set_down_right(b);\n        this.set_left_down(b);\n        this.set_left_up(b);\n        this.set_right_down(b);\n        this.set_right_up(b);\n        this.set_up_left(b);\n        this.set_up_right(b);\n\n        \n        \n\n    }\n    set_down_left(b) {\n        if (this.position.next_pos(-1, -2) != null) {\n            let pos = this.position.next_pos(-1, -2);\n            this.down_left = new Move_Node(pos.to_board(b));\n            \n        }\n    }\n\n    set_up_left(b) {\n        if (this.position.next_pos(-1, 2) != null) {\n            let pos = this.position.next_pos(-1, 2);\n            this.up_left = new Move_Node(pos.to_board(b));\n        }\n    }\n    set_left_down(b) {\n        if (this.position.next_pos(-2, -1) != null) {\n            let pos = this.position.next_pos(-2, -1);\n            this.left_down = new Move_Node(pos.to_board(b));\n            \n        }\n    }\n    set_left_up(b) {\n        if (this.position.next_pos(-2, 1) != null) {\n            let pos = this.position.next_pos(-2, 1);\n            this.left_up = new Move_Node(pos.to_board(b));\n            \n        }\n    }\n    set_up_right(b) {\n        if (this.position.next_pos(1, 2) != null) {\n            let pos = this.position.next_pos(1, 2)\n            this.up_right = new Move_Node(pos.to_board(b));\n        }\n    }\n    set_right_down(b) {\n        if (this.position.next_pos(2, -1) != null) {\n            let pos = this.position.next_pos(2, -1);\n            this.right_down = new Move_Node(pos.to_board(b));\n        }\n    }\n    set_right_up(b) {\n        if (this.position.next_pos(2, 1) != null) {\n            let pos = this.position.next_pos(2, 1);\n            this.right_up = new Move_Node(pos.to_board(b));\n        }\n    }\n    set_down_right(b) {\n        if (this.position.next_pos(1, -2) != null) {\n            let pos = this.position.next_pos(1, -2);\n            this.down_right = new Move_Node(pos.to_board(b));\n        }\n    }\n\n    to_node_list() {\n        let list = []\n\n        this.add_to_list(this.down_left, list);\n        this.add_to_list(this.down_right, list);\n        this.add_to_list(this.left_down, list);\n        this.add_to_list(this.left_up, list);\n        this.add_to_list(this.right_down, list);\n        this.add_to_list(this.right_up, list);\n        this.add_to_list(this.up_left, list);\n        this.add_to_list(this.up_right, list);\n\n        return list;\n        \n    }\n\n    /**\n     * \n     * @param {Move_Node} data \n     * @param {Move_Node[]} list \n     */\n    add_to_list(data, list) {\n        if (data != null) {\n            list.push(data);\n        }\n    }\n\n}\n\n//# sourceURL=webpack://knights_trevalis/./src/scripts/Move_Node.js?");

/***/ }),

/***/ "./src/scripts/Position.js":
/*!*********************************!*\
  !*** ./src/scripts/Position.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ position)\n/* harmony export */ });\n\n/**\n * \n * @param {Number} i x index from 0-7\n * @param {Number} j y index from 0-7\n */\nclass position {\n    /**\n     * \n     * @param {Number} i \n     * @param {Number} j \n     */\n    constructor(i, j) {\n        this.x = i\n        this.y = j\n        this.discovered = false;\n    }\n    /**\n     * \n     * @param {Boolean} b \n     */\n    set_discovered(b) {\n        this.discovered = b;\n    }\n\n    /**\n     * \n     * @param {Number} delt_x x value change\n     * @param {Number} delt_y y value change\n     * @return {position} position object that represents the next possible move\n     */\n    next_pos (delt_x,delt_y, b) {\n\n        if ((this.x + delt_x >= 8 || this.x + delt_x < 0) || (this.y + delt_y >= 8 || this.y + delt_y < 0)) {\n            console.log(\"not valid move\")\n            return null;\n        }\n\n        let next_x = this.x + delt_x;\n        let next_y = this.y + delt_y;\n\n        return new position(next_x, next_y);\n    }\n    /**\n     * \n     * @param {position[][]} b grid of position elements in a board\n     * @returns \n     */\n    to_board(b) {\n        return b[this.x][this.y]\n    }\n\n    is_equal(o) {\n        if (o.x == this.x && o.y == this.y) {\n            return true\n        }\n        return false\n    }\n}\n\n    \n    \n\n\n//# sourceURL=webpack://knights_trevalis/./src/scripts/Position.js?");

/***/ }),

/***/ "./src/scripts/Possible_Knight_Moves.js":
/*!**********************************************!*\
  !*** ./src/scripts/Possible_Knight_Moves.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Knight_Moves)\n/* harmony export */ });\n/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Position */ \"./src/scripts/Position.js\");\n\n\nclass Knight_Moves {\n    /**\n     * \n     * @param {Number} x index between 0-7\n     * @param {Number} y index between 0-7\n     */\n    constructor(x,y) {\n        \n        this.position = new _Position__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x,y);\n\n        this.up_left; \n        this.up_right;\n        this.down_left;\n        this.down_right;\n        this.right_down;\n        this.right_up;\n        this.left_up;\n        this.left_down;\n        \n    }\n\n    set_moves() {\n        this.down_left = this.position.next_pos(-1, -2);\n        this.up_left = this.position.next_pos(-1, 2);\n        this.left_down = this.position.next_pos(-2, -1);\n        this.left_up = this.position.next_pos(-2, 1);\n        this.up_right = this.position.next_pos(1, 2);\n        this.right_down = this.position.next_pos(2, -1);\n        this.right_up = this.position.next_pos(2, 1);\n        this.down_right = this.position.next_pos(1, -2);\n    }\n\n    set_position(x,y) {\n        this.position = new _Position__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x,y);\n    }\n}\n\n//# sourceURL=webpack://knights_trevalis/./src/scripts/Possible_Knight_Moves.js?");

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