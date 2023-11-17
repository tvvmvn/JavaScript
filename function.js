/*
  * Function
  a block of codes excuted when invoked.

  1 Function declaration and invoke
  2 Hoisting
  3 Parameter and argument
  4 return 
  5 Callback
*/


/*
  Function declaration and invoke
*/


// declaration
function f() {
  console.log("foo")
}

// invoke
f() 
// > foo

// or 
var f = function () {
  console.log("foo");
}


/* 
  Hoisting (게양)

  you can write function declaration below invoke.
  a sort of readability option
*/


f();

function f() {
  console.log("foo");
}


/*
parameter and argument 
*/


function add(x, y) { // parameters: x, y
  console.log("result:", x + y);
}

add(1, 2); // arguments: 1, 2
// > result: 3


/* 
  return 

  function can return operation result.
*/


function add(x, y) {
  return x + y;
}

var r = add(1, 2);

console.log("result:", r);
// > add result: 3


/*
  Callback

  function arguments
*/


function f(callback) {
  var foo = "bar";

  callback(foo);
}

function cb(data) {
  console.log(data);
} 

f(cb);
// > bar


// Realworld example of callback
function getTime() {
  let time = new Date().toLocaleTimeString();
  console.log(time)
}

// setInterval(callback, ms): execute callback in every ms
setInterval(getTime, 1000);


/*
  Q. declare function that prints whether he/she is an adult or not
  according to age input.
*/


function isAdult(age) {
  // additional
  if (typeof age !== "number") {
    console.log("argument type must be a number");
    return; // stop execution
  }

  if (age >= 18) {
    console.log("He/she is an adult");
  } else {
    console.log("He/she is not adult");
  }
}

isAdult(20);
