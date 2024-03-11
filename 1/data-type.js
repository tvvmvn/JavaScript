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
console.log(Number.MAX_VALUE);
// > 1.7e+308

var infinity = Number.MAX_VALUE * 1.1;
console.log(infinity)
// > Infinity


// Negative Infinity

// min value of Number type
console.log(-Number.MAX_VALUE); 
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


// comparison operation return Boolean value.
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

  convert cat info below into variables.
  (Data type or value inside bracket)

  1 name: Kitty (String)
  2 age: 2 years old (Number)
  3 cute or not: yes (Boolean)
  4 home: no home cuz she is street cat (null)
*/  


var name = "Kitty";
var home = null;
var age = 2;
var isCute = true;





