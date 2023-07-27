const RBT = require("./Red_Black_Tree.js")



let tree = RBT.default()




let create_numbers = function () {

    let rand_nums = [];



    for (let i = 0; i < 10; i++) {
        let rand = Math.floor(Math.random() * 1000)
        while (rand_nums.includes(rand) == true) {
            rand = Math.floor(Math.random() * 1000)
            
        }
        
        tree.insert(rand)


        rand_nums.push(rand)
        
    }

    return rand_nums
}

let rand_arr = create_numbers();


console.log(tree)