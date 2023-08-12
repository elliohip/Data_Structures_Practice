import Knight from "./Knight";
import Move from "./Move"

export default function Board(x, y){

    let component = {
        pieces: [],
        knight : Knight(x, y),
        make_pieces : function () {
            let columns = [];
            for (let i = 0; i < 8; i++) {
                let column = [];

                for (let j = 0; j < 8; j++) {
                    column[j] = new Move()
                }
                columns[i] = column; 
            }

            this.pieces = columns
        },
        add_knight : function() {
            this.make_pieces();

            this.knight.board = this.pieces;

            this.knight.possible_moves.up_left = 
        },
        /**
         * 
         * @param {Object} p position object, must have an x and y component
         */
        knight_moves_to: function(p) {

            let total_moves = [];

            if (p == null || p == this.knight.position) {
                return 
            }
            else {
                this.knight_moves_helper(p, total_moves, 0)
            }

        },
        knight_moves_helper : function(p, moves, depth) {
            
            
        }
    }
}