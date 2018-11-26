/*
Given a mapping from digits to list of letters 
and a string of digits of arbitrary length 
determine all possible ways to replace the digits with letters. 

Input Mapping = { 
'1' → ['A', 'B', 'C'], 
'2' → ['D', 'E', 'F'], 
... 
} 

Avg length of map values - N 

Input String = "12" - K 
Expected Output = ["AD", "AE", "AF", "BD", "BE", "BF", "CD", "CE", "CF"]
*/

// i/p = 12 
// so we took first digit and choose this to be our first array to fill 
// and second digit to be second in command


function mapDigitsToLetters(str) {
    var num = Number.parseInt(str);
    // 1. divide by 10 to get first digit 
    var firstDigit = Math.round(num / 10);
    // 2. Modulus 10 to get second digit
    var secondDigit = Math.round(num % 10);
    // have the mapping object
    var mapping = {
        '1': ['A', 'B', 'C'],
        '2': ['D', 'E', 'F'],
        '3': ['G', 'H', 'I'],
        '4': ['J', 'K', 'L'],
        '5': ['M', 'N', 'O'],
        '6': ['P', 'Q', 'R'],
        '7': ['S', 'T', 'U'],
        '8': ['V', 'W', 'X'],
        '9': ['Y', 'Z']
    };
    // create the list to return numbers in
    var mapped = [];
    // extract the mapping values
    var firstKeyValues = mapping[firstDigit.toString()];
    var secondKeyValues = mapping[secondDigit.toString()];
    // 3. get first digit array values
    for (var i = 0; i < firstKeyValues.length; i++) {
        // 3i. cache the value
        var firstVal = firstKeyValues[i];
        // 4. get second digit array values 
        for (var j = 0; j < secondKeyValues.length; j++) {
            var secondVal = secondKeyValues[j];
            mapped.push(firstVal + secondVal);
        }
    }
    // 5. return array
    return mapped;
}

console.log(mapDigitsToLetters(29));