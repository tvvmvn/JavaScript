/* 
  Variables scope
  
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
