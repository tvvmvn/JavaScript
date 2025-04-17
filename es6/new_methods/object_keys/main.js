
/*
  other methods

  1 Object.keys
*/


/*
  1 Object.keys
  return keys of object as String array
*/


var cat = {
  name: "Kitty",
  home: null,
  sound: function () {
    return "Meow";
  }
}

var keys = Object.keys(cat);

console.log(keys) 
// > name, home, sound

