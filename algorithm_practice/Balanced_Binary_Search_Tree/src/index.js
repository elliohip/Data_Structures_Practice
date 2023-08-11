
import prettyPrint from "./BST/Odin_visualisation/prettyprint";
import tree from "./BST/Tree";


let test_tree = tree();




let create_numbers = function () {

    let rand_nums = [];



    for (let i = 0; i < 10; i++) {
        let rand = Math.floor(Math.random() * 1000)
        while (rand_nums.includes(rand) == true) {
            rand = Math.floor(Math.random() * 1000)
            
        }
        


        rand_nums.push(rand)
        
    }

    return rand_nums
}

let compare = function(c, o) {
    if (c > o) {
        return 1;
    }
    if (c < o) {
        return -1;
    }
    else {
        return 0;
    }
}

let arr = create_numbers();



arr.sort(compare)

console.log(arr);

test_tree.root = test_tree.balanced_binary_tree(arr, 0, arr.length - 1, test_tree.root, 0);

prettyPrint(test_tree.root);

console.log(test_tree.tree_to_list_BFS());



//test_tree.bredth_first_search(function(element) {
  //  console.log(element);
//}, test_tree.root);
