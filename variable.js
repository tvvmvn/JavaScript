/* 
  Variables 
  container that store value
  
  1 Basic usage
  2 Global & local variable
*/


/*
  Basic usage
*/


// declare and define (initialization)
var foo = "bar";

console.log(foo);
// > bar


// declare 
var foo; 

// define later
foo = "bar";

console.log(foo) 
// > bar


// define
var foo = "bar"

// redefine
foo = "baz"; 

console.log(foo) 
// > baz



/*
  Global & local variable

  1 Global variable
  2 Local variable
*/


/*
  1 Global variable
  
  Declared outside function 
  Accessible from anywhere in source code
*/


var varInGlobal = true;

console.log(varInGlobal);
// > true


/*
  2 Local variable 
  
  Declared inside function. 
  Only accessible in function that a variable is declared
*/


function f() {
  var varInFunction = true;
}

console.log(varInFunction)
// > reference error
