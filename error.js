/* 
  * Error and Exception
  
  1 Error
  2 Exception 
*/


/* 
  Error (Bug)

  defaults in code.
  error must be fixed.
*/


console.log(foo)
// name: ReferenceError
// message: foo is not defined
// stack: details


/*
  Exception (Custom Error)

  An error that a programmer generates intentionally
  when need it

  e.g) Authentication & Authorization
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