/* 
  String (문자열)
  
  1 Access each character
  2 Get the number of characters
  3 String concatenation
  4 String and backtik
  5 String methods
*/


/*
  Access each character
*/


var foo = "bar";

// index
console.log(foo[0]); 
// > b
console.log(foo[1]);
// > a
console.log(foo[2]); 
// > r


/*
  Get the number of characters 
*/


console.log(foo.length);
// > 3



/*
  String concatenation
*/


var s = "hello" +  " world";

console.log(s);
// > hello world


// # add number with string
var s = "hello " + 2024;

console.log(s);
// > "hello 2024"


/*
  String and backtik
  
  1 write multi-line texts
  2 writes variable in String
*/


// multi-line text
var s = `I'm not a gay,
you are gay.`

console.log(s);


// write variable in String
var name = "Kitty";

console.log(`cat name is ${name}`);


/*
  String method
  It performs specific operation on String
  
  1 toUpperCase / toLowerCase
  2 indexOf
  3 substring
  4 trim
*/


/*
  1 toUpperCase() / toLowerCase()

  convert all characters to uppercase or lowercase letter
*/


var foo = "bar";

console.log(foo.toUpperCase());
// > BAR


/*
  2 indexOf(searchString, position)

  It gets index of argument string.
  position is optional, default is 0
*/


var s = "hello world";

console.log(s.indexOf("e"));
// 1
console.log(s.indexOf("l"));
// 2
console.log(s.indexOf("l", 5));
// 9
console.log(s.indexOf("world"));
// 6
console.log(s.indexOf("bar"));
// -1


/*
  3 substring(startIndex, endIndex)

  extract specific characters from string.
  endIndex is optional.
*/


var s = "hello world";

console.log(s.substring(0, 4))
// hell

console.log(s.substring(0));
// hello world


/*
  4 trim()

  remove spaces in front and rear of string.
  for examples, data sanitization (정제)
*/


var foo = "  bar  ";

console.log(foo.trim());
// > bar


/*
  Q. String method

  extract letters from Q to last letter from variables.
*/


var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var startIndex = alphabet.indexOf("Q");

console.log(alphabet.substring(startIndex));


