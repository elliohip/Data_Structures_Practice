const RBT_Node = require("./RBT_Node").default

const colors = require("./colors").colors

export default function Red_Black_Tree() {
    let component = {
        start: null,
        size: 0,
        right_right: false,
        left_right: false,
        left_left: false,
        right_left: false,
        /**
         * 
         * @param {RBT_Node} node node to be rotated
         * @returns {RBT_Node} node that has been rotated to the left
         */
        left_rotation: function(node) {
            let temp_right = node.right;
            let right_left = temp_right.left;
            temp_right.left = node;
            node.right = right_left;
            node.parent = temp_right;

            if (right_left != null) {
                right_left.parent = node;
            }
            return temp_right;
        },
        /**
         * 
         * @param {RBT_Node} node node to be rotated
         * @returns {RBT_Node} node that has been rotated to the right
         */
        right_rotation: function(node) {
            let temp_left = node.left;
            let left_right = temp_left.right;
            temp_left.right = node;
            node.left = left_right;
            node.parent = temp_left;

            if (left_right != null) {
                left_right = node;
            }
            return temp_right;

        },
        /**
         * 
         * @param {Object} data data to insert
         */
        insert: function(data) {

            if (this.start == null) {
                this.start = new RBT_Node(data, null, null, colors.black)

                this.size++;
            }
            else {
                this.start = this.insert_helper(this.start, data);
            }

        },
        /**
         * 
         * @param {RBT_Node} node current node in the recursive function
         * @param {Object} data data that is to be inserted in the red-black binary tree
         * @returns {RBT_Node} Node objct that represents the root of the red black tree
         */
        insert_helper : function (node, data) {
            let red_red = false;

            if (node == null) {
                node = new RBT_Node(data, null, null, colors.red, );
                this.size++;
            }
            else if (data > node.root) {

                node.right = insert_helper(root.right, data);
                node.right.parent = node;
                if (node != this.root) {
                    if (node.right.color == colors.red && node.color == colors.red) {
                        red_red = true;
                    }
                }
            }
            else {
                node.left = this.insert_helper(node.left, data);
                node.left.parent = node;
                if (node != this.root) {
                    if (node.left.color == colors.red && node.color == colors.red) {
                        red_red = true;
                    }
                }
            }

            if (this.right_right) {
                node = this.right_rotation(node);
                node.color = colors.black;
                node.right.color = colors.red;
                this.right_right = false;

            }
            else if (this.right_left) {
                // node.right = 
            }
            else if (this.left_right) {

            }
            else if (this.right_right) {

            }
            if (red_red) {
                this.red_red_fixup(red_red, node, data)
            }
            
        },
        /**
         * 
         * fixes the red_red conflict for when there is an issue of the parent and inserted node
         * are both red
         * 
         * @param {boolean} red_red 
         * @param {RBT_Node} node 
         * @param {Object} data 
         */
        red_red_fixup : function(red_red, node, data) {
            if (red_red) {
                if (node.parent.left == node) {
                    if (node.parent.right == null || node.parent.right.color == colors.black) {

                        if (node.left != null && node.left.color == colors.red) {
                            this.right_right = true;
                        }
                        if (node.right != null && node.right.color == colors.black) {
                            this.left_right = true;
                        }
                    }
                    if (node.parent.right.color == colors.red) {
                        
                    }
                }
                else if (node.parent.right == node) {
                    if (node.parent.left == null || node.parent.left.color == colors.black) {

                        if (node.left != null && node.left.color == colors.red) {
                            this.right_left = true;
                        }
                        else if (node.right != null && node.right.color == colors.black) {
                            this.left_left = true;
                        }
                    
                    }
                    if (node.parent.left.color == colors.red) {

                    }
                }
            }
        }
        
    }

    return component;
}