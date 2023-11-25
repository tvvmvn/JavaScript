/* 
  * Object
  A composition for variables and function.
  unit to handle the data
  
  1 Structure 
  2 Basic usage
*/


/* 
  Object structrue 

  1 property
  data that object has.
  it is composed of key and value

  2 method
  property that value is function
*/


var cat = { 
  // properties (key: value)
  name: "Kitty", 
  home: null,
  sound: function () { // method
    return "meow";
  }
}


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
  Q1.
  Declare an object named 'korea'

  1 properties
  capital city: String
  population: Number
  languague: string
  isG7: Boolean
  
  2 method
  kpop - it plays kpop music
*/


/*
  Q2. Irish beer is restocked.
*/


var irishBeer = { 
  name: "Guinness", 
  origin: "Ireland",
  available: false
}

irishBeer.available = true;

console.log(irishBeer)
// ..., available: true


/*
  Q3. print each beer name with uppercase using Array loop.
  
  result:
  GUINNESS
  HEINEKEN
  BUDWISER
*/


var beers = [
  { name: "Guinness", origin: "Ireland", available: false },
  { name: "Heineken", origin: "Netherlands", available: true },
  { name: "Budwiser", origin: "USA", available: true },
]

for (let i=0; i<beers.length; i++) {
  console.log(beers[i].name.toUpperCase());
}

// additionally if need
for (let i=0; i<beers.length; i++) {
  if (beers[i].available == false) {
    console.log(beers[i].name);
  }
}



