/*
  Conditional statement
  
  1 if statement
  2 if else statement
  3 else if statement
  2 switch statement
  3 ? (ternary) statement
*/


/*
  if statement 

  if (condition) {
    codes when condition is true
  }
*/


var year = 2023

if (year === 2023) {
  console.log('This year')
}
// > This year


/*
  if-else statement

  if (condition) {
    codes when condition is true
  } else {
    codes when condition is false
  }
*/


if (year === 2023) {
  console.log('This year')
} else {
  console.log('Not this year')
}
// > This year


/*
  else if statement

  if (condition1) {
    codes when condition1 is true
  } else if (condition2) {
    codes when condition2 is true
  } else {
    codes when all conditions is false
  }
*/


if (year === 2022) {
  console.log('Last year')
} else if (year === 2023) {
  console.log('This year')
} else if (year === 2024)  {
  console.log('Next year')
} else {
  console.log('Not close year');
}
// > This year


/*
  2 Switch
  perform strict equal comparison operation.

  1 Basic usage
  2 default block
*/


/* 
Basic usage
*/


var year = 2023;

switch(year) {
  case 2022:
    console.log('Last year');
    break;

  case 2023:
    console.log('This year');
    break;

  case 2024:
    console.log('Next year');
    break;
}
// > This year


/*
  default block

  excuted when every case is false
*/


var year = 2030;

switch(year) {
  case 2022:
    console.log('Last year');
    break;

  case 2023:
    console.log('This year');
    break;

  case 2024:
    console.log('Next year');
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
var r = year === 2023 ? 'This year' : 'Not this year';

console.log(r);
// > This year


/*
  Q. Make conditional statements that prints 
  he is an adult or not according to age variable

  1 if else statement
  2 ternary statement
*/


// if else statement
var age = 20;

if (age >= 18) {
  console.log("He is an adult.")
} else {
  console.log("He is not an adult.")
}
// > he is an adult


// ternary statement
var age = 20;

var r = age >= 18 ? 'He is an adult' : 'He is not an adult';
console.log(r)
// > he is an adult