// class as template
class Beer {
  
  // used to initialize member.
  // a sort of function, but it cannot return value.
  constructor (name, origin, available) {
    this.name = name;
    this.origin = origin;
    this.available = available;
  }

  // function member is called especially "method".
  drink() {
    return "Cool";
  }

  // class itself invoke static member.
  static history = "B.C 3000";
}

// create an instance.
var beer = new Beer("Guinness", "Ireland", true);

// access an instance's member
console.log(beer.name)
console.log(beer.origin)
console.log(beer.history)