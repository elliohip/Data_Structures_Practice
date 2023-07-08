/**
 * 
 * @param {Number} num 
 * @returns {Number} number object that represents greater, less, and equal to
 */
Number.prototype.compare_to = function(num) {
    if (this > num) {
        return 1;
    }
    else if (this < num) {
        return -1;
    }
    else {
        return 0;
    }
}

/**
 * 
 * @param {Object[]} items Array of items, must have a built in compare_to(<obj>) method for each
 * element
 * @param {Number} depth Depth of the recursive function call
 * @returns {Object[]} Sorted list of absteact objects
 */
export default function merge_sort(items, depth) {
    
    if (items.length > 1) {
        let middle = Math.ceil((items.length) / 2)

        let left = items.slice(0, middle)
        let right = items.slice(middle, items.length)

        let left_sorted = merge_sort(left, depth + 1)
        let right_sorted = merge_sort(right, depth + 1)

        if (depth <= 1) {
            console.log(depth)
        }

        return merge(left_sorted, right_sorted, depth)
    }
    else {
        return items;
    }
    
}



/**
 * 
 * @param {Number[]} left Left portion of the array
 * @param {Number[]} right Right portion of the array, can sometimes be
 *      one smaller than the other array
 * @param {Number} depth the depth of this function call
 * @returns {Number[]} array of the two other arrays that is sorted by using a built in comparator
 * that the object must have.  For the sake of error, this script includes a built in comparator
 * for the Number prototype
 */
function merge(left, right, depth){

    if (left.length == 0 || right.length == 0) {
        return;
    }

    if (left.length == 1 && right.length == 1) {
        switch(left[0].compare_to(right[0])) {
            case 1:
                return [right[0], left[0]]; 
            break;
            case -1: 
            return [left[0], right[0]];
            break;
            case 0:
                return [left[0], right[0]];
                break;

        }
    }

    let new_array = [];

    if (depth == 1) {
        console.log(depth)
    }
    
    for (let i = 0, j = 0; new_array.length < (left.length) + (right.length);) {

        
        if (left[i] == null || right[j] == null) {
//            console.log("")
        }
        let check_greater_equal = left[i].compare_to(right[j]);


            if (check_greater_equal == 1) {

                
                if (j < right.length - 1) {
                    new_array.push(right[j])
                    j++;
                }
                else if (j == right.length - 1) {
                    if (right[j].compare_to(new_array[new_array.length - 1]) >= 0)
                        new_array.push(right[j])

                    new_array.push(left[i])
                    i++;
                    //j++;
                }
                
            }

            else if (check_greater_equal ==  -1){
                
                
                if (i < left.length - 1){
                    new_array.push(left[i])
                    i++;
                }
                else if (i == left.length - 1){
                    if (left[i].compare_to(new_array[new_array.length -1]) > 0){
                        new_array.push(left[i])
                    }
                    
                    new_array.push(right[j])
                    j++;
                    //i++;
                }
                
                
                
            }

            else if (check_greater_equal == 0) {
                
                new_array.push(left[i]);
                new_array.push(right[j]);

                i++;

                j++;
                

                
            }

            
    }



    if (depth < 2) {

        console.log(" ")

        for (let i = 0; i < left.length; i++) {
            if (i < right.length) {
                if (new_array.includes(right[i]) == false) {
//                    console.log("missing value")
                }
            }
            if (new_array.includes(left[i]) == false) {
//                console.log("missing value")
            }

        }

    }

return new_array
}