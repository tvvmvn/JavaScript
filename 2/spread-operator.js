/*
  Spread Operator 

  1 with Array
  2 with Object
*/


/* 
  with Array

  make items of array to copy easily.
  ...Array to copy
*/


// add new item
var beers = ["Guinness", "Heineken"];
var newBeer = "Budwiser";

var updatedBeers = [...beers, newBeer];

console.log(updatedBeers) 
// > Guinness, Heineken, Budwiser


/* 
  Q. with Array
  create an asian cars list with spread operator
*/


var koreanCars = ["Hyundai", "Kia"];
var japaneseCars = ["Toyota", "Honda"];

var asianCars = [...koreanCars, ...japaneseCars];
// > [Hyundai, Kia, Toyota, Honda]


/* 
  with Object

  make properties of object to copy easily.
  ...object to copy  
*/


var cat = {
  name: "Kitty",
  age: 1,
  home: null,
}

// adopted
var updatedCat = { ...cat, home: "Samsan-dong" };

console.log(updatedCat);


/*
  Q. with Object
  Irish beer is restocked. 
  create an updated one with spread operator.
*/


var irishBeer = { 
  name: "Guinness", 
  origin: "Ireland", 
  available: false 
};

// restock 
var updatedIrishBeer = { ...irishBeer, available: true };

console.log(updatedIrishBeer);


