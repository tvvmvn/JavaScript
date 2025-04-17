
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
  const constInBlock = true;
}

console.log(constInBlock)
// > not defined

