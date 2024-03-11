/*
  Arrow function
  to express anoymous function simple
*/


var f = function () {
  console.log("foo");
}

var f = () => {
  console.log("foo");
}


// omitting braces
var f = () => console.log("foo")

// omitting parameter brackets
var f = data => console.log(data);

