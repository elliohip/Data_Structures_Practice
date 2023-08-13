import position from "./Position";
/*
let rand = {
    this.down_left = new Move_Node(this.position.next_pos(-1, -2));
        this.up_left = new Move_Node(this.position.next_pos(-1, 2));
        this.left_down = new Move_Node(this.position.next_pos(-2, -1));
        this.left_up = new Move_Node(this.position.next_pos(-2, 1));
        this.up_right = new Move_Node(this.position.next_pos(1, 2));
        this.right_down = new Move_Node(this.position.next_pos(2, -1));
        this.right_up = new Move_Node(this.position.next_pos(2, 1));
        this.down_right = new Move_Node(this.position.next_pos(1, -2));
}
*/


/**
 * 
 */
export default class Move_Node {
    /**
     * 
     * @param {position} m position 
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
    set_tree() {

        this.set_down_left();
        this.set_down_right();
        this.set_left_down();
        this.set_left_up();
        this.set_right_down();
        this.set_right_up();
        this.set_up_left();
        this.set_up_right();

    }
    set_down_left() {
        if (this.position.next_pos(-1, -2) != null) {
            this.down_left = new Move_Node(this.position.next_pos(-1, -2));
        }
    }

    set_up_left() {
        if (this.position.next_pos(-1, 2) != null) {
            this.up_left = new Move_Node(this.position.next_pos(-1, 2));
        }
    }
    set_left_down() {
        if (this.position.next_pos(-2, -1) != null) {
            this.left_down = new Move_Node(this.position.next_pos(-2, -1));
        }
    }
    set_left_up() {
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