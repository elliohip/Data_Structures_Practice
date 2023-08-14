import Move_Node from "./Move_Node";
import position from "./Position";
import Knight_Moves from "./Possible_Knight_Moves";

/**
 * knight factory
 * 
 * @param {Number} x an integer between 0-7
 * @param {Number} y an integer between 0-7
 * @param {[]} b array representation of the board, as a 2d array
 */
export default function Knight(x,y, b) {
    if (x >= 8 || x < 0) {
        console.log("invalid knight");
        return;
    }
    let component = {
        position : new position(x,y,b),
        moves : [],
        possible_moves : new Move_Node(new position(x,y)),
        board : null,
        /**
         * checks if the position passed in is near the knight's position
         * @param {position} p 
         */
        check_near : function (p) {
            if (Math.abs(p.x - this.position.x) <= 1) {
                return true;
            }
        },
        /**
         * 
         * @param {position} p position object with x and y 
         * @returns 
         */
        is_at : function(p) {
            if (this.position.x == p.x && this.position.y == p.y) {
                return true
            }

            return false
        }
    }

    return component
}