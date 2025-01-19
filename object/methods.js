// declare class named Person
class Person {
  firstName;
  lastName;
  age;

  // methods
  introduce() {
    console.log("Hello, my name is " + this.firstName);
  }
}

// create an instance of Person
var person = new Person();

// assign value to properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;

// access members of person
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

// invoke methods
person.introduce();