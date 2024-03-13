/*
  Destructing
  
  1 Array Destructing 
  2 Object Destructing
*/
 
 
/* 
  Array Destructing 

  assign item of array to variables easily
*/


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


/* 
  Object Destructing 

  assign properties of object to variables easily
*/


// Traditional
var irishBeer = { 
  name: "Guinness", 
  origin: "Ireland", 
  available: false 
}

var name = irishBeer.name;
var origin = irishBeer.origin;
var available = irishBeer.available;

console.log(name);
console.log(origin);
console.log(available);


// with destructing 
var irishBeer = { 
  name: "Guinness", 
  origin: "Ireland", 
  available: false 
}

var { name, origin, available } = irishBeer;

console.log(name);
console.log(origin);
console.log(available);


// in parameters
var irishBeer = { 
  name: "Guinness", 
  origin: "Ireland", 
  available: false 
}

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
