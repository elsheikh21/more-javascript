// duplicate an array
// i/p: [1,2,3,4,5], o/p: [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr) {
    return arr.concat(arr);
}

console.log(duplicate([1, 2, 3, 4, 5]));