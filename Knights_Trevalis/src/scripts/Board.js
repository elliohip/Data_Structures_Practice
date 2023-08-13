import Knight from "./Knight";
import Move_Node from "./Move_Node";
import position from "./Position";

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
            let component = {
                start: new Move_Node(this.knight.position),
                /**
                 * builds the move graph
                 */
                move_graph : function(b) {
                    this.start.set_tree();
                    let list = []
                    

                    this.move_helper(b, this.start.down_left, list);
                    this.move_helper(b, this.start.down_right, list);
                    this.move_helper(b, this.start.up_right, list);
                    this.move_helper(b, this.start.left_up, list);
                    this.move_helper(b, this.start.left_down, list);
                    this.move_helper(b, this.start.up_left, list);
                    this.move_helper(b, this.start.right_down, list);
                    this.move_helper(b, this.start.right_up, list);
                },
                /**
                 * @param {[]} b list of board positions
                 * @param {[*]} list 
                 * @param {Move_Node} current 
                 */
                move_helper : function(b, current, list) {

                    if (current == null) {
                        return
                    }

                    if (list.includes(b[current.position.x][current.position.y], 0)) {
                        return;
                    }
                
                    if (list.includes(b[this.start.position.x][this.start.position.y], 0)) {
                        return;
                    }

                    else {
                        current.set_tree();
                        list.push(b[current.position.x][current.position.y]);
                        this.move_helper(b, current.down_left, list);
                        this.move_helper(b, current.down_right, list);
                        this.move_helper(b, current.up_right, list);
                        this.move_helper(b, current.left_up, list);
                        this.move_helper(b, current.left_down, list);
                        this.move_helper(b, current.up_left, list);
                        this.move_helper(b, current.right_down, list);
                        this.move_helper(b, current.right_up, list);
                    }
                },
                /**
                 * meant to be fired after the move tree has been created, will
                 * find the list of moves that end in the parameter position object
                 * 
                 * @param {position} p 
                 */
                move_to : function (p) {

                    let list = [];

                    if (this.start.position == p) {
                        return this.start;
                    }
                    else {
                        this.move_to_helper(p, this.start.down_left, list)
                        this.move_to_helper(p, this.start.down_right, list)
                        this.move_to_helper(p, this.start.left_down, list)
                        this.move_to_helper(p, this.start.left_up, list)
                        this.move_to_helper(p, this.start.right_down, list)
                        this.move_to_helper(p, this.start.right_up, list)
                        this.move_to_helper(p, this.start.up_left, list)
                        this.move_to_helper(p, this.start.up_right, list)
                    }

                },
                /**
                 * 
                 * @param {position} p 
                 * @param {[]} list 
                 */
                move_to_helper : function (p, current, list) {

                    if (current.position == p) {
                        return {
                            l : list,
                            list_length : list.length
                        }
                    }
                    if (current == null) {
                        return
                    }

                    if (list.includes(current)) {
                        return
                    }

                }
                
                
            }
            return component
        },
        
    }

    return component
}