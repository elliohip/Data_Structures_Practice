import Board from "./Board";
import position from "./Position";

/**
 * 
 * returns the shortest path to a spot on the chess board
 * 
 * @param {position} start 
 * @param {position} end 
 * @returns {position[]} array of positions to target
 */
export default function knight_moves(start, end) {

    let board = Board(start.x, start.y);
    

    board.add_board_and_knight();

    let posit = new position(end.x,end.y)
    let pos = board.get_piece(posit.x, posit.y)

    let move_l = [];

    board.knight_move_tree().move_to(pos, board.pieces, move_l);

    return move_l
}