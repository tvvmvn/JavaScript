/*
  ES5 & ES6 Methods

  1 Array methods
  2 other methods
*/


/*
  Array methods

  1 forEach
  2 map
  3 filter
*/


/*
  1 forEach 

  It has callback as argument
  callback has 3 parameters.

  1 item
  each item of array
  2 index
  index of each item
  3 self
  original array 
*/


// multiply by 10 to each item
var arr = [10, 20, 30];

arr.forEach(function (item, index, self) {
  console.log(item * 10);
})


/* 
  2 map

  almost same as forEach methods.
  it returns new Array.
*/


var arr = [10, 20, 30];

var newArr = arr.map(function (item, index, self) {
  return item * 10;
})

console.log(newArr);
// > 100, 200, 300


/* 
  3 filter 

  It has callback as argument
  callback has 3 parameters.
  It returns filtered new array.
*/


var ages = [13, 20, 34, 40];

var adults = ages.filter(function (age, index, self) {
  return age >= 18;
});

console.log(ages);
// > 20, 34, 40


/*
  Q. Array methods  
  Answer these questions refers to an array below.

  1 print names of available beers.
  
  result
  > Heineken
  > Budwiser
  > Kirin

  2 create an array having only available beers
*/


var beers = [
  { name: "Guinness", available: false },
  { name: "Heineken", available: true },
  { name: "Budwiser", available: true },
  { name: "Kirin", available: true },
]

// Q1
beers.forEach(function (beer) {
  if (beer.available) {
    console.log(beer.name);
  }
})

// Q2
var availableBeers = beers.filter(function (beer) {
  return beer.available;
})


/*
  other methods

  1 Object.keys
*/


/*
  1 Object.keys
  return keys of object as String array
*/


var cat = {
  name: "Kitty",
  home: null,
  sound: function () {
    return "Meow";
  }
}

var keys = Object.keys(cat);

console.log(keys) 
// > name, home, sound

