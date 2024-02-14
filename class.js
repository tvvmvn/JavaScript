/* 
  * Class
  A Template for JavaScript Objects (in a wide meaning).
  used for efficient object management

  1 class structure
  2 instance
  3 Contructor
  4 function member
  5 Static member
  6 Built-in class in JS
  7 An object in a wide meaning in JavaScript
*/


/*
  Class structure

  1 class declaration
  2 class member
*/


/*
  1 class declaration

  class name must be starts with uppercase letter
*/

class Class {
  // class definition
}


/*
  2 class members 
  
  data that belongs to class
*/

class Beer {
  // variables member
  name;
  origin;
  available;

  // function member
  drink() {
    return "Cool!";
  }
}


/* 
  instance 

  object that is created from class

  1 how to create an instance
  2 instanceof operator
  3 multiple instances
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


// 2 instanceof operator
console.log(irishBeer instanceof Beer);


// 3 multiple instances
class Beer {
  name;
  origin;
  available;
}

var irishBeer = new Beer();
irishBeer.name = "Guinness"
irishBeer.origin = "Ireland"
irishBeer.available = false;

var dutchBeer = new Beer();
irishBeer.name = "Heineken"
irishBeer.origin = "Netherlands"
irishBeer.available = true;

var americanBeer = new Beer();
irishBeer.name = "Budwiser"
irishBeer.origin = "USA"
irishBeer.available = true;

console.log(irishBeer instanceof Beer);
console.log(dutchBeer instanceof Beer);
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
    // this means instance
    this.name = name;
    this.origin = origin;
    this.available = available;
  }
}


var irishBeer = new Beer("Guinness", "Ireland", false);
var dutchBeer = new Beer("Heineken", "Netherlands", true);
var americanBeer = new Beer("Budwiser", "USA", true);


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
  1 name 
  2 brand 
  3 color

  - it has constructor

  - function member
  1 sound
  GRRRR

  - static function
  1 getAge
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

  static getAge(y) {
    return "Your car age is " + (2024 - y);
  }
}


const car = new Car("GV80", "Genesis", "Black");

console.log(car)
console.log(car.sound());
console.log(Car.getAge(2020))


/*
  Built-in class in JavaScript
  
  1 Text processing: String
  2 Number and Date: Number, Math, Date
  3 collections: Array
  4 Error: SyntaxError, ReferenceError and other error.
  5 Others: Promise, JSON, Object
*/


// time now
var time = new Date().toLocaleTimeString();
// pi
var PI = Math.PI;


/*
  An object in a wide meaning in JavaScript

  1 example
  2 literal notation
*/


/*
  1 An example
  
  every value is object in a wide meaning.
*/


// string is object.
var foo = "bar";

console.log(foo.toUpperCase());


/*
  2 literal notation

  write value only at right side.
*/


var foo = "bar";
var foo = new String("bar");


