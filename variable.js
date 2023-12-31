/* 
  Variables 
  container that store value
  
  1 Basic usage
  2 Global & local variable
*/


/*
Basic usage
*/


// declare and define
var foo = "bar";

console.log(foo);
// > bar


// declare 
var foo; 
// define
foo = "bar";

console.log(foo) 
// > bar


// define
var foo = 'bar'
// redefine
foo = "baz"; 

console.log(foo) 
// > baz



/*
  Global & local variable
*/


/*
  Global variable
  
  Declared outside function 
  Accessible from anywhere in source code
*/


var varInGlobal = true;

console.log(varInGlobal);
// > true;


/*
  Local variable 
  
  Declared inside function. 
  Only accessible in function that a variable is declared
*/


function f() {
  var varInFunction = true;
}

console.log(varInFunction)
// > reference error
