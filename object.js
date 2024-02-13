/* 
  * Object
  A composition for variables and function.
  used for unit to handle the data
  
  1 Structure 
  2 Basic usage
*/


/* 
  Structure 

  1 properties
  data that object has.
  it is composed of key and value

  2 methods
  has function value in properties.
*/


var cat = { 
  // key: value
  name: "Kitty", 
  home: null,
  sound: function () { // methods
    return "meow";
  }
}


/* 
  Q. Structrue
  
  Declare an object named 'Korea' to be following:

  - Properties
  1 Capital city
  value: Seoul
  type: String
  
  2 Population
  value: 5000
  type: Number

  3 Language
  value: Korean
  type: string

  4 Whether G7 or not
  value: No
  type: Boolean
  
  - Methods
  1 K-POP music player
  play K-POP music
*/


/* 
  Basic usage
  
  1 access properties
  2 add / update properties
  3 delete properties
*/


// 1 access properties
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


// 2 add / update properties
var cat = { 
  name: "Kitty",
  home: null,
}

cat.age = 2;

cat.sound = function () {
  return "meow";
}

cat.home = "Samsan-dong";


// 4 delete properties
var cat = { 
  name: "Kitty",
  home: null,
}

delete cat.home;


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