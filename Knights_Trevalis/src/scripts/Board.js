import Knight from "./Knight";
import Move_Node from "./Move_Node";
import position from "./Position";

/**
 * Board factory function
 * @param {Number} x 
 * @param {Number} y 
 * @returns Main board object
 */
export default function Board(x, y){

    let component = {
        pieces: [],
        knight : Knight(x, y),
        make_pieces : function () {
            let columns = [];
            for (let i = 0; i < 8; i++) {
                let column = [];

                for (let j = 0; j < 8; j++) {
                    column[j] = new position(i, j);
                }
                columns[i] = column; 
            }

            console.log(columns);
            this.pieces = columns
        },
        /**
         * 
         * @param {Number} x 
         * @param {Nuumber} y 
         * @returns {position} position for this board piece
         */
        get_piece : function(x, y) {
            return this.pieces[x][y]
        },
        /**
         * helper function to add the knight to the board by setting the knight's current board
         */
        add_board_and_knight : function() {
            this.make_pieces();

            this.knight.board = this.pieces;

            this.knight
        },
        /**
         * 
         * @param {Object} p position object, must have an x and y component
         */
        knight_moves_to: function(p) {

            let total_moves = [];
            this.knight.set_moves();

            if (p == null || p == this.knight.position) {
                return []
            }
            else {
                let tree = this.knight_move_tree()

                tree.move_graph(this.pieces);

                total_moves = tree.move_to(p);
                
            }

        },
        knight_moves_helper : function(p, moves, depth) {
            
        }, 
        knight_move_tree : function() {
            let its = this.pieces;
            let component = {
                start: new Move_Node(this.knight.position.to_board(its)),
                /**
                 * meant to be fired after the move tree has been created, will
                 * find the list of moves that end in the parameter position object
                 * 
                 * @param {position} p 
                 * @param {position[][]} b board of elements as a 2D array
                 */
                move_to : function (p, b) {
                    let queue = [];
                    queue.push(this.start);

                    while (queue.length > 0) {
                        let node = queue.shift();
                    }
                },
                /**
                 * 
                 * @param {Move_Node} item 
                 * @param {Move_Node[]} list 
                 * @param {Move_Node} curr
                 */
                add_helper : function(item, list, curr) {

                    // !(curr.position.is_equal(item.position)) &&
                    if (item != null && item.position.discovered == false) {
                        list.push(item)
                        item.position.set_discovered(true)
                    }
                }
                
                
        }
            
            return component
        },
        
    }

    return component
}