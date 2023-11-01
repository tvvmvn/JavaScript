/* 
  * Asychronous operations 
  It is used to prevent blocking 
  e.g) when fetching resources from a server.

  1 Synchronous operations
  2 Asynchronous operations
*/


/*
  Synchronous operation
  
  code is executed in order 
*/

function f() {
  console.log("Operation 1");
}

f();
console.log("Operation 2");


/*
  Asynchronous operation

  Faster operation is executed ahead
*/


// Pretending that it takes 1s to get data from server.
function getData(callback) {
  setTimeout(() => {
    callback(null, "Meow");
  }, 1000);
}

getData(function (err, data) {
  if (err) {
    throw err;
  }

  console.log("Data from server:", data);
});

console.log("Next operations");











