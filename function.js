/*
  Function
  a block excuted when invoked.
  used for unit for function in programming.

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
  console.log("invoked")
}

// invoke
f();
f();


// function expression
var f = function () {
  console.log("invoked");
}

// invoke
f();


/* 
  Hoisting (게양)

  you can declare function below invoke.
  a sort of readability option.
  It's not applied to function expression.
*/


f();

function f() {
  console.log("invoked");
}


/*
  parameter and argument 

  1 parameter 
  variable that represent arguments
  
  2 argument
  actual input on function
*/


function add(x, y) { // x, y are parameters
  console.log("result:", x + y);
}

add(1, 2); // 1, 2 are arguments

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

// > result: 3


// return also can be used to stop task.
function getSquare(n) {
  if (typeof n != "number") {
    console.log("err: wrong input");
    return;
  }

  console.log(n ** 2);
}

getSquare(null);


/*
  Callback

  function argument

  1 Basic
  2 Realworld example
*/


// 1 basic usage

function f(callback) {
  var foo = "bar";

  callback(foo);
}

function cb(data) {
  console.log(data);
} 

f(cb);
// > bar


// 2 Realworld example 

function getTime() {
  var time = new Date().toLocaleTimeString();
  
  console.log(time);
}

// setInterval(callback, ms): execute callback in every ms
setInterval(getTime, 1000);


/*
  Q1. create function that prints 
  whether person an adult or not according to age input.
  if input is wrong, print error message.
*/


function isAdult(age) {
  if (typeof age !== "number") {
    console.log("err: input must be Number");
    return; 
  }

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }
}

isAdult(20);


/*
  Q2. create function that return sum from 1 to input.
*/


function f(m) {
  var sum = 0;

  for (var n = 1; n <= m; n++) {
    sum += n;  
  }

  return sum;
}

var r = f(10);

console.log(r);
// > 55
