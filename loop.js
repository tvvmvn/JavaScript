/*
  Loop statement
  executes a block of code multiple times.
  
  1 for statement
  2 whie statement
*/


/* 
  for loop 

  1 basic usage
  2 usecases
  3 break keyword
  4 continue keyword
*/


/*
  1 Basic usage

  for (expr1; expr2; expr3) 
  { 
    codes to iterate
  }

  expr1 - set initial value of loop variable
  expr2 - loop condition
  expr3 - variable update operation
*/


for (var n = 1; n <= 10; n++) {
  // access loop variable in block
  console.log(n + "times executed"); 
}


/*
  2 Usecases
*/


// get sum on 1 - 10
var sum = 0;

for (var n = 1; n <= 10; n++) {
  sum += n;
}

console.log(sum);
// > 55


/*
  3 break keyword

  escaping from loop meeting specific condition
*/


for (var n = 1; n <= 10; i++) {
  if (n == 5) {
    break;
  }

  console.log(n);
}


/*
  4 continue

  skip block meeting specific condition
*/


for (var n = 1; n <= 10; n++) {
  if (n == 5) {
    continue;
  }

  console.log(n);
}


/* 
  while loop 

  while (loop condition) {
    codes to iterate
  }
*/


// initial value of variable
var n = 1;

while (n <= 10) {

  console.log(n + "times executed");

  // variable update operation
  n++;
};


/*  
  Q1. write down for / while statements 
  that get sum of 1/1, 1/2, 1/3, ... 1/10.
*/


// 1 for loop
var sum = 0;

for (var n = 1; n <= 10; n++) { 
  sum += (1 / n);
}

console.log(sum);


// 2 while loop
var n = 1;
var sum = 0;

while (n <= 10) {
  sum += (1 / n);

  n++;
}

console.log(sum);



/*
  Q2. write for statements that printing even numbers between 1 - 10.
*/


for (var n = 1; n <= 10; n++) {
  if (n % 2 == 0) {
    console.log(n);
  }
}


for (var n = 1; n <= 10; n++) {
  if (n % 2 == 1) {
    continue;
  }

  console.log(n);
}


for (var n = 2; n <= 10; n += 2) {
  if (n % 2 == 0) {
    console.log(n);
  }
}