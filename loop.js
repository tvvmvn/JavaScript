/*
  * Loop statement
  executes a block of code multiple times.
  
  1 for statement
  2 whie statement
*/


/* 
  * for loop 

  1 basic usage
  2 usecases
  3 break
*/


/*
  Basic usage

  for (expr1; expr2; expr3) 
  {
    codes to iterate
  }

  expr1 - set initial value of variable
  expr2 - loop condition
  expr3 - variable update operation
*/


for (var n = 1; n <= 10; n++) {
  // access loop variable in block
  console.log(n + "times executed"); 
}


/*
  Usecases
*/


// get sum on 1 - 10
var sum = 0;

for (var n = 1; n <= 10; n++) {
  sum += n;
}

console.log(sum);
// > 55


/*
  break

  escaping from loop 
*/


// Speed limit on 60km/h
for (var speed = 0; speed < 200; speed++) {
  
  if (speed > 60) {
    console.log("Slow down!")
    break;
  }

  console.log(speed + "km/h");
}


/* 
  * while loop 

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
  Q. get sum of 1/1, 1/2, 1/3, ... 1/10 using for loop
*/


var sum = 0;

for (var n = 1; n <= 10; n++) { 
  sum += (1/n);
}

console.log(sum);


