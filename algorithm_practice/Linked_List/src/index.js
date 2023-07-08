import Linked_List from "./Linked_List";


let test_arr = [762, 200, 983, 803, 880, 892, 224, 46, 72, 368]


let test1 = 50;
let test2 = 68;
let test3 = 90;

let tests = []

let list = Linked_List()

let create_numbers = function () {

    let rand_nums = [];

    

    for (let i = 0; i < 10; i++) {
        let rand = Math.floor(Math.random() * 1000)
        while (rand_nums.includes(rand) == true) {
            rand = Math.floor(Math.random() * 1000)
        }
        rand_nums.push(rand)
        list.push(rand)
        if (i == test1) {
            tests.append[rand_nums[i]]
        } else if (i == test2) {
            tests.append[rand_nums[i]]
        }
        else if (i == test3) {
            tests.append[rand_nums[i]]
        }
    }

    return rand_nums
}

// let nums = create_numbers()


// console.log(nums)

console.log(list)


for (let i = 0; i < test_arr.length; i++) {
    list.push(test_arr[i])
}

console.assert(list.at(3).data == 803);