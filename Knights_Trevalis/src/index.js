import Board from "./scripts/Board";
import position from "./scripts/Position";

let board = Board(0,0);
board.add_board_and_knight();

let posit = new position(5,4)
let pos = board.get_piece(posit.x, posit.y)

let move_l = [];

let moves = board.knight_move_tree().move_to(pos, board.pieces, move_l);


const knight_moves_inefficient = function () {
    let new_list = [];
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] != pos) {
            if (new_list.includes(moves[i])) {
                console.log("ERROR, LIST DUPES")
            }
            new_list.push(moves[i]);
            
        } else {
            new_list.push(moves[i]);
            break;
        }

    }
    return new_list;
}

const find_moves = function(b) {

    for (let i = 0; i < b.length; i++) {
        let x = b[i];
        for (let j = 0; j < x; j++) {
            let piece = x[j]
            if (piece.discovered) {

            }

        }
    }
}

// let other_moves = knight_moves_inefficient()



console.log(move_l);