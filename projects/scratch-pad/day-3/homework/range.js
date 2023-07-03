// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //

//==========================================================================
// Reversible Range Function
/*
Set variable as array to collect output returned from range of two arguments

compare and evaluate larger of two arguments, with a nested loop if it returns true
if true, return array in reverse order (high to low)
*/ 


let rangArr = [];
  if (start === end) {
    return rangArr[Math.floor(start)]
  }
    if (start > end)  {
      
       for (let i = start; i >= end; i--)
        {          rangArr.push(i)}

             } else if (start < end)      {
      
             for (let i = start; i <= end; i++)   {
               
                 rangArr.push(i) }
    }
return rangArr;

//==========================================================================


    // YOUR CODE GOES ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
