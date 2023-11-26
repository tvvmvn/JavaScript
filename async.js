/* 
  * Asychronous operations 
  It is used to prevent blocking 
  e.g) fetching resources from a server.

  1 Synchronous operations
  2 Asynchronous operations
*/


/*
  Synchronous operation
  
  operations run in order 
*/


function f() {
  console.log("Operation 1");
}

f();
console.log("Operation 2");


/*
  Asynchronous operation

  Faster operation runs ahead
*/


function getData(callback) {
  setTimeout(() => {
    callback(null, "Meow");
  }, 1000);
}


getData(function (err, data) {
  if (err) {
    return console.error(err);
  }

  console.log("Data from server:", data);
});

console.log("Next operations");











