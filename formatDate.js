/**
 * @param {arr} arr 
 * @param {number} firstIndex 
 * @param {number} secondIndex
 * @returns {arr} swaped elements in passed indices 
 */
function swapElements(arr, firstIndex, secondIndex) {
    var temp = arr[secondIndex];
    arr[secondIndex] = arr[firstIndex];
    arr[firstIndex] = temp;
    return arr;
}

/**
 * @param {string} userDate in M/D/YYYY
 * @returns {string} formatted date in YYYYMMDD
 */
function formatDate(userDate) {
    var arr = userDate.split('/');
    if (arr[0].length == 1) {
        arr[0] = "0" + arr[0];
    }
    if (arr[1].length == 1) {
        arr[1] = "0" + arr[1];
    }
    arr = swapElements(arr, 0, 1);
    arr = swapElements(arr, 0, 2);
    return arr.join("");
}

console.log(formatDate("12/31/2014"));