/*
  Loop statement
  executes a block multiple times.
  
  1 for statement
  2 while statement
*/


/* 
  for statement

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

  expr1 - variables initialization
  expr2 - loop condition
  expr3 - variable update operation
*/


for (var n = 1; n <= 10; n++) {
  // access loop variable 
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
  3 break 

  you can escape from loop 
*/


for (var n = 1; n <= 10; i++) {
  if (n == 5) {
    break;
  }

  console.log(n);
}

// > 1, 2, 3, 4


/*
  4 continue

  skip current block
*/


for (var n = 1; n <= 10; n++) {
  if (n == 5) {
    continue;
  }

  console.log(n);
}


/*
  Q. for statement
  
  write for statements that printing even numbers between 1 - 10.
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
  console.log(n);
}


/* 
  while statement

  while (loop condition) {
    codes to iterate
  }
*/


// variables initialization
var n = 1;

while (n <= 10) {
  console.log(n + "times executed");

  // variable update operation
  n++;
};


// break, continue also can be used.
var n = 1;

while (true) {
  if (n == 5) {
    break;
  }
  
  console.log(n);

  n++;
}


/*  
  Q. while statement

  write down while statements that get sum from 1 - 10.
*/


var n = 1;
var sum = 0;

while (n <= 10) {
  sum += n;

  n++;
}

console.log(sum);