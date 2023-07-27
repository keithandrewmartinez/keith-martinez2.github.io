////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


// Declare and call function that evaluates two arguments
function min(val1, val2) 
{
  if (val1 < val2) 
    {
    return val1;
    } else 
    {
    return val2;
    }
}

console.log(min(5, 7))       // 5
console.log(min("a", "A"))   // 'A' is "less than" 'a'


////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Function identifies and returns if the number is even, using an if-else if-else conditional chain

function isEven(num) 
{
  if (num === 0)             // check if num is exactly equal to 0
    { 
      return true;          // true; 0 is an even number
      
    } else if (num === 1)      // checks to see if num is exactly equal to 1
    { 
      return false;
      
    } else if (num < 0)       // checks to see if num is negative number
    { 
      return isEven(-num);  // recursively calls function as a negative number
      
    } else 
    {
    return isEven(num - 2); // recursively calls function minus 2, an even number
  }
}


console.log(isEven(-4))
console.log(isEven(-3))
console.log(isEven(-0))
console.log(isEven(1))

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



function countChars(string, char) 
{
// Declare variable of data type number for function, to count instance of char
  let charCount = 0;
// Create loop to check number of instances of 'char' in string 
  for (let i = 0; i < string.length; i++) 
  {
// Conditional chain to check if char is same as string for each index of string using bracket notation at i
    if (string[i] == char) 
    {
  // increment charCount for every instance of match found
      charCount += 1;
    }
  }
  return charCount;
}

console.log(countChars('apples', 'p'))

console.log(countChars('BumbleBees', 'B'))





////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Redefine function of countBs to include only 1 parameter 
// and invoke char value as 'B' in countChars function inside of countBs
// that also returns the function of countChars

function countBs(string) 
{
// Set char value of function countChars to check for 'B'
  return countChars(string, 'B') 
}

console.log(countBs('BumbleBees', 'B'))


console.log(countBs('bumblebees', 'B'))






////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
