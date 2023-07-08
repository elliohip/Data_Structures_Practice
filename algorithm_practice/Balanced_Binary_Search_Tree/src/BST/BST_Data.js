/**
 * 
 * @param {Object} dat data to be incorporated
 * @param {Number} count 
 * @returns {Object}
 */
export default function BST_Data(dat, count) {
    let component = {
        data : dat,
        count : count,
        /**
         * 
         * compare funciton, can be altered if other function is required
         * 
         * @param {Object} other other object to be compared 
         */
        compareFn : function (other) {
            if (this.data > other.data) {
                return 1;
            }
            else if (this.data < other.data) {
                return -1;
            }
            else {
                return 0;
            }
        }
    }
    return component;
}