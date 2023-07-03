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


 //===========================================================================
 //1. Type of: Array

 // Function returns Boolean value; isArray (static metho) tests the passed value, 
 // but function requires return statement to provide result

    if (Array.isArray(value) )
    {return true
    } else {
      return false
    }
      
//============================================================================

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
    function isObject(value) 

    // YOUR CODE BELOW HERE //


//==============================================================

/*
2. Type of: Object

Returns true if given Object as collection; otherwise false.
Must test for alternative conditions that have false positives 
('null', 'array', and 'Date')

*/


/*
// REFERENCE NOTES:
console.log(typeof Date)                    // function
console.log(typeof object)                  // undefined

object = {1:'a', 2: 'b', 3:'c'}
console.log(typeof object)                   // object

console.log(new Date() instanceof Date)      // true
var today = new Date()
console.log(typeof today);                   // object

console.log(typeof 11/12/23)                 // NaN




console.log(new Date() instanceof Date)      // true
var today = new Date()
console.log(typeof today);                   // object

*/

//console.log(isObject(value))                 //undefined at Object


/*
Using chained/compound conditional
CONFIRM
1. - is object
2. - isn't array ( Array.isArray != array)
3. - isn't null 
4. - isn't of type date
5. - then IS literal object

*/

// OBJECT FOR TEST: value = {1:'a', 2: 'b', 3:'c'}

// function isObject(value) {

{    // Open curly brace for initialization of function

if(typeof value === 'object'                 // true
    && !Array.isArray(value)                 // true
    && value !== null                        // true
    && false === (value instanceof Date)     // false === false; true
   ){
    return true;
  } else {
    return false;                        
 }


// TEST DONE AFTER FUNCTION: console.log(isObject(value))             // true (is object literal)


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



        if(typeof value === 'object'                 // true
            && value !== null                        // true
            && false === (value instanceof Date)     // false === false; true
           ){
            return true;
          } else {
            return false;                        
         
          }


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
// TYPE OF: Function 
// Construct conditional chain to test for each of the following possible inputs 
// (As a possible argument for the function typeOf
// Function returns a string value that identifies the data type of its passed argument
// Order is important if not necessary because of method for identification of type
// so ideal order uses typeof last (this method works ineffectively with 'object', date, null, and array, 
// so those should go first, beginning with 'array' (has its own static method)
// date 
// null
// typeof (string)


let stringOfDataType = "";
    if(typeof value === "string"){
        stringOfDataType = "string"
    }
typeof("string")   - "string"

let stringValue = "";                                                     //  initialize stringValue
if (typeof value === 'object'){                                           //  tests if value is an object
    if (Array.isArray(value)){                                        // if true, tests if it is an array
        stringValue = "array";                                    // if true, assigns stringValue to "array"
    }else if (Object.prototype.toString.call(value) === '[object Date]'){            //  tests if is a date
        stringValue = "date";                                //  if true, assigns stringValue to "date"
    }else if (value === null){                                          //  tests if equal to null
        stringValue = "null";                                   //  if true, assigns stingValue to "null"
    }else {                                                             //  any other condition
        stringValue = "object";                                         //  assigns stringValue to "object"
    }
} else {                                                            //  any other condition, evaluates with typeof
    stringValue = typeof value;
}

//  assigns stringValue to a string of the value type


return stringValue;                                                    



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
