
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Using for-loop to create repeated logs of # symbol on each new line as each loop is logged


// Function 'triangles' would take one paramter data type number (num)
function triangles(num) {
  for (let i = '#'; i.length <= num; i = i + '#')
// Using for loop, can set i as a string, at value '#' (as an alternative to iterating through an array) and iterate through function with soops logging, the new value of i, which adds a hash through every loop
  console.log(i);
}
// log to test function, w/ 7 as argument, but could change this number to change size of triangle as well
console.log(triangles(7))

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


// A for loop for fizz buzz combined with a conditional chain allows 
// iterating through each condition as value increases by 1 each loop, 
// substituting as necessary fizz or buzz for 3 or 5 respectively

// So declaring a function fizzBuzz that passes a single argument with a parameter data type of num for upper limit of total iterations

function fizzBuzz(num1, num2) {

  // Loop takes two parameters, both number values, num1 is starting value, in this case 1, and num2 is ending value, here 15
  // while loop continues until i is equal to value of num2
   for (let num1 = 1; num1 <= num2; ++num1){
  
  // Logic of the conditional chain (else, else if, else) necessitates that // 15, the multiple of both 3 and 5 be checked first
  // Can check each number before logging, if it is perfectly divisible by 15, 3, or 5, using 
  // % or remainder operator (if === 0, should log alternate text)
     
  if (num1 % 15 === 0){
  // If condition 'hits', should log text value, otherwise, will continue iterating summative number values
    
         console.log('fizzbuzz');
    
  // Because 15 is divisible by both 3 and 5, shouldnt matter which number (3 or 5) is tested for next
     } else if (num1 % 3 === 0){ 
    
         console.log('fizz');
    
     } else if(num1 % 5 === 0){
    
         console.log('buzz');
    
     } else{
    
         console.log(num1);
     }
  }
  }
  fizzBuzz(1, 15);
  


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////





// Three conditions or requirements in programming a script for a chessboard
// 1. number of rows should equal number of columns
// 2. order of black rows and columns should alternate with order of white ones (iterated in this case as hashes and spaces
// 3. A single value or number should define and determine the total size or square root of the chessboard (in this case 8)



// Defining the components of the chessboard, there are black squares and white ones (same size, but always alternating), and the exponential square of the number of squares on either row or columm (also are same size, but alternating in starting value)
// number of rows could indicate (as much as the number of columns) the total size of the square chessboard
// So, declaring function, drawChessboard, which has one parameter and takes as an argument the number of squares in each row (which would be the same number in each column)
// function will require an alternating sequence for each row, starting with either black or white squares, but should not have a consecutive, or adjacent, sequence of each (ie, rows alternate starting with black or white); this alternating nature would ensure squares do not have the same adjacenet color
// Can iterate through each numnber of rows, the same number of times as new lines on an array of strings (since each square is defined as a string)

function drawChessboard(num) 
{
// Defining separate variables for each square, of type string, and an array, to ultimately push the completed sequence of rows into
  let blackSq = "#";
  let whiteSq = " ";
  let board = [];


  // To make alternating color sequence of start of each row, can use nested loops, to keep count of the number of rows, and the number of squares iterated on each row
// Can set a for of loop with first row and square set to begin at 
// With i of 0, need to subtract 1 from num variable to account for index 0 start of array

  for (let i = 0; i <= num - 1; i++) 
  {
// Defining an empty variable of type string for 'row' which will add 
// black or white square depending upon xCount of row, stored by variable xCount (as in count on x-axis), to track and identify which square in the row is being looped through
        let row = "";
        let xCount = i;  // Outer nest, loops through and, pushes completed rows to board

//to alternate between white/black) squares, use even//odd binary condtiion
// row will accumulate string of black square or white squares, 
// but xCount will determines if next square added is black or white depending upon whether xCount is odd or even 
// so inner loop identifies which color square to add to row 
        for (let j = 0; j <= num - 1; j++) 
        {
        
            if (xCount % 2 === 0) 
            {  // Remainder of % 2 ==== 0, indicates square count of row is even, so will add black square
             row += whiteSq;
        
            } else 
            {    
        
             row += blackSq;  
            }
        xCount++  // each iteration of inner loop increments xCount 
          // console.log(xCount)
        }
// Once size of row equals argument number, inner loops nested loops stop and push completed string of squares to board array, adding new line return at end of each row   
    
    board.push(row + "\n");  // once j is no longer <= num, each row is added to array, 
  }
// Can then "connect" collected strings from rows with join function, that will output with new lines alternating color start position for each row
  // End of outer loop, once row 
  
  console.log(board.join(""));
}


drawChessboard(8);










////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
