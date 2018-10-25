// remove a property in a specified object, and return true 
// if property is not in object return true 
function removeProperty(obj, prop) {
    if (prop in obj) {
        delete obj[prop];
        return true;
    } else {
        return false;
    }
}

// The in operator returns true if the specified property is in the specified object or its prototype chain.
// If you delete a property with the delete operator, the in operator returns false for that property.
// If you set a property to undefined but do not delete it, the in operator returns true for that property.