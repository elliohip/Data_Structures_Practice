export default class RBT_Node {
    /**
     * 
     * @param {Object} ro root data of this node
     * @param {RBT_Node} l left child of this node
     * @param {RBT_Node} ri right child of this node
     * @param {RBT_Node} p parent of this node
     * @param {Number} c color of this node, represented as either T or F, stored in a global color object for the sake
     *  of IDE intellisense
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
}