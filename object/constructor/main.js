// class
class Person {
  
  firstName;
  lastName;
  age;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

// instance of Person
var person = new Person("John", "Doe", 30);

console.log(person);