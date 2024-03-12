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

var f = () => {
  console.log("foo");
}


/* 
  2 omitting braces

  return value behind arrow.
*/


var add = (x, y) => x + y;

var r = add(1, 2);

console.log(r);


/* 
  3 omitting parameter brackets

  you can omit bracket if function has only one argument.
*/


var pow = n => n ** 2;



