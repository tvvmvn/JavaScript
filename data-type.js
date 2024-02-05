/*
  DATA TYPE 

  1 String
  2 Number
  3 Boolean
  4 undefined
  5 null
*/


/* 
  String (문자열)
  
  1 value of String
  2 access each character
  3 get the number of characters
*/


/*
  1 value of String

  sequence of characters. 
  write down inside '' or ""
*/


var foo = "bar";

console.log(foo);
// > bar


/*
  2 access each character

  accessible with index
*/


console.log(foo[0]); 
// > b
console.log(foo[1]);
// > a
console.log(foo[2]); 
// > r


/*
  3 get the number of characters
  
  length property
*/


console.log(foo.length);
// > 3


/*
  Number
  
  1 value of Number type
*/


/*
  1 value of Number type

  1) Integer
  2) Fraction number (분수)
  3) NaN(Not a number)
  4) +Infinity
  5) -Inifinity
*/


// Integer
var year = 2023;
console.log(year);
// > 2023


// Fraction number
var pi = 3.14
console.log(pi);
// > 3.14


// NaN
var nan = 2 - "foo"
console.log(nan);
// > NaN


// Positive Infinity

// max value of Number type
var max_value = Number.MAX_VALUE;
console.log(max_value);
// > 1.7e+308

var infinity = Number.MAX_VALUE * 1.1;
console.log(infinity)
// > Infinity


// Negative Infinity

// min value of Number type
var negative_max_value = -Number.MAX_VALUE;
console.log(negative_max_value); 
// > -1.7e+308

var negative_infinity = -Number.MAX_VALUE * 1.1;
console.log(negative_infinity)
// > -Infinity


/*
  Boolean
  a data type than has true or false value

  1 value of Boolean type
*/


/*
  1 value of Boolean type
  
  true or false
*/


var bool = true;

console.log(bool);
// > true


// for example, comparison operation return boolean.
console.log(1 > 0);
// > true


/*
  undefined
  data type that not defined variable has

  1 value of undefined type
*/ 
 
 
 /*
  1 value of undefined type
  
  undefined
*/


var foo;

console.log(foo); 
// > undefined


/*
  null
  a data type that points to "empty".
  (it's not actually a data type)
  
  1 value of null type
*/
 
 
 /*
  1 value of null type
  
  null
*/


var foo = null;

console.log(foo); 
// > null



/*
  Q. Data Type
  convert these cat info into variables.

  1 name
  value: Kitty 
  type: String

  2 home
  value: no home (street cat)
  type: null

  3 age
  value: 2 years-old
  type: number

  4 isCute 
  value: cute 
  type: Boolean
*/  


var name = "Kitty";
var home = null;
var age = 2;
var isCute = true;





