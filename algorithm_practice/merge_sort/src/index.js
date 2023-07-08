import merge_sort from "./scripts.js/merge_sort"


let create_numbers = function () {

    let rand_nums = [];

    

    for (let i = 0; i < 100; i++) {
        let rand = Math.floor(Math.random() * 1000)
        while (rand_nums.includes(rand) == true) {
            rand = Math.floor(Math.random() * 1000)
        }
        rand_nums.push(rand)

    }

    return rand_nums
}


var example_list = create_numbers()

var main = function() {
    console.log(example_list)
    let example_list2 = merge_sort(example_list, 0);
    temp_test(example_list, example_list2)
    console.log(example_list2);
    
}

main()

/**
 * 
 * @param {[]} arr 
 * @param {[]} sorted_arr 
 */
function temp_test(arr, sorted_arr) {
    let largest;
    let large_ind = 0;
    largest = sorted_arr[large_ind];
    for (let i = 0, j = 0; i < arr.length; i++, j++) {
        if (!sorted_arr.includes(arr[i])) {
            console.log("ERROR")
        }
        if (sorted_arr[i] > largest) {
            largest = sorted_arr[i];
            
        }
        else {
            console.log("ERROR");
        }
    }
}