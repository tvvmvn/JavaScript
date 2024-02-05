/*
  Conditional statement
  
  1 if statement
  2 switch statement
  3 ? (ternary) statement
*/


/*
  if statement 

  1 if statement
  2 if/else statement
  3 if/else if statement
*/
 

 /*
  1 if statement
  
  if (condition) {
    codes when condition is true
  }
*/


var year = 2024

if (year === 2024) {
  console.log("This year")
}
// > This year


/*
  2 if / else statement

  if (condition) {
    codes when condition is true
  } else {
    codes when condition is false
  }
*/

var year = 2024;

if (year === 2024) {
  console.log("This year")
} else {
  console.log("Not this year")
}
// > This year


/*
  3 if / else if statement

  if (condition1) {
    codes when condition1 is true
  } else if (condition2) {
    codes when condition2 is true
  } else { // optional
    codes when all conditions is false
  }
*/


var year = 2024;

if (year === 2023) {
  console.log("Last year")
} else if (year === 2024) {
  console.log("This year")
} else if (year === 2025)  {
  console.log("Next year")
} else {
  console.log("Not close year");
}
// > This year


/*
  Switch statement
  performs strict equal comparison operation
  between argument and case.

  1 Basic usage
  2 default block
*/


/* 
  1 Basic usage
*/


var year = 2024;

switch (year) {
  case 2023:
    console.log("Last year");
    break;

  case 2024:
    console.log("This year");
    break;

  case 2025:
    console.log("Next year");
    break;
}

// > This year


/*
  2 default keyword

  excuted when every case is false
*/


var year = 2024;

switch(year) {
  case 2023:
    console.log("Last year");
    break;

  case 2024:
    console.log("This year");
    break;

  case 2025:
    console.log("Next year");
    break;
  
  default:
    console.log("Not a close year");
}



/* 
  ? (ternary) statement

  condition ? value1 : value2
  
  condition is true, return value 1 
  condition is false, return value 2
*/


var year = 2023;
var r = year === 2023 ? "This year" : "Not this year";

console.log(r);
// > This year


/*
  Q. Make conditional statements that prints 
  a person is an adult or not according to age variable

  1 if else statement
  2 ternary statement
*/


// 1 if / else statement

var age = 20;

if (age >= 18) {
  console.log("an adult.")
} else {
  console.log("not an adult.")
}

// > an adult


// 2 ternary statement

var age = 20;

var r = age >= 18 ? "an adult" : "not an adult";

console.log(r)

// > an adult