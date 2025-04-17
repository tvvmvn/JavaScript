// Traditional methods
var beers = ["Guinness", "Heineken", "Budwiser"];

var irishBeer = beers[0];
var dutchBeer = beers[1];
var americanBeer = beers[2];

console.log(irishBeer);
console.log(dutchBeer);
console.log(americanBeer);


// Destructing 
var beers = ["Guinness", "Heineken", "Budwiser"];

var [irishBeer, dutchBeer, americanBeer] = beers;

console.log(irishBeer);
console.log(dutchBeer);
console.log(americanBeer);


// in parameters
var beers = ["Guinness", "Heineken", "Budwiser"];

f(beers);

function f([irishBeer, dutchBeer, americanBeer]) {
  console.log(irishBeer);
  console.log(dutchBeer);
  console.log(americanBeer);
}


/*
  Q. Array destructing

  assign each brand to variables with destructing.
*/


var asianCars = ["Hyundai", "Toyota"];
var [koreanCar, japaneseCar] = asianCars;

console.log(koreanBeer);
console.log(japaneseBeer);
