const RBT = require("./Red_Black_Tree.js")

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

let rand_arr = create_numbers();

let tree = RBT.default()

tree.insert(rand_arr[0])

console.log(tree)