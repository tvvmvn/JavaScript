
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