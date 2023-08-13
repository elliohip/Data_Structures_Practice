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
                    column[j] = new position(j, i);
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
                 * @param {position[][]} b board of elements as a 2D array
                 */
                move_to : function (p, b) {

                    let list = [];
                    let pos = b

                    if (this.start.position == p) {
                        list.push(this.start.position)
                        return list;
                    }
                    else {
                        let ret_list = [];
                        list.push(this.start);
                        
                        this.move_to_helper(p, list, b, ret_list);

                        return ret_list
                    }

                },
                /**
                 * 
                 * @param {position} p 
                 * @param {Move_Node[]} list 
                 * @param {position[][]} b
                 * @param {position[]} move_list of shortest path, as the knight discovers it
                 */
                move_to_helper : function (p, list, b, move_list) {

                    

                    if (list.length == 0) {
                        return;
                    }

                    let current = list.shift();

                    

                    if (b[current.position.x][current.position.y].discovered) {
                        return;
                    }

                    if (current.position.x == p.x && current.position.y == p.y) {

                        let items = [];
                    
                        for (let i = 0; i < list.length; i++) {
                            let item = list.shift();
                            items.push(item)
                            move_list.push(item)
                        }
                        return items
                        
                    }
                    
                    
                    current.set_tree(b);
                    
                    b[current.position.x][current.position.y].set_discovered(true);

                    this.add_helper(current.down_left, list, b);
                    this.add_helper(current.down_right, list, b);
                    this.add_helper(current.left_down, list, b);
                    this.add_helper(current.left_up, list, b);
                    this.add_helper(current.right_down, list, b);
                    this.add_helper(current.right_up, list, b);
                    this.add_helper(current.up_left, list, b);
                    this.add_helper(current.up_right, list, b);

                    this.move_to_helper(p, list, b, move_list)

                        // let ret_list = this.find_best_path(moves_list);
                        // return ret_list;
                        
                    
                },
                /**
                 * 
                 * @param {[][]} moves 
                 * @returns {[]} list of moves for the best path
                 */
                find_best_path : function(moves) {
                    let best = null;
                    for (let i = 0; i < moves.length; i++) {
                        if (moves[i] != null && (best == null || moves[i].length < best.length)) {
                            best = moves[i];
                        }
                    }
                    if (best == null) {
                        console.log("ERROR, NO MOVE LIST");
                        return null;
                    }
                    return best;
                },
                /**
                 * 
                 * @param {Move_Node} item 
                 * @param {Move_Node[]} list 
                 * @param {position[][]} b board
                 */
                add_helper : function(item, list, b) {

                if (item != null) {
                    list.push(item)
                    item.position.to_board(b).set_discovered(true)
                }
            }
                
                
        }
            
            return component
        },
        
    }

    return component
}