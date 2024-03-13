/* 
  * Class
  A Template for JavaScript Objects.
  It's used for efficient object management in JS.

  1 structure
  2 instance
  3 Contructor
  4 function member
  5 Static member
  6 Built-in class in JS
  7 An object in a wide meaning in JavaScript
*/


/*
  structure
*/


// name should starts with uppercase
class Beer {
  // class members
  name;
  origin;
  available;
}


/* 
  instance 

  object that is created from class

  1 how to create an instance
  2 multiple instances
*/


// 1 how to create an instance
class Beer {
  name;
  origin;
  available;
}

var irishBeer = new Beer();

irishBeer.name = "Guinness"
irishBeer.origin = "Ireland"
irishBeer.available = false;

console.log(irishBeer);
console.log(irishBeer instanceof Beer);


// 2 multiple instances
class Beer {
  name;
  origin;
  available;
}


var irishBeer = new Beer();

irishBeer.name = "Guinness"
irishBeer.origin = "Ireland"
irishBeer.available = false;

console.log(irishBeer);
console.log(irishBeer instanceof Beer);

var dutchBeer = new Beer();

dutchBeer.name = "Heineken"
dutchBeer.origin = "Netherlands"
dutchBeer.available = true;

console.log(dutchBeer);
console.log(dutchBeer instanceof Beer);

var americanBeer = new Beer();

americanBeer.name = "Budwiser"
americanBeer.origin = "USA"
americanBeer.available = true;

console.log(americanBeer);
console.log(americanBeer instanceof Beer);


/*
  constructor

  process setting properties of instance.
*/


class Beer {
  name;
  origin;
  available;

  constructor (name, origin, available) {
    // this keyword means instance
    this.name = name;
    this.origin = origin;
    this.available = available;
  }
}


var irishBeer = new Beer("Guinness", "Ireland", false);
var dutchBeer = new Beer("Heineken", "Netherlands", true);
var americanBeer = new Beer("Budwiser", "USA", true);


console.log(irishBeer);
console.log(dutchBeer);
console.log(americanBeer);


/* 
  function member 

  It becomes methods of a instance
*/


class Beer {

  // ..

  drink() {
    return "Cool!";
  }
}

var beer = new Beer();

console.log(beer.drink());


/*
  static member

  They provides utilities about class.
  A class itself invokes.
*/


class Beer {
  
  // ..

  // static variables
  static history = "B.C 3000";

  // static function
  static brewing() {
    return "grains, hops, yeast and water";
  }
}


console.log(Beer.history);
console.log(Beer.brewing());


// A static property of built-in class
console.log(Math.PI);


// A complete Beer class
class Beer {
  name;
  origin;
  available;
  
  constructor (name, origin, available) {
    this.name = name;
    this.origin = origin;
    this.available = available;
  }

  drink() {
    return "Cool";
  }

  static history = "B.C 3000";

  static brewing() {
    return "grains, hops, yeast and water";
  }
}


/*
  Q. Class
  Create an class <Car> to be following:

  - variables member
  name, brand, color

  - it has constructor

  - function member
  It makes car sound.

  - static function
  get car age if you input purchased year.
*/


class Car {
  name;
  brand;
  color;

  constructor(name, brand, color) {
    this.name = name;
    this.brand = brand;
    this.color = color;
  }

  sound() {
    return "GRRRR";
  }

  static getAge(purchasedAt) {
    return "Your car age is " + (2024 - purchasedAt);
  }
}


const car = new Car("GV80", "Genesis", "Black");

console.log(car.name);
console.log(car.sound);
console.log(car.color);
console.log(car.sound());

console.log(Car.getAge(2020));


/*
  Built-in class in JavaScript
  
  1 Text processing: String
  2 Number and Date: Number, Math, Date
  3 collections: Array
  4 Error: SyntaxError, ReferenceError and other error
  5 Others: Object, JSON, Promise
*/


/*
  An object in a wide meaning in JS

  1 object in a wide meaning
  2 literal notation
*/


/*
  1 object in a wide meaning
  
  every value is object
*/


// string value is object.
var foo = "bar";


// It can have methods
console.log(foo.toUpperCase());


/*
  2 literal notation

  write value only when creates an instance
*/


// instances of String
var foo = new String("bar");
var foo = "bar"; // literal


// some types do not support literal.
var date = new Date();


