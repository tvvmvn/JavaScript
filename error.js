/* 
  * Error and Exception
  
  1 Error
  2 Exception 
*/


/* 
  Error (Bug)

  error stops program.
  error must be fixed.
*/


console.log(foo)
// name: ReferenceError
// message: foo is not defined
// stack: details


/* 
  Exception 

  1 Concept
  2 Exception handling
*/


/*
  1 Concept

  An error that a programmer generates intentionally
  when need it

  e.g) Authentication & Authorization
*/


var input = "12";
var password = "123";

if (input != password) {
  // throw an exception
  throw "Password not match";
}


/*
  2 Exception handling

  try & catch syntax handles exception.
*/


var password = "123";
var input = "12";

try {
  if (input != password) {
    // throw an exception
    throw "Password not match";
  }
  
  // not executed
  console.log("login success");

} catch (error) {
  console.log("login fail:", error);
}