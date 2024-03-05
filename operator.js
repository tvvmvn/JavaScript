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

  1) add (+)
  2) subtract (-)
  3) multiply (*)
  4) divide (/)
*/


var add = 1 + 1;
var subtract = 2 - 1;
var divide = 1 / 2;
var multiply = 1 * 2;


console.log("1 + 1 =", add);
console.log("2 - 1 =", subtract);
console.log("1 / 2 =", divide);
console.log("1 * 2 =", multiply)

// > 2
// > 1
// > 0.5
// > 2


/*
  2 increment operator
  increase variable by 1

  var++
  
  3 decrement operator
  decrease variable by 1

  var--
*/


var i = 1;

i++;

console.log(i);
// > 2


/*
  4 Exponentiation operator  
  
  base ** exponent
*/
 
 
var exp = 2 ** 7;

console.log(exp);
// > 128


/*
  5 Modulus (Devision remainder) operator
  
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
  =
*/


var foo = "bar";


/*
  2 Addition assignment operator
  
  +=

  performs addition on the two operands 
  and assigns the result to the left operand.
*/ 


var n = 1;

n += 1; // n = n + 1

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
// > true
console.log("foo" != "bar");
// > true
console.log(0 != false);
// > false
console.log(2023 != "2023");
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

// true
// false
// false
// false


/*
  Logical operator

  1 AND operator 
  2 OR Operator
  3 Not operator
*/


/*
  1 AND operator
  expr 1 && expr 2 

  return true when both expr1 and expr2 are true. 
*/


console.log(1 > 0 && 1 < 2) 
// > true


/* 
  2 OR Operator
  expr 1 || expr 2 

  return true when either one is true or both are true
*/

console.log(1 > 0 || 1 > 2) 
// > true


/* 
  3 NOT Operator
  !expr 

  make expression reverse
*/


console.log(!true); 
// > false


// # NOT with no Boolean
console.log("not number:", !2023);
console.log("not 0:", !0);
console.log("not string:", !"foo");
console.log("not emptry string:", !"");
console.log("not null:", !null)

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

  write down following sentences into codes (operation)
  and print result out.

  2. empty string and false are equal.
  1. null and false are not equal.
  3. 1 is equal to true, and 0 is equal to false.
*/


console.log("" == false);
console.log(null != false);
console.log(1 == true && 0 == false)

// true
// true
// true