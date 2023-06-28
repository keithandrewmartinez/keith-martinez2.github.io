// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //

    // return length of input string using string.length method
    return string.length;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    // return input of String to all lowercase, using toLowerCase method (requires parenthesis at end)
    return string.toLowerCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    // return provided input String to uppercase, using toUpperCase method
    return string.toUpperCase();



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // convert provided String in "Dash-case" using replaceAll method to swap " " with "-" 
    let dashedString = string.replaceAll(" ", "-");
    // and then convert toLowerCase
    return dashedString.toLowerCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    /*
    I: Provided with input string, and single character, compare first letter of string with character
    O: return true if String begins with the same character, else return false
    C: Function is case insensitive
    E:
    */

    //Case insensitivity requires standardizing strings, or using a case-blind method 
    // first convert each input to lowercase
    // access first character of string by calling string[0]

    let lCString = string.toLowerCase();
    let lCChar = char.toLowerCase();

    if (lCString[0] === lCChar) {
        return true;
    }
    else {
        return false;

    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    /*
    I: Provided with input string, and single character, compare LAST letter of string with character
    O: return true if String ends with the same character, else return false
    C: Function is case insensitive
    E:
    */

    //Case insensitivity requires standardizing strings, or using a case-blind method 
    // Like previous problem, first convert each input to lowercase
    // Access last character of string by calling string[string.length-1]

    let lCString = string.toLowerCase();
    lCString = string[string.length - 1];
    let lCChar = char.toLowerCase();

    if (lCString === lCChar) {
        return true;
    }
    else {
        return false;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // return two strings joined into one
    // use concat method, combining stringOne with stringTwo
    return stringOne.concat(stringTwo);

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);

    // Use join method to concatanate multiple elements from array together;
    // Return combined arguments using join method utilizing variable "args" which creates the array from its arguments
    return args.join("");


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// Identify length of each string
// Compare and evaluate each string with the other and return longer of the two
let str1 = stringOne.length;
let str2 = stringTwo.length;
// Create conditional which returns first string, if longer, otherwise, return second
if (str1 > str2){
    return stringOne;
} 
else if(str1 < str2){
    return stringTwo;
}
// Since there is the possibility that both strings might be of an equal length, a condition is provided for this last edge case
else if(str1 === str2){
    return "Both strings are of equal length";
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

// Provided two strings , return 1 if first is higher in alphabetical order than the second
// If the second is higher in alphabetical order than the first, return -1
// Return 0 if they are equal
return stringTwo.localeCompare(stringOne);



    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// Provided two strings , return 1 if first is higher in alphabetical order than the second
// If the second is higher in alphabetical order than the first, return -1
// Return 0 if they are equal
// A simple inversion of the previous inputs resolves the desired output
return stringOne.localeCompare(stringTwo);



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
