// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
/*

6 Steps which begin with
1. Defining length of string using .length-1;
2. Inputting the string into an array 
3. Creating a while loop that iterates each letter in reverse order of the array
4. The output of the while loop creates a string OR array?
5. Concatenating the array that is returned as a final output

*/

let reversed = "";

for (let i = input.length - 1; i >= 0; i--) {

      reversed += input[i];
}
//Critically important to ensure that the return tag is OUTSIDE of the loop braces
//  or the loop will only run once before returning its output

      return reversed;
    

    // YOUR CODE GOES ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}