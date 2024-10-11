/*
  Arrow function
  
  you can write anonymous function simple

  1 basic usage
  2 omitting brace
  3 omitting parameter brackets
*/


/*
  basic usage
*/


var f = function () {
  console.log("foo");
}

// with arrow function
var f = () => {
  console.log("foo");
}


/* 
  2 omitting braces

  return value behind arrow.
*/


var add = (x, y) => {
  return x + y;
}


// omitting brace
var add = (x, y) => x + y;


/* 
  3 omitting parameter brackets

  you can omit bracket if function has only one parameter.
*/


var pow = n => n ** 2;



