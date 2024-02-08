/* 
  * Object
  A composition for variables and function.
  used for unit to handle the data
  
  1 Structure 
  2 Basic usage
*/


/* 
  Structrue 

  1 property
  data that object has.
  it is composed of key and value

  2 method
  It is called methods when especially value is function.
*/


var cat = { 
  // properties (key: value)
  name: "Kitty", 
  home: null,
  sound: function () { // method
    return "meow";
  }
}

console.log(cat);


/* 
  Q. Structrue
  
  Declare an object named 'korea'

  - Properties
  1 capital city
  value: Seoul
  type: String
  
  2 population
  value: 5000
  type: Number

  3 language
  value: Korean
  type: string

  4 G7 or not
  value: No
  type: Boolean
  
  - Methods
  kpop: it plays kpop music
*/


/* 
  Basic usage
  
  1 Access properties
  2 add properties
  2 edit properties
  3 delete properties
*/


/*
  access properties
*/


var cat = { 
  name: "Kitty",
  home: null,
  sound: function () { 
    return "meow";
  }
}

console.log(cat.name);
// > Kitty
console.log(cat["name"]);
// > null
console.log(cat.sound());
// > meow
console.log(cat.color);
// > undefined


/* 
  add properties
*/


var cat = { 
  name: "Kitty",
  home: null,
  sound: function () { 
    return "meow";
  }
}

cat.age = 2;
console.log(cat);
// > ..., age: 2


/*
  edit properties
*/


var cat = { 
  name: "Kitty",
  home: null,
  sound: function () { 
    return "meow";
  }
}


cat.home = "Samsan-dong";
console.log(cat)
// > ..., home: "Samsan-dong"


/*
  delete properties
*/


var cat = { 
  name: "Kitty",
  home: null,
  sound: function () { 
    return "meow";
  }
}


delete cat.home;

console.log(cat)
// > no home 


/*
  Q1. Basic usage

  print only available beers name.
  
  > result:
  Heineken
  Budwiser
  Kirin
*/


var beers = [
  { name: "Guinness", origin: "Ireland", available: false },
  { name: "Heineken", origin: "Netherlands", available: true },
  { name: "Budwiser", origin: "USA", available: true },
  { name: "Kirin", origin: "Japan", available: true },
]


for (let i=0; i<beers.length; i++) {
  if (beers[i].available == false) {
    console.log(beers[i].name);
  }
}


/*
  Q2. Basic usage

  Irish beer is restocked. 
*/


var irishBeer = { 
  name: "Guinness", 
  origin: "Ireland",
  available: false
}

irishBeer.available = true;

console.log(irishBeer)
// > ..., available: true



