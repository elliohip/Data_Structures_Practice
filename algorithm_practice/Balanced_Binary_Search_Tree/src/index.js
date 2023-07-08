
const { default: prettyPrint } = require("./BST/Odin_visualisation/prettyprint");
const { default: tree } = require("./BST/Tree");


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

let arr = create_numbers();

arr.sort()

console.log(arr)

test_tree.root = test_tree.balanced_binary_tree(arr, 0, arr.length - 1, test_tree.root, 0);

prettyPrint(test_tree.root);

test_tree.inorder(test_tree.root, 0, function(element) {
    console.log(element);
});