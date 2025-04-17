
// redeclation is not allowed unlike var
let foo = "bar";


/* 
  3  block scope 
  
  let and const has block scope.
*/


{ // block
  let letInBlock = true;
}

console.log(letInBlock) 
// > not defined
