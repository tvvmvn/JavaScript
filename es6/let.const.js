/*
  let and const

  1 let
  2 const
  3 block scope
*/


/* 
  1 let 
  reserved words for variable declation
  almost same as var
*/


// redeclation not allowed
let foo = "bar";
let foo = "baz"


/* 
  2 const 
  
  constant
*/

const FOO = "bar";


/* 
  3  block scope 
  let and const has block scope.
*/

{ // block
  var varInBlock = true;
  let letInBlock = true;
  const CONST_IN_BLOCK = true;
}

console.log(varInBlock) 
// > true
console.log(letInBlock) 
// > not defined
console.log(constInBlock)
// > not defined

