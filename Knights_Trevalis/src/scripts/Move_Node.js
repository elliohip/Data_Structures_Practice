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

        this.position = b[this.position.x][this.position.y];
        this.set_down_left(b);
        this.set_down_right(b);
        this.set_left_down(b);
        this.set_left_up(b);
        this.set_right_down(b);
        this.set_right_up(b);
        this.set_up_left(b);
        this.set_up_right(b);

        
        

    }
    set_down_left(b) {
        if (this.position.next_pos(-1, -2) != null) {
            let pos = this.position.next_pos(-1, -2);
            this.down_left = new Move_Node(pos.to_board(b));
            
        }
    }

    set_up_left(b) {
        if (this.position.next_pos(-1, 2) != null) {
            let pos = this.position.next_pos(-1, 2);
            this.up_left = new Move_Node(pos.to_board(b));
        }
    }
    set_left_down(b) {
        if (this.position.next_pos(-2, -1) != null) {
            let pos = this.position.next_pos(-2, -1);
            this.left_down = new Move_Node(pos.to_board(b));
            
        }
    }
    set_left_up(b) {
        if (this.position.next_pos(-2, 1) != null) {
            let pos = this.position.next_pos(-2, 1);
            this.left_up = new Move_Node(pos.to_board(b));
            
        }
    }
    set_up_right(b) {
        if (this.position.next_pos(1, 2) != null) {
            let pos = this.position.next_pos(1, 2)
            this.up_right = new Move_Node(pos.to_board(b));
        }
    }
    set_right_down(b) {
        if (this.position.next_pos(2, -1) != null) {
            let pos = this.position.next_pos(2, -1);
            this.right_down = new Move_Node(pos.to_board(b));
        }
    }
    set_right_up(b) {
        if (this.position.next_pos(2, 1) != null) {
            let pos = this.position.next_pos(2, 1);
            this.right_up = new Move_Node(pos.to_board(b));
        }
    }
    set_down_right(b) {
        if (this.position.next_pos(1, -2) != null) {
            let pos = this.position.next_pos(1, -2);
            this.down_right = new Move_Node(pos.to_board(b));
        }
    }
    /**
     * 
     * @returns {Move_Node[]}
     */
    to_node_list() {
        let list = []

        this.add_to_list(this.down_left, list);
        this.add_to_list(this.down_right, list);
        this.add_to_list(this.left_down, list);
        this.add_to_list(this.left_up, list);
        this.add_to_list(this.right_down, list);
        this.add_to_list(this.right_up, list);
        this.add_to_list(this.up_left, list);
        this.add_to_list(this.up_right, list);

        return list;
        
    }

    /**
     * 
     * @param {Move_Node} data 
     * @param {Move_Node[]} list 
     */
    add_to_list(data, list) {
        if (data != null) {
            list.push(data);
        }
    }

}