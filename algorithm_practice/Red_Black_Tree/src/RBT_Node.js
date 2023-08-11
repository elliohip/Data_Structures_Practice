export default class RBT_Node {
    /**
     * 
     * @param {Object} ro root data of this node
     * @param {RBT_Node} l left child of this node
     * @param {RBT_Node} ri right child of this node
     * @param {RBT_Node} p parent of this node
     * @param {Number} c color of this node, represented as either T or F, stored in a global color object for the sake
     * @param {Function} comp compare function, if null, initialized to handle numbers
     */
    constructor(ro = null, l = null, ri = null, c = null, p = null) {

        this.root = ro;
        this.left = l;
        this.right = ri;
        this.color = c;
        this.parent = p;
        
    }

    /**
     * 
     * @param {*} c 
     */
    set_color(c) {
        this.color = c;
    }
    is_left() {
        if (this.parent.left == this) {
            return true;
        }
        return false;
    }
    is_right() {
        if (this.parent.right == this) {
            return true;
        }
        return false;
    }

    find_sibling() {

        if (this.parent == null) {
            return null;
        }

        if (this.is_left()) {
            return this.parent.right;
        }
        else {
            return this.parent.left;
        }
    }
    
}