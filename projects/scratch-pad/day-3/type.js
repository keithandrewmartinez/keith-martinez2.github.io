// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //


 //=========================================================
 //1. Type of: Array

    return Array.isArray(value);


    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //


//==============================================================
 //2. Type of: Object
// returns true if given Object as collection, otherwise false
// so must test for alternative conditions that eliminate false positives 
// like null, array, and Date

//can first asses if array with Array.isArray
if(value !== Array.isArray(value){      //want to continue through tests, 
    //so should structure it to return false if is array, hence !== structure
//if true, should return false (because not an Object as collection)
return false
} else if (value instanceof Date) {   //next test is test for instance of Date as false 
    //positive for object(BUT DOES THIS ONLY WORK IF IT IS AN OBJECT???)

}
//     testObj = {a:1,b:2,c:3}

// let a = Object.prototype.toString.call(value);

// let b = Object.prototype.toString.call(testObj);

// if(value === 'Null') {
//     console.log(false) 
// } else if (Array.isArray(value) === true) 
// } else if {new instanceof now === Date()}

// }
//     a === b){
//     return true }
//     else {
//         return false
    
//      test to confirm not null,  === null 
//      not Array, Array.isArray
//      not a Date (instance of)
// }

//==========================================================================




    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
 function isCollection(value) {
    // YOUR CODE BELOW HERE //




//==========================================================================
//3. Type of Collection
    

    // Array,isArray; true
    // null === 'null'; false; 
    // new instanceof now === Date;
    // else if object typeof === object 




//==========================================================================



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
  
    

//==========================================================================
// TYPE OF: w Function ,m


    // Types are one of: 
    // typeOf("string")   - "string"
    // *    - "array"
    // *    - "object"
    // *    - "undefined"
    // *    - "number"
    // *    - "boolean"
    // *    - "null"
    // *    - "function"
    // *    - "date"
    // * 


//==========================================================================
    


    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
