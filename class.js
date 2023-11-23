/* 
  * Class
  Templates for JavaScript Objects (in a wide meaning).

  1 Class structure
  2 Class and instance
  3 Contructor
  4 function member
  5 Static member
  6 Built-in class in JS
*/


/*
  Class structure
*/


// class name must be starts with uppercase letter
class Beer {
  // class member: variables that belongs to class
  name;
  origin;
  available;
}


/* 
  Class and instance 

  object that is created from class
*/


class Beer {
  name;
  origin;
  available;
}

var irishBeer = new Beer();
irishBeer.name = 'Guinness'
irishBeer.origin = 'Ireland'
irishBeer.available = false;

var dutchBeer = new Beer();
dutchBeer.name = 'Heineken'
dutchBeer.origin = 'Netherlands'
dutchBeer.available = true;


console.log(irishBeer)
// > Beer {...}
console.log(irishBeer instanceof Beer)
// > true

console.log(dutchBeer)
// > Beer {...}
console.log(dutchBeer instanceof Beer)
// > true


/*
  constructor

  process setting properties of instance 
*/


class Beer {
  name;
  origin;
  available;

  constructor(name, origin, available) {
    // this means instance
    this.name = name;
    this.origin = origin;
    this.available = available;
  }
}

var irishBeer = new Beer('Guinness', 'Ireland', false);

console.log(irishBeer);


/* 
  function member 
*/


class Beer {

  // other members...

  // function member
  drink() {
    return 'Cool!';
  }
}

var beer = new Beer();

// method of instance
console.log(beer.drink())
// > Cool


/*
  static member

  Provide utilities about class
  Class itself invoke
*/


class Beer {
  
  // ...

  // static variables
  static history = "B.C 3000";

  // static function
  static brewing() {
    return "grains, hops, yeast and water";
  }
}

console.log(Beer.history)
console.log(Beer.brewing())


// Static properties of built-in class
console.log(Math.PI);
// > 3.14


// Complete Beer class
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
    return 'Cool';
  }

  static history = 'B.C 3000';

  static brewing() {
    return 'grains, hops, yeast and water';
  }
}


/*
  Built-in class in JavaScript
  
  1 Text processing: String
  2 Number and Date: Number, Math, Date
  3 collections: Array
  4 Error: SyntaxError, ReferenceError and other error.
  5 Others: Promise, JSON, Object
*/


// time now
console.log(new Date().toLocaleTimeString());
// random fraction
console.log(Math.round(0.5));


/*
  Q. Create an class <Car> to be following.

  1 Class member
  name 
  brand 
  color

  2 it has constructor

  3 function member: sound

  3 static function
  getAge: get car's age if you pass purchased date.
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
    return "Your car age is " + (2023 - purchasedAt)
  }
}

const car = new Car('GV80', 'Genesis', 'Black');

console.log(car)
console.log(car.sound());
console.log(Car.getAge(2020))


