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


// empty string, null, 0 in condition is considered as false.
if ("") { 
  console.log("not executed");
}


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
  } else { optional
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

  default expression is excuted 
  when every case is false
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


var year = 2024;
var r = year === 2024 ? "This year" : "Not this year";

console.log(r);
// > This year


/*
  Q1. Make conditional statements that prints 
  a person is an adult or not according to age variable

  1 if else /  statement
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


/*
  Q2. write down switch statement that
  prints car price when inputs car name.
  (if car is not being sold, prints proper message)

  - Hybrid / Electric Car list

  1 Avante Hybrid 
  2500
  2 XM3 Hybrid
  3000
  3 KONA 
  4500
  3 IONIQ 6
  5000
*/


var car = "XM3 Hybrid";

switch (car) {
  case "Avante Hybrid":
    console.log(2500);
    break;

  case "XM3 Hybrid":
    console.log(3000);
    break;

  case "KONA":
    console.log(4500);
    break;

  case "IONIQ 6":
    console.log(5000);
    break;

  default:
    console.log("That car is not being sold");
}