import Board from "./scripts/Board";

let board = Board(0,0);
board.add_board_and_knight();

board.knight_move_tree().move_graph();