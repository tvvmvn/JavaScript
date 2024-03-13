/* 
  Sync / Async operation 
  
  1 Synchronous operations
  2 Asynchronous operations
*/


/*
  Synchronous operation
  
  Operations run in order.
  Most cases in programming.
*/


function f() {
  console.log("Operation 1");
}

f();
console.log("Operation 2");


/*
  Asynchronous operation

  It is used to prevent blocking in program.
  for example, when fetching resources from a server
*/


function getData(callback) {
  setTimeout(function () {
    callback(null, "Meow");
  }, 1000);
}

getData(function (err, data) {
  if (err) {
    return console.error(err);
  }

  console.log("data from server:", data);
});

// faster operation runs ahead 
console.log("next operations");











