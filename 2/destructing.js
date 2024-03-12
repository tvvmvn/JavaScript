/*
  Destructing
  
  1 Array Destructing 
  2 Object Destructing
*/
 
 
/* 
  Array Destructing 

  assign item of array to variables with ease
*/


var beers = ["Guinness", "Heineken", "Budwiser"];


// Traditional methods
var irishBeer = beers[0];
var dutchBeer = beers[1];
var americanBeer = beers[2];

console.log(irishBeer);
console.log(dutchBeer);
console.log(americanBeer);


// Destructing 
var [irishBeer, dutchBeer, americanBeer] = beers;

console.log(irishBeer);
console.log(dutchBeer);
console.log(americanBeer);


// with function
f(beers);

function f([irishBeer, dutchBeer, americanBeer]) {
  console.log(irishBeer);
  console.log(dutchBeer);
  console.log(americanBeer);
}


/*
  Q. Array destructing

  assign each brand to variables with destructing syntax.
*/


var asianCars = ["Hyundai", "Toyota"];
var [koreanCar, japaneseCar] = asianCars;

console.log(koreanBeer);
console.log(japaneseBeer);


/* 
  Object Destructing 

  access properties of object with ease
*/


var irishBeer = { 
  name: "Guinness", 
  origin: "Ireland", 
  available: false 
}


// Traditional
console.log(irishBeer.name);
console.log(irishBeer.origin);
console.log(irishBeer.available);


// Destructing 
var { name, origin, available } = irishBeer;

console.log(name);
console.log(origin);
console.log(available);


// with function
f(irishBeer);

function f({ name, origin, available }) {
  console.log(name);
  console.log(origin);
  console.log(available);
}


/* 
  Q. Object destructing

  access each property of object after destructing
*/


var car = { 
  name: "GV80", 
  color: "Black",
  brand: "GENESIS" 
};

var { name, color, brand } = car;


console.log(name);
console.log(color);
console.log(brand);
