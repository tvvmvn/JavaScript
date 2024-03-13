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


// redeclation is not allowed unlike var
let foo = "bar";
let foo = "baz";


/* 
  2 const 
  
  reserverd words for constant declaration 
*/


// only way to use it
const foo = "bar";


/* 
  3  block scope 
  
  let and const has block scope.
*/


{ // block
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

