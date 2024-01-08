/*
  * Basic Methods 
  it performs specific operation on data

  1 String method
  2 Number method
*/


/*
  String method

  1 toUpperCase
  2 indexOf
  3 trim
  4 substring
*/


/*
  toUpperCase

  tranform all characters to upper case letter
*/


var foo = "bar";

console.log(foo.toUpperCase());
// > BAR


/*
  indexOf(string to search)

  returns index of argument
*/


var foo = "bar"

console.log(foo.indexOf("b"))
// > 0
console.log(foo.indexOf("ba"))
// > 0
console.log(foo.indexOf("z"))
// > -1


/*
  trim

  remove spaces in front and rear of string
  for example, data sanitization (정제)
*/


var foo = "  bar  ";

console.log(foo.trim());
// > bar


/*
  substring(startIndex, endIndex)

  extract some characters from string
*/


var foo = "hello world"

console.log(foo.substring(0, 4))
// > hell


/*
  Number method

  1 toPrecision
  2 isString
*/


/*
  toPrecision

  set precision of Number value
*/


var pi = Math.PI;

console.log(pi)
// > 3.141592653589793 (16 digits)


var precisePi = pi.toPrecision(100);
console.log(precisePi)
// > 3.14...


/*
  toString

  transform Number value to String value
*/


// toString
var year = 2023;
var yearInString = year.toString();

console.log(yearInString.toString());
// > "2023"
console.log(typeof yearInString.toString());
// > string
