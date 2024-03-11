/*
  Regular Expression (RegExp)
  It provides pattern to search string.

  1 How to use
  /pattern/

  2 methods
  regex.test(string)
*/


var lowerCase = /[a-z]/
var upperCase = /[A-Z]/
var number = /[0-9]/
var myPassword = "123"

console.log(lowerCase.test(myPassword))
console.log(upperCase.test(myPassword))
console.log(number.test(myPassword))
