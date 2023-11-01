/*
  ES6 Methods

  1 Array.map
  2 Array.filter (ES 5)
  3 Object.keys
*/


/* 
  Array.map

  perform specific operation to Array.
  return updated Array.
*/


// multiply by 10 to each item
var arr = [10, 20, 30];

var updatedArr = arr.map(function (item, index, self) {
  return item * 10;
})

console.log(updatedArr);
// > 100, 200, 300


/* 
  Array.filter (ES 5)
*/


var ages = [13, 20, 34, 40];

var adults = ages.filter(function (age, index, self) {
  return age >= 18;
});

console.log(ages);
// > 20, 34, 40


/*
  Object.keys

  return keys of object as string array
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


/*
  Q. get new array with all items in uppercase 
  using beers array.
*/


var beers = ["guinness", "heineken", "budwiser"];

var updatedBeers = beers.map(function (beer) {
  return beer.toUpperCase();
})

console.log(updatedBeers);
// > GUINNESS, HEINEKEN, BUDWISER