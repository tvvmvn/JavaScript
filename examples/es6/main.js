

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