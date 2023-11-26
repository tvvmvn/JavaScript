/* 
  * Error and Exception
  
  1 Error
  2 Exception 
*/


/* 
  Error

  error stops program.
  error must be handled.
*/


// var foo;

console.log(foo) 
// name: ReferenceError
// message: foo is not defind
// stack: details


/* 
  Exception 

  1 What is exception
  2 Exception handling
*/


/*
  What is exception

  An error that a programmer generates intentionally
  when need it
*/


var age = 15;

console.log('a student:', 'Guinness, please');

if (age < 18) {
  // throw an exception
  throw 'Too young to buy an alcohol';
}

console.log('staff:', 'Here are Guinness');


/*
  Exception handling

  exception can be handled with try & catch syntax
*/


var age = 15;

console.log('a student:', 'Guinness, please');

try {

  if (age < 18) {
    throw 'Too young to buy an alcohol';
  }

  // not executed
  console.log('staff:', 'Here are Guinness');

} catch (e) {
  console.log(e);
}