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



//=================================================================    
    
//will need to create a test that evaluates a value with the base
//should return a Function
//Nested, inner function should have a value that it compares against base, a 
//test to compare them, and an output that is the result of that comparison
// Since comparison output assesses which of the two is greater, 
//can structure test as base > value (the internal function's value--is this a 
//parameter though or set as a constant within a function?)

function nestedFunction(value) {
   if(value > base) {
    return true
   } else {
    return false
   }
}
return nestedFunction(value)


    // first test data type for string or number
    // if Number, then evaluate if larger than base, 
    // if string, evaluate with base as string

    // return function(value){
    //         return true if value > base;

//     function createGreaterThanFilter(base) {
//        if (typeof value === 'string'|| typeof value === 'number') {
//           return 
          
//           value > base;
//         } else {
//           return false;
          
//         }
// return function(value) {




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


startsWith = string[0].toString
// return a Function that tests whether a given String starts with the startsWith 
//  character.
return function firstChar

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}




    
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
  
// Given a endsWith character, which will be a single character, 
// return a Function that tests whether a given String ends with the endsWith 
// character.




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
 
// Given an Array of Strings and a Function designed to modify a String, 
// return the Array of the Strings, modified.
// * 
// TIP: You need to loop over the Strings, right? We need to pass each String to 
// the modify Function, but we need to collect the results into some collection.



    // modify is a function that takes in a string and modifies it
    
    


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




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
    // test is a function that will test an array and return ... true??
    
    



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
