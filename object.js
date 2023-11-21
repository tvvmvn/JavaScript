/* 
  * Object
  composition for data and function
  
  1 structure of Object
  1 Access properties
  2 update object
*/


/* 
  Structrue of Object

  1 property
  data that object has.
  it is composed of key and value
  key is used to find a value

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
Access properties
*/


var cat = { 
  name: "Kitty",
  home: null,
  sound: function () { 
    return "meow";
  }
}

console.log(cat);
// > {..}
console.log(cat.name);
// > Kitty
console.log(cat["name"]);
// > null
console.log(cat.color);
// > undefined
console.log(cat.sound());
// > meow


/* 
update object
*/


var cat = { 
  name: "Kitty",
  home: null,
  sound: function () { 
    return "meow";
  }
}

// add property
cat.age = 2;
console.log(cat);
// > age: 2

// update property
cat.home = "Samsan-dong";
console.log(cat)
// > home: "Samsan-dong"

// delete property
delete cat.home;
console.log(cat)
// no home 


/*
  Q1. Irish beer is restocked. update irishBeer object
*/


var irishBeer = { 
  name: "Guinness", 
  origin: "Ireland",
  available: false
}

irishBeer.available = true;

console.log(irishBeer)
// available: true


/*
  Q2. print each beer name with uppercase using Array loop.
*/


var beers = [
  { name: "Guinness", origin: "Ireland" },
  { name: "Heineken", origin: "Netherlands" },
  { name: "Budwiser", origin: "USA" },
]

for (let i=0; i<beers.length; i++) {
  console.log(beers[i].name.toUpperCase());
}

// GUINNESS
// HEINEKEN
// BUDWISER