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

// or 
var f = function () {
  console.log("foo");
}

// invoke
f() 


/* 
  Hoisting (게양)

  you can declare function below invoke.
  a sort of readability option
*/


f();

function f() {
  console.log("foo");
}


/*
parameter and argument 

1 parameter - variable that represent arguments
2 argument - input (value) on function
*/


function add(x, y) { // x, y is parameters
  console.log("result:", x + y);
}

add(1, 2); // 1, 2 is arguments
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

  function argument
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
  var time = new Date().toLocaleTimeString();
  console.log(time)
}

// setInterval(callback, ms): execute callback in every ms
setInterval(getTime, 1000);


/*
  Q. declare and invoke function that prints whether he/she is an adult or not
  according to age input.
*/


function isAdult(age) {
  // additional
  if (typeof age !== "number") {
    console.log("input must be a number");
    return; 
  }

  // codes are not executed after return.
  if (age >= 18) {
    console.log("He/she is an adult");
  } else {
    console.log("He/she is not adult");
  }
}

isAdult(20);
