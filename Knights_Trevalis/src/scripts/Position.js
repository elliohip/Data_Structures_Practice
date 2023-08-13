
/**
 * 
 * @param {Number} i x index from 0-7
 * @param {Number} j y index from 0-7
 */
export default class position {
    /**
     * 
     * @param {Number} i 
     * @param {Number} j 
     */
    constructor(i, j) {
        this.x = i
        this.y = j
    }
    
    /**
     * 
     * @param {Number} delt_x x value change
     * @param {Number} delt_y y value change
     * @return {Object} position object that represents the next possible move
     */
    next_pos (delt_x,delt_y) {

        if ((this.x + delt_x >= 8 || this.x + delt_x < 0) || (this.y + delt_y >= 8 || this.y + delt_y < 0)) {
            console.log("not valid move")
            return null;
        }

        let next_x = this.x + delt_x;
        let next_y = this.y + delt_y;

        return new position(next_x, next_y);
    }
    
}

    
    
