/* 
  * Object
  A composition for data and function.
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
  
  Declare an object named 'korea' to be following:

  - Properties
  1 Capital city (String)
  Seoul
  
  2 Population (Number)
  5000

  3 Language (String)
  Korean

  4 Whether G7 or not (Boolean)
  No
  
  - Methods
  1 K-POP music player
*/


var korea = {
  capitalCity: "Seoul",
  population: 5000,
  language: "Korean",
  isG7: false,
  kpop: function () {
    return "Hype boy";
  }
}


/* 
  Basic usage
  
  1 access properties
  2 add properties 
  3 update properties
  4 delete properties
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
// > Kitty
console.log(cat.sound());
// > meow
console.log(cat.age);
// > undefined


// 2 add properties
var cat = { 
  name: "Kitty",
  home: null,
}

cat.age = 2;

console.log(cat);


// 3 update properties
var cat = { 
  name: "Kitty",
  home: null,
}

cat.home = "Samsan-dong";

console.log(cat);


// 4 delete properties
var cat = { 
  name: "Kitty",
  home: null,
}

delete cat.home;

console.log(cat);


/*
  Q1. Basic usage

  answer these 2 questions refers to list below

  1 print only names of available beers.
  
  > result:
  Heineken
  Budwiser
  Kirin

  2 Guinness is restocked, update list.
*/


var beers = [
  { name: "Guinness", available: false },
  { name: "Heineken", available: true },
  { name: "Budwiser", available: true },
  { name: "Kirin", available: true },
]

// 1
for (var i = 0; i < beers.length; i++) {
  if (beers[i].available == true) {
    console.log(beers[i].name);
  }
}

// 2
for (var i = 0; i < beers.length; i++) {
  if (beers[i].name == "Guinness") {
    beers[i].available = true;
  }
}
