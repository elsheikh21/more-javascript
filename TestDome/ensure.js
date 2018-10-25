// Implement the ensure function so that it throws an error
// if called without arguments or the argument is undefined. 
// Otherwise it should return the given value.

function ensure(value) {
    if (value === undefined) throw err;
    return value;
}

// UNDEFINED IS ANY OF THE FOLLOWING
// an uninitialized variable 
// a non-existing object property
// a non-existing array element 

// To check against undefined 
// we use [=== undefined]