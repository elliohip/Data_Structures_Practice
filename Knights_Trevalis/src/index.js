import Board from "./scripts/Board";
import position from "./scripts/Position";

let board = Board(0,0);
board.add_board_and_knight();

let posit = new position(5,4)
let pos = board.get_piece(posit.x, posit.y)
let moves = board.knight_move_tree().move_to(pos, board.pieces);


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

let other_moves = knight_moves_inefficient()



console.log(moves);