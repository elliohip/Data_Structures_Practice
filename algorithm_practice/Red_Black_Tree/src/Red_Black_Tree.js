const RBT_Node = require("./RBT_Node").default

const colors = {
    red: 1,
    black: 0
}

export default function Red_Black_Tree() {
    let component = {
        start: null,
        size: 0,
        /**
         * Different flags depending on if the tree needs to be altered through rotations
         */
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

            return temp_left;

        },
        /**
         * 
         * @param {RBT_Node} node 
         * @param {Object} data 
         * @returns 
         */
        find_help : function(node, data) {
            if (node == null || node.root == data) {
                return node;
            }

            if (node.compareTo(data) > 0) {
                return this.find_help(node.left, data)
            }
            else if (node.compareTo(data) < 0) {
                return this.find_help(node.right, data)
            }
            
        },
        find : function(data) {
            return this.find_help(this.start, data)
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
                this.insert_helper(this.start, data);
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
                let n = new RBT_Node(data, null, null, colors.red, null);
                this.size++;
                return n
            }
            else if (node.compareTo(data) < 0) {

                node.right = this.insert_helper(node.right, data);
                node.right.parent = node;
                if (node != this.start) {
                    if (node.right.color == colors.red && node.color == colors.red) {
                        red_red = true;
                    }
                }
            }
            else {
                node.left = this.insert_helper(node.left, data);
                node.left.parent = node;
                if (node != this.start) {
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
                node.right = this.right_rotation(node.right);
                node.right.parent = node

                node = this.left_rotation(node);
                node.color = colors.black;
                node.left.color = colors.red;
                this.right_left = false;

            }
            else if (this.left_right) {

                node.left = this.left_rotation(node.left);
                node.left.parent = node;
                

                node = this.right_rotation(node)
                node.color = colors.black;
                node.right.color = colors.red;
                this.left_right = false;

            }
            else if (this.left_left) {
                node = this.left_rotation(node);
                node.left.color = colors.red;
                node.color = black
            }
            if (red_red) {
                this.red_red_fixup(red_red, node, data)
            }

            return node
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
                        else if (node.right != null && node.right.color == colors.black) {
                            this.left_right = true;
                        }
                    }
                    else {
                        node.parent.right.color = colors.black
                        node.color = colors.black

                        if (node.parent != this.start) {
                            node.parent.color = colors.red
                        }
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
                    else {
                        node.parent.left.color = colors.black;
                        node.color = colors.black;

                        if (node.parent != this.start) {
                            node.parent.color = colors.red
                        }
                    }
                }
            }
        },
        /**
         * 
         * helper method to fix when there is a double black error, and the height of 
         * the black part of the tree will be altered
         * 
         * @param {RBT_Node} node 
         * @returns 
         */
        black_black_fixup : function(node) {
            if (node == this.start) {
                return;
            }

            let sibling = node.find_sibling();

            if (sibling == null) {
                this.black_black_fixup(node.parent)
            }
            else {
                if (sibling.color == colors.red) {
                    node.parent.color = colors.red
                    sibling.color = colors.black
                    if (sibling.is_left()) {
                        this.right_rotation(node.parent)
                    }
                    else {
                        this.left_rotation(node.parent)
                    }
                    this.black_black_fixup(node)
                }
                else {
                    if (sibling.left.color == colors.red || sibling.right.color == colors.red) {
                        if (sibling.left != null && sibling.left.color == colors.red) {
                            if (sibling.is_left()) {
                                sibling.left.color = sibling.color;
                                sibling.color = sibling.parent.color;
                                this.right_rotation(node);
                            }
                            else {
                                sibling.left.color = node.parent.color;
                                this.right_rotation(sibling);
                                this.left_rotation(node.parent);
                            }
                        }
                        else {
                            if (sibling.is_left()) {
                                sibling.right.color = node.parent.color;
                                this.left_rotation(sibling);
                                this.right_rotation(node.parent);
                            }
                            else {
                                sibling.right.color = sibling.color;
                                sibling.color = node.parent.color;
                                this.left_rotation(node.parent);
                            }
                        }
                        node.parent.color = colors.black;

                    }
                    else {
                        sibling.color = colors.red;
                        if (node.parent.color == colors.black) {
                            this.black_black_fixup(node.parent)
                        }
                        else {
                            node.parent.color = colors.black
                        }
                    }
                    
                }
                
            }




        },
        /**
         * 
         * @param {RBT_Node} node node to delete/find the replacement for
         * @returns {RBT_Node}
         */
        find_replacement : function(node) {
            if (node.right != null && node.left != null) {
                let current = node.right;
                while (node.left != null) {
                    current = current.left;
                }
                return current
                 
            }
            else if (node.left == null && node.right == null) {
                return null;
            }
            
            if (node.left != null && node.right == null) {
                return node.left
            }
            else {
                return node.right
            }
        },
        /**
         * 
         * @param {RBT_Node} node 
         */
        remove_helper : function (node) {
            let replacement = this.find_replacement(node)

            let main_parent = node.parent;
            

            let double_black = (node.color == colors.black && replacement.color == colors.black);
            
            if (replacement == null) {
                if (node == this.start) {
                    this.start = null;
                    this.size--;
                }
                else {
                    if (double_black) {

                        this.black_black_fixup(node)
                    }
                    else {
                        if (node.find_sibling() != null) {
                            let sibling = node.find_sibling();
                            sibling.color = colors.red;
                        }
                    }

                    if (node.is_left()) {
                        node.parent.left = null;
                    }
                    else {
                        node.parent.right = null;
                    }
                }
                node = null;
                return;
            }

            if (node.left == null || node.right == null) {
                if (node == this.start) {
                    node.root = replacement.root;
                    // let temp = replacement.right;

                    node.left = node.right;
                    node.right = null;

                    replacement = null;
                }
                else {
                    if (node.is_left()) {
                        main_parent.left = replacement;

                    }
                    else {
                        main_parent.right = replacement;
                    }

                    node = null;

                    replacement.parent = main_parent;

                    if (double_black) {
                        this.black_black_fixup(replacement)
                    }
                    else {
                        replacement.color = colors.black;
                    }
                }
                return;
            }

            let temp = replacement.root;
            replacement.root = node.root;
            node.root = temp;

            this.remove_helper(replacement);
        },
        /**
         * 
         * @param {*} data 
         * @returns 
         */
        remove : function(data) {
            if (this.start == null) {
                return 
            }

            let node = this.find(data);

            if (node.root != data) {
                alert("ERROR, data not found")
            }

            this.remove_helper(node);

        }
        
    }

    return component;
}