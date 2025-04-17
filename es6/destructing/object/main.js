
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
