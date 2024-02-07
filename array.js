/* 
  * Array
  data type which can hold more than one value

  1 Structure
  1 Basic usage
  2 Array methods
  3 Loop array
*/


/* 
  Array structure 
*/


// items (values) in square bracket.
var arr = [10, 20, 30];

console.log(arr);


/* 
  Basic usage

  1 access item
  2 change item
  4 get the number of item
*/


// 1 access item

var arr = [10, 20, 30];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// > 10
// > 20
// > 30


// 2 change item

var arr = [10, 20, 30];

arr[2] = 99;

console.log(arr)
// > 10 20 99


// 3 get the number of items

var arr = [10, 20, 30];

console.log(arr.length);
// > 3


/*
  Q. Basic usage

  1 Create a list including TOP 5 car manufacturers.
  - Volvo, BMW, Hyundai, Toyota, Ford

  2 Change Toyota to Kia.
*/

var top5brands = ["Volvo", "Renault", "Hyundai", "Toyota", "Ford"];

top5brands[3] = "Kia";

console.log(top5brands);


/* 
  Array methods 
  perform some operations to Array.

  1 push
  2 pop
  3 concat
  4 splice
  5 sort
*/


/*
  1 push(newItem1, newItem2, ...)

  add new item at the end of an array
*/


var arr = [10, 20];

arr.push(30);

console.log(arr);
// > 10, 20, 30


/* 
  2 pop()

  remove last item of an array
*/


var arr = [10, 20, 30];

arr.pop();

console.log(arr);
// > 10, 20


/*
  3 array1.concat(array2, array3, ...) 

  concatenate another arrays after an array1
  return an new array
*/


var arr1 = [10, 20];
var arr2 = [30, 40];

var r = arr1.concat(arr2); 

console.log(r);
// > 10, 20, 30, 40


/*
  4 splice
  add or remove items at position you want

  - how to use
  splice(startIndex, deleteCount, newItem1, newItem2, ..)
  startIndex is required.
*/

var arr = [10, 20, 30, 40];

arr.splice(2);
console.log(arr);
// > 10, 20

var arr = [10, 20, 30, 40];

arr.splice(2, 1);
console.log(arr);
// > 10, 20, 40

var arr = [10, 20, 30, 40];

arr.splice(2, 1, 99);
console.log(arr);
// > 10, 20, 99, 40


/*
  5 sort()

  sort an array
  ascending in Number array
  alphabetical order in String array
*/


var arr = [10, 30, 20];

arr.sort();

console.log(arr);
// > 10, 20, 30


/* 
  Q1. Array methods

  Add new car at the end of car list 
*/
 

var cars = ["Staria", "Avante Hybrid", "IONIQ5"];
var newCar = "Casper";

cars.push(newCar);


/*
  Q2. Array methods
  
  create an asian car list.
*/


var koreanCars = ["Hyundai", "Kia"];
var japaneseCars = ["Lexus", "Nissan", "Suzuki"];

var asianCars = koreanCars.concat(japaneseCars);


/*
  Loop array
  perform some operations to array.

  1 update each item in array
  2 filtering array
*/


// 1 update each item - multiply each item by 10.
var arr = [10, 20, 30];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i] * 10);
}

// > 100 
// > 200
// > 300


// 2 filtering an array - print only adults
var ages = [12, 19, 23, 30];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] >= 18) {
    console.log(arr[i]);
  }
}

// > 19
// > 23
// > 30


/* 
  Q1. Loop array

  prints each brand names in uppercase letters
*/


var brands = ["apple", "samsung", "huawei"];

for (var i=0; i < brands.length; i++) {
  console.log(brands[i].toUpperCase());
}


/* 
  Q2. Loop array

  print items starts with b
*/


var arr = ["foo", "bar", "baz"];

for (var i=0; i<arr.length; i++) {
  if (arr[i][0] == "b") {
    console.log(arr[i]);
  }
}

// > bar
// > baz

