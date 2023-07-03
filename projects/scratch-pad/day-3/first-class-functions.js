// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
//===============================================================

// Given a base, which is either a string or number,
// return a function that tests whether the 'given value' is greater than the "base"
// Consider possible complications with variations in case, if alphabetical, 
// or negative, if numeric

    return function (value) {              // alphabetic characters have embedded values

        return value > base;               // expression returns boolean
    }
    

//=================================================================  

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
 
 //=================================================================  
 
// Inverse of previous function, if given a base, also either string or number,
// return a function that tests whether the 'given value' is LESS THAN than the "base"


    return function (value) {
        return value < base;
    }
    
//================================================================= 
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
//================================================================= 

// Given a starting character, that may not be alphabetical, 
// return a function that tests a string to evaluate if its first character is the same

    return function(string){

// Evaluate if string at index 0 starts with character
// Before testing, standardize character (and string), to test both as lowercase characters

return string[0].toLowerCase() === startsWith.toLowerCase();
// if character at index 0 for each string is a match, returns true
    
}
// given input character, returns function that tests if string begins with the character passed 
// as argument = "(startsWith)" 
        

    
//================================================================= 
   
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    
//=================================================================    
  
// Opposite of previous, if given an endsWith character(single character, not
// necessarily alphabetical, return a Function that tests whether a given String ends with the 
// given "endsWith" character.


// Create function that tests string for its last character

return function(string){

// Evaluate if string at [string.length -1] starts with character
// Before testing, standardize character (and string), to test for strictly lowercase characters
    
    return string[string.length - 1].toLowerCase() === endsWith.toLowerCase();
    // if character at index 0 for each string is a match, returns true
        
    }
 // given the passed character, returns a function that tests whether string ends with character passed
    
//================================================================= 


    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
   
//================================================================= 
 


// Use a for-loop to iterate through strings and push 
// them into a resulting array
    
 // set variable for resulting array (that collects the modified strings)
  let result = [];
  
// loop over the Array of Strings

  for (let i = 0; i < strings.length; i++) {

// Push strings into array, result, as they are iterated through loop

    result.push(modify(strings[i]));
  }

  return result;  
    


//================================================================= 


    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
 
//================================================================= 

// Similar to previous function, as an implementation of the culmination of them, 
// create a function that will test an array and return boolean

// declare a function that takes an array of strings as a parameter
//function iterates loop through all strings and tests if they pass a particular test. If ALL
//strings pass the test, return all.

// Like previous function, will also require a for-loop
  
    for (var i = 0; i < strings.length; i++) {

        // pass current array value to the test function

        if (test(strings[i]) === false) {

            return false;
        }
    }
 return true;


//================================================================= 

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
