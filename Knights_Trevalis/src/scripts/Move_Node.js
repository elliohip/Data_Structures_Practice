import position from "./Position";

/**
 * main move node object for graph building
 */
export default class Move_Node {
    /**
     * 
     * @param {position} m position 
     * @param 
     */
    constructor(m) {

        

        this.position = m;
        
        this.down_left;
        this.up_left;
        this.left_down;
        this.left_up;
        this.up_right;
        this.right_down;
        this.right_up;
        this.down_right;

        this.score;
    }
    /**
     * creates available moves for this knight, checking if the position is unavailable
     */
    set_tree(b) {

        this.set_down_left();
        this.set_down_right();
        this.set_left_down();
        this.set_left_up();
        this.set_right_down();
        this.set_right_up();
        this.set_up_left();
        this.set_up_right();

        if (this.down_left.position != null) {
            this.down_left.position = this.down_left.position.to_board(b)
        }
        if ()
            this.down_right.position = this.down_right.position.to_board(b)

            this.left_down.position = this.left_down.position.to_board(b)

            this.left_up.position = this.left_up.position.to_board(b)

            this.right_down.position = this.right_down.position.to_board(b)

            this.right_up.position = this.right_up.position.to_board(b)

            this.up_left.position = this.up_left.position.to_board(b)

            this.up_right.position = this.up_right.position.to_board(b)
        

    }
    set_down_left(b) {
        if (this.position.next_pos(-1, -2) != null) {
            this.down_left = new Move_Node(this.position.next_pos(-1, -2));
            this.down_left.position = this.down_left.position.to_board(b)
        }
    }

    set_up_left(b) {
        if (this.position.next_pos(-1, 2) != null) {
            this.up_left = new Move_Node(this.position.next_pos(-1, 2));
        }
    }
    set_left_down(b) {
        if (this.position.next_pos(-2, -1) != null) {
            this.left_down = new Move_Node(this.position.next_pos(-2, -1));
        }
    }
    set_left_up(b) {
        if (this.position.next_pos(-2, 1) != null) {
            this.left_up = new Move_Node(this.position.next_pos(-2, 1));
        }
    }
    set_up_right() {
        if (this.position.next_pos(1, 2) != null) {
            this.up_right = new Move_Node(this.position.next_pos(1, 2));
        }
    }
    set_right_down() {
        if (this.position.next_pos(2, -1) != null) {
            this.right_down = new Move_Node(this.position.next_pos(2, -1));
        }
    }
    set_right_up() {
        if (this.position.next_pos(2, 1) != null) {
            this.right_up = new Move_Node(this.position.next_pos(2, 1));
        }
    }
    set_down_right() {
        if (this.position.next_pos(1, -2) != null) {
            this.down_right = new Move_Node(this.position.next_pos(1, -2));
        }
    }

}