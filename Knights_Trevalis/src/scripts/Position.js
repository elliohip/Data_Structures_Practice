
/**
 * 
 * @param {Number} i x index
 * @param {Number} j y index 
 */
export default function position(i, j) {
    let component = {
        x : i - 1,
        y : j - 1,
        /**
         * 
         * @param {Number} delt_x x value change
         * @param {Number} delt_y y value change
         * @return {Object} position object that represents the next possible move
         */
        next_pos : function (delt_x,delt_y) {
            return {
                x : this.x + delt_x,
                y : this.y + delt_y
            }
        }
    }

    return component
}