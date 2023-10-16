/*
  let and const

  1 let
  2 const
  3 block scope
*/


/* 
  1 let 
*/


let foo = "bar";


/* 
  2 const 
  
  constant
*/

const foo = "bar";


/* 
  3  block scope 
  let and const has block scope.
*/

{
  var varInBlock = true;
  let letInBlock = true;
  const constInBlock = true;
}

console.log(varInBlock) 
// > true
console.log(letInBlock) 
// > not defined
console.log(constInBlock)
// > not defined
