import position from "./Position";

export default class Knight_Moves {
    /**
     * 
     * @param {Number} x index between 0-7
     * @param {Number} y index between 0-7
     */
    constructor(x,y) {
        
        this.position = new position(x,y);

        this.up_left; 
        this.up_right;
        this.down_left;
        this.down_right;
        this.right_down;
        this.right_up;
        this.left_up;
        this.left_down;
        
    }

    set_moves() {
        this.down_left = this.position.next_pos(-1, -2);
        this.up_left = this.position.next_pos(-1, 2);
        this.left_down = this.position.next_pos(-2, -1);
        this.left_up = this.position.next_pos(-2, 1);
        this.up_right = this.position.next_pos(1, 2);
        this.right_down = this.position.next_pos(2, -1);
        this.right_up = this.position.next_pos(2, 1);
        this.down_right = this.position.next_pos(1, -2);
    }

    set_position(x,y) {
        this.position = new position(x,y);
    }
}