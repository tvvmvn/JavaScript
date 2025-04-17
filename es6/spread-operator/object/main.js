
var cat = {
  name: "Kitty",
  age: 1,
  home: null,
}

// adopted
var updatedCat = { ...cat, home: "Samsan-dong" };

console.log(updatedCat);


/*
  Q. with Object
  Irish beer is restocked. 
  create an updated one with spread operator.
*/


var irishBeer = { 
  name: "Guinness", 
  origin: "Ireland", 
  available: false 
};

// restock 
var updatedIrishBeer = { ...irishBeer, available: true };

console.log(updatedIrishBeer);


