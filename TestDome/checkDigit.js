//Your company assigns each customer a membership ID, and you are implementing a check digit for those IDs.

// The check digit should be calculated by adding up all digits in each membership ID.
// If the result of the sum is a number with more than a single digit, 
// another iteration is required, and the digits of the result also should be added together.
// This process should repeat until a single - digit number is calculated.

// For example,
// for the membership ID "55555"
// the sum of all digits is 25. Because this is not a single - digit number, 2 and 5 would be added, 
// and the result, 7, would be the check digit.

/**
 * @prop {string} membershipId: The customer's membership ID.
 * @return {number} The check digit.
 */
function createCheckDigit(membershipId) {
    if (membershipId === undefined) {
        throw new Error('Membership ID is required');
    } else if (membershipId.length == 1) {
        return membershipId[0];
    } else {
        var membershipIdArray = membershipId.split('').map(x => Number.parseInt(x, 10));
        var sum = membershipIdArray.reduce((a, b) => a + b, 0);
        return sum;
    }
}

console.log(createCheckDigit("55555"));

// Number(string); it converts a string to number, If the argument cannot be converted into a number, it returns NaN
// In a non-constructor context (i.e., without the new operator), Number can be used to perform a type conversion.
// Number.parseInt(string, radix) convert string to integer, Return Value: Integer. If the first character cannot be converted to a number, NaN is returned
// if string the string first digit was a letter, it will return NaN - Not a Number -
// radix is by default 10, unless you want to change it. it takes a number (from 2 to 36) that represents the numeral system to be used
// Number.parseFloat(string) convert string to float, Return Value: Integer. If the first character cannot be converted to a number, NaN is returned
// Number.parseFloat('10.00'); // it will return 10

// The string.split(separator, limit) method is used to split a string into an array of substrings, and returns the new array.
// seperator arg optional. Specifies the character, or the regular expression, to use for splitting the string. If omitted, the entire string will be returned (an array with only one item)
// limit arg optional. An integer that specifies the number of splits, items after the split limit will not be included in the array
// If an empty string ("") is used as the separator, the string is split between each character.
// The split() method does not change the original string.
// 'abcd'.split(); // returns 'abcd'
// 'abcd'.split(''); // returns a,b,c,d

// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.
// new Map([iterable]), creates a new array with the results of calling a provided function on every element in the calling array.
// map(x => what you want to do with each element)
// map(x => Number.parseInt(x, 10)); // converts all elements to a number of base 10

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// filter(x => x > 10); // creates a new array with elements less than 10

// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// initialValue: Optional. A value to be passed to the function as the initial value