/*
  OPERATOR 
  
  1 Arithmetic operator
  2 Assignment operator
  3 Comparison operator
  4 Logical operator
  5 Type operator
*/


/*
  Arithmetic operator

  1 The 4 rules
  2 increment operator
  3 decrement operator
  4 exponentiation operator
  5 modulus operator
*/


/*
  1 The 4 rules

  +, -, *, /
*/


var add = 1 + 1;
var subtract = 2 - 1;
var multiply = 2 * 2;
var divide = 1 / 2;


console.log("1 + 1 =", add);
console.log("2 - 1 =", subtract);
console.log("1 * 2 =", multiply)
console.log("1 / 2 =", divide);

// > 2
// > 1
// > 0.5
// > 4


/*
  2 increment operator
  increase variable by 1

  variables++
*/


var n = 1;

n++;

console.log(n);
// > 2


/*
  3 decrement operator
  decrease variable by 1

  variables--
*/


var n = 1;

n--;

console.log(n);
// > 0


/*
  4 Exponentiation operator  
  
  base ** exponent
*/

 
var exp = 2 ** 7;

console.log(exp);
// > 128


/*
  5 Modulus operator
  It returns modulus of division

  dividend % divisor
*/
 
 
var mod = 5 % 2;

console.log(mod)
// > 1


/*
  Assignment operator

  1 Variables assignment operator
  2 Addition assignment operator
  3 Substraction assignment operator
  4 Multiply assignment operator
  5 Division assignment operator
  6 Exponentiation assignment operator
  7 Moduls assignment operator
*/


/*
  1 Variable assignment operator
  assign variable to value.

  variable = value
*/


var foo = "bar";


/*
  2 Addition assignment operator
  
  performs addition on the two operands and
  assigns the result to the left operand.
  
  operand1 += operand2
*/ 


var n = 1;

// n = n + 1
n += 1; 

console.log(n) 
// > 2


/*
  Comparison operator

  1 Equal operator
  2 Strict equal operator
  3 Not equal operator
  4 Strict not equal operator
  5 gt operator
  6 gte operator
  7 lt operator
  8 lte operator
*/


/*
  1 Equal operator

  expr1 == expr2

  return true if exprs are equal
  return false if exprs are not equal
*/


console.log(1 == 2);
console.log("foo" == "bar");
console.log(0 == false);
console.log(2023 == "2023"); 

// > false
// > false
// > true
// > true


/*
  2 Strict equal operator

  expr1 === expr2

  return true if exprs are strictly equal
  return false if exprs are strictly not equal
*/


console.log(1 === 2); 
console.log("foo" === "bar");
console.log(0 === false); 
console.log(2023 === "2023"); 

// > false
// > false
// > false
// > false


/*
  3 Not equal operator

  expr1 != expr2

  return true if exprs are not equal
  return false if exprs are equal
*/


console.log(1 != 2) 
console.log("foo" != "bar");
console.log(0 != false);
console.log(2023 != "2023");

// > true
// > true
// > false
// > false


/*
  4 Strict not equal operator

  expr1 !== expr2

  return true if exprs are strictly not equal
  return false if exprs are strictly equal
*/


console.log(1 !== 2) 
console.log("foo" !== "bar");
console.log(0 !== false); 
console.log(2023 !== "2023") 

// > true
// > true
// > true
// > true


/*
  5 gt(greater than) operator
  >

  6 gte(greater than or equal) operator
  >=

  7 lt(less than) operator
  <

  8 lte(less than or equal) operator
  <=
*/


console.log(1 > 0);
console.log(1 >= 0);
console.log(1 < 0);
console.log(1 <= 0);

// > true
// > false
// > false
// > false


/*
  Logical operator

  1 && (AND)
  2 || (OR)
  3 ! (NOT)
*/


/*
  1 && (AND)
  expr 1 && expr 2 

  return true when both expr1 and expr2 are true. 
  if not, return false.
*/


console.log(1 > 0 && 1 < 2);
// > true


/* 
  2 || (OR)
  expr 1 || expr 2 

  return true when either one is true or both are true
  if not, return false.
*/


console.log(1 > 0 || 1 > 2);
// > true


/* 
  3 NOT Operator
  !expr 

  make expression reverse
*/


console.log(!true); 
// > false


// # NOT with no Boolean
console.log("숫자 부정:", !2023);
console.log("0 부정:", !0);
console.log("문자열 부정:", !"foo");
console.log("빈문자열 부정:", !"");
console.log("null 부정:", !null);

// > false
// > true
// > false
// > true
// > true


/*
  Type operator
  
  return type of variables
*/


var foo = "bar";

console.log(typeof foo); 
// > string


/*
  Q. Operator

  converts following sentences into codes (operation)
  and print result out.

  1. empty string and false are equal.
  2. null and false are not equal.
  3. 1 is equal to true, and 0 is equal to false.
*/


console.log("" == false);
console.log(null != false);
console.log(1 == true && 0 == false);

// true
// true
// true