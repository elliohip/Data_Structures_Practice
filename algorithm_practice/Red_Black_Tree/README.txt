purpose of this assignment is to better understand tree data structures, as well as efficient ways to traverse them.  

This is the algorithm for a red blck tree, a Data Struecture that is useful in low level data retrieval, inserting, and deleting data, short time complexity for retrieving data




pseudocode :

- assumptions {
    no duplicates, since a RBT is essentially a set 
}

RBT_Node:

    + root - Root Data to be added
    + left - left child node        
    + right - right child node
    + color - color of this RBT Node
    + parent - parent of this RBT Node


Red-Black-Tree:

    - right_rotation() - rotates the tree to the right, this causes a shifting effect to occurr, and is the heart of the balancing functionality

    + insert() - inserts an element using the insert helper method, or adds to the tree if empty
    - insert_helper() - inserts an element while keeping the tree balanced, rotating when needed 

    + remove() - deletes an element, while maintaining the balanced property

