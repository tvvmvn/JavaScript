/* 
  * Error and Exception
  
  1 Error
  2 Built-in Error 
  3 Exception 
*/


/* 
  Error

  error stops program.
  error must be handled.
*/


console.log(foo) 
// name: ReferenceError
// message: foo is not defind
// stack: details


/*
  Built-in Error

  1 SyntaxError
  2 ReferenceError
  refers to variable which does not exists
  3 TypeError
  inputs value of incorrect type to function.
*/


/* 
  Exception 

  1 What is exception
  2 Exception handling
*/


/*
  What is exception

  An error that a programmer generates intentionally
  when need it

  e.g) authentication & authorization
*/


var password = "123";
var input = "12";

if (input != password) {
  // throw an exception
  throw "Password not match";
}


/*
  Exception handling

  Exception can be handled with try & catch syntax
  program can keep runnning.
*/


var password = "123";
var input = "12";

try {
  if (input != password) {
    // throw an exception
    throw "Password not match";
  }
  
  // not executed
  console.log("Done");

} catch (error) {
  console.log("Error:", error);
}