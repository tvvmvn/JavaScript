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
  sequence of characters. 
  write down inside '' or ""
*/


var foo = "bar";
console.log(foo);


var foo = 'bar';
console.log(foo);


console.log('I\'m not a Gay');


/*
  Number
  
  types of value

  1. Integer
  2. Fraction number (분수)
  3. NaN(Not a number)
  4. +Infinity
  5. -Inifinity
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
  
  It has value of true or false
*/


var bool = true;

console.log(bool);
// > true


// for example, comparison operation return boolean.
console.log(1 > 0);
// > true


/*
  undefined
  data type that not defined variable has.
  value is also undefined.
*/ 


var foo;

console.log(foo); 
// > undefined


/*
  null

  Not a data type. It points to "empty".
*/

 
var foo = null;

console.log(foo); 
// > null


/*
  Q. Data Type

  writes cat info below into variables.
  (data type or value inside bracket)

  his name is Kitty. (String)
  she is street cat, so he has no sweet home. (null)
  she is 2 years old. (Number)
  she is cute. (Boolean)
*/  


var name = "Kitty";
var home = null;
var age = 2;
var isCute = true;





