/*
  * DATA TYPE 

  1 String
  2 Number
  3 Boolean
  4 null
  5 undefined
*/


/* 
  String (문자열)
  
  1 value
  a sequence of characters. 

  2 access each character

  3 get the number of characters
*/


// value inside '' or ""
var foo = "bar";

console.log(foo); 
// > foo
console.log(typeof foo);
// > string


// access each character
console.log(foo[0]); 
// > b
console.log(foo[1]);
// > a
console.log(foo[2]); 
// > r


// get the number of characters
console.log(foo.length);
// > 3


/*
  Number
  
  1 value
  1) integer
  2) fraction number (분수)
  3) NaN(Not a number)
  4) +Infinity
  5) -Inifinity
*/


// Integer
var year = 2023;
console.log(year);
// > 2023
console.log(typeof year)
// > number


// fraction number
var pi = 3.14
console.log(pi);
// > 3.14


// NaN
var nan = 2 - "foo"
console.log(nan);
// > NaN


// Max value of Number
var max_value = Number.MAX_VALUE;
console.log(max_value);
// > 1.7e+308


// Negative max value of Number 
var negative_max_value = -Number.MAX_VALUE;
console.log(negative_max_value); 
// > -1.7e+308


// Positive Infinity
var infinity = Number.MAX_VALUE * 1.1;
console.log(infinity)
// > Infinity


// Negative Infinity
var negative_infinity = -Number.MAX_VALUE * 1.1;
console.log(negative_infinity)
// > -Infinity


/*
  Boolean

  1 value
  true or false
*/


var bool = true;

console.log(bool);
// > true
console.log(typeof bool) 
// > boolean


// Comparison operation return boolean.
console.log(1 > 0);
// > true


/*
  null
  it means "empty"

  1 value
  null
*/


var foo = null;

console.log(foo); 
// > null
console.log(typeof foo);
// > object


/*
  undefined
  data type that not defined variable has

  1 value
  undefined
*/ 


var foo;

console.log(foo); 
// > undefined
console.log(typeof foo); 
// > undefined





