import BST_Node from "./BSTNode";
import BST_Data from "./BST_Data";

export default function tree(){
    
    let component = {
        root : null,
        size : 0,
        /**
         * 
         * @param {Object} data 
         * @param {Object} node current node in recursive depth, first node should be root of this tree
         * @param {Number} depth 
         * @returns 
         */
        find : function(data, node, depth) {
            // let data = BST_Data(dat, 0);
            if (data.compareFn(node.root.data) < 0) {
                this.find(data, node.left, depth + 1);
            }
            else if (data.compareFn(node.root.data) > 0) {
                this.find(data, node.right, depth + 1)
            }
            else {
                return node;
            }
        },
        /**
         * inserts a node with the following conditions :
         * 
         * if left
         * 
         * 
         * @param {Object} dat a piece of data that that will be added to the binary search tree
         * @param {Object} node a node that represents the current node in the recursive function call
         * @param {Number} depth a number that represents the recursive depth
         */
        insert : function(dat, node, depth) {

            let data = BST_Node(dat, 1)
            

            if (this.size == 0) {
                this.root = data;
                this.size++;
                return
            }

            if (node.root.compareFn(data.root) == 0) {
                node.root.count += 1
                this.size++;
                return;
            }
            else if (node == null) {
                return;
            }

            
                if (data.root.compareFn(node.root) < 0) {
                    
                    if (node.left == null) {
                        
                        node.left = data;
                        this.size++;
                        return
                    }
                    else {
                        this.insert(dat, node.left, depth + 1);
                    }
                }
                else if (data.root.compareFn(node.root) > 0) {
                    if (node.right == null) {
                        
                        node.right = data;
                        this.size++;
                        return
                    }
                    else {
                        this.insert(dat, node.right, depth + 1)
                    }
                    
                }
                else {
                    node.root.count += 1;
                    this.size++;
                    return
                }
           
        },
        /**
         * 
         * @param {Object} dat object that represents the value of the node to destroy
         */
        delete_data : function(dat) {
            let node = this.find(dat)

            if (node.root.count > 1) {
                node.root.count -= 1
                return
            }

            
            if (node != null) {
                if (dat != null) {
                    let data = BST_Data(dat, 0)

                    if (node.is_empty()) {
                        node = null;
                    }
                    else if ((node.left != null && node.right != null)) {
                        let temp = node.right;

                        node = node.left;
                        this.insert(temp.root, node, 0);
                    }
                    else if (node.left != null) {
                        node = node.left
                    }
                    else if (node.right != null) {
                        node = node.right
                    }
                    
                }
                else {
                    console.log("cant find null value");
                }
            }
            else {
                console.log("ERROR in Find")
                return 
            }
                    
        },
        /**
         * 
         * @param {*} node initial node, represents the
         * @param {*} depth 
         * @param {Function} callback callback funciton to apply to the data within the node (note, not bst data, but the underlying data that it references)
         */
        inorder : function (node, depth, callback) {
            if (node != null) {
                this.inorder(node.left, depth + 1, callback);
                callback(node.root);
                this.inorder(node.right, depth + 1, callback)
                return
            }
            else {
                return
            }

        },
        /**
         * 
         * @param {*} node node for the recursive traversal
         * @param {*} depth node for the depth of the recursive function
         * @param {Function} callback function to apply to each element, which is the element that should be provided as a parameter to the callback Will be a BST Data Object
         * @returns 
         */
        preorder : function (node, depth, callback) {
            if (node != null) {
                callback(node.root);
                this.preorder(node.left, depth + 1, callback);
                this.preorder(node.right, depth + 1, callback);
                return
            }
            else {
                return
            }

        },
        /**
         * 
         * @param {*} node node for the recursive traversal
         * @param {*} depth 
         * @param {*} callback 
         * @returns 
         */
        postorder : function (node, depth, callback) {
            if (node != null) {
                this.postorder(node.left, depth + 1, callback);
                this.postorder(node.right, depth + 1, callback)
                callback(node.root);
                return
            }
            else {
                return
            }

        },
        /**
         * 
         * @param {BST_Node} node 
         * @param {*} height 
         */
        height : function(node, height) {
            if (node != null) {
                let left_height = height(node.left, height + 1);
                let right_height = height(node.right, height + 1);
                return Math.max([left_height, right_height])
            }
            else {
                return height;
            }
        },
        /**
         * 
         * TODO Handle repeating values
         * 
         * Returns a node with left and right pointers to a balanced binary search tree from a
         * sorted array of values
         * 
         * @param {[*]} arr Sorted array of data 
         * @param {*} start 
         * @param {*} end 
         * @param {*} depth 
         */
        balanced_binary_tree : function(arr, start, end, depth) {

            

            if (start > end) {
                return null;
            }

            
            let middle = parseInt((start + end) / 2);

            let node = BST_Node(arr[middle], 1);

            node.left = this.balanced_binary_tree(arr, start, middle - 1);
            node.right = this.balanced_binary_tree(arr, middle + 1, end);

            

            
            return node
            

        }

        

    }

    return component;
}