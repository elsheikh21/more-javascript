/*
We have an array of objects A and an array of indexes B. 
Reorder objects in array A with given indexes in array B. Do not change array A's length.

var A = [C, D, E, F, G]
var B = [3, 0, 4, 1, 2]

sort(A, B);
prints: [D, F, G, C, E]
*/

function sort(A, B) {
    var sortObj = {};
    for (var i = 0; i < B.length; i++) {
        var strBi = B[i].toString();
        sortObj[strBi] = A[i];
    }
    var sorted = [];
    for (var key in sortObj) {
        sorted.push(sortObj[key]);
    }
    return sorted;
}

var A = ['C', 'D', 'E', 'F', 'G'];
var B = [3, 0, 4, 1, 2];

console.log(sort(A, B));