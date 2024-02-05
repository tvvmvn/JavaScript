/*
  * Basic Methods 
  It performs specific operation on data

  1 String method
  2 Number method
*/


/*
  String method

  1 toUpperCase / toLowerCase
  2 indexOf
  3 substring
  4 trim
*/


/*
  1 toUpperCase() / toLowerCase()

  convert all characters to uppercase/lowercase letter
*/


var foo = "bar";

console.log(foo.toUpperCase());
// > BAR


/*
  2 indexOf(searchString, position(optional, default is 0))

  returns index of argument
*/


var s = "hello world";

console.log(s.indexOf("e"));
//  1
console.log(s.indexOf("l"));
// 2
console.log(s.indexOf("l", 5));
// 9
console.log(s.indexOf("world"));
// 6
console.log(s.indexOf("bar"));
// -1


/*
  3 substring(startIndex, endIndex(optional))

  extract specific characters from string.
*/


var s = "hello world";

console.log(s.substring(0, 4))
// hell

console.log(s.substring(0));
// hello world


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


var year = 2023;

console.log(year.toString());
// > "2023"
console.log(typeof year.toString());
// > string



/*
  Q. Method

  extract letters from Q to last letter from variables.
*/


var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var startIndex = alphabet.indexOf("Q");

console.log(alphabet.substring(startIndex));


