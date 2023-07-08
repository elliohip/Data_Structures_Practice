import BST_Data from "./BST_Data";

export default function BST_Node(data, count) {
    let component = {
        root: BST_Data(data, count),
        left: null,
        right: null,
        is_empty() {
            if (this.root == null) {
                return true;
            }
            if (this.left == null && this.right == null) {
                return true;
            }
            
            return false;
        },
        /**
         * 
         * @param {Object} o BST_DATA object
         * @returns 
         */
        left_or_right : function(o) {
            if (o.compareFn(this.root) > 0) {
                return this.right;
            }
            else if (o.compareFn(this.root) < 0) {
                return this.left;
            }
            else {
                return this;
            }
        }
    }

    return component;
}