/*
  * Basic Methods 
  It performs specific operation on data

  1 String method
  2 Number method
*/


/*
  String method

  1 toUpperCase
  2 indexOf
  3 substring
  4 trim
*/


/*
  1 toUpperCase()

  convert all characters to upper case letter
*/


var foo = "bar";

console.log(foo.toUpperCase());
// > BAR


/*
  2 indexOf(string to search)

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
  3 substring(startIndex, endIndex)

  extract specific characters from string.
*/


var foo = "hello world"

console.log(foo.substring(0, 4))
// > hell


/*
  4 trim()

  remove spaces in front and rear of string
  e.g) data sanitization (정제)
*/


var foo = "  bar  ";

console.log(foo.trim());
// > bar


/*
  Number method

  1 toPrecision
  2 isString
*/


/*
  1 toPrecision(count of digits to represent)

  set precision of number
*/


var PI = Math.PI;

console.log(PI)
// > 3.141592653589793 (16 digits)


var precisePI = PI.toPrecision(100);
console.log(precisePI)
// > 3.14...


/*
  2 toString()

  convert Number value to String value
*/


// toString
var year = 2023;
var yearInString = year.toString();

console.log(yearInString.toString());
// > "2023"

console.log(typeof yearInString.toString());
// > string
