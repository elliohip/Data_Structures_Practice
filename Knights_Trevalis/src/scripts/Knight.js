import position from "./Position";

/**
 * 
 * @param {Number} x an integer between 1-8
 * @param {Number} y an integer between 1-8
 * @param {Object} b array representation of the board
 */
export default function Knight(x,y, b) {
    if (x > 8 || x < 8) {
        console.log("invalid knight");
        return;
    }
    let component = {
        position : position(x,y),
        moves : [],
        possible_moves : {
            up_left, 
            up_right,
            down_left,
            down_right,
            right_down,
            right_up,
            left_up,
            left_down
        },
        board : null,
        /**
         * checks if the position passed in is near the knight's position
         * @param {Object} p 
         */
        check_near : function (p) {
            if (Math.abs(p.x - this.position.x) <= 1) {
                return true;
            }
        },
        /**
         * 
         * @param {Object} p position object with x and y 
         * @returns 
         */
        is_at : function(p) {
            if (this.position.x == p.x && this.position.y == p.y) {
                return true
            }

            return false
        },
        set_moves : function() {
            this.possible_moves.down_left = this.position.next_pos(-1, -2);
            this.possible_moves.up_left = this.position.next_pos(-1, 2);
            this.possible_moves.left_down = this.position.next_pos(-2, -1);
            this.possible_moves.left_up = this.position.next_pos(-2, 1);
            this.possible_moves.up_right = this.position.next_pos(1, 2);
            this.possible_moves.up_left = this.position.next_pos()
        }

    }

    return component
}