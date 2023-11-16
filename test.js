// var beers = ["Guinness", "Heineken"];
// var americanBeer = "Budwiser";
// var japaneseBeer = "Kirin";

// beers.push(americanBeer, japaneseBeer);

// console.log(beers)


// var irishBeer = { name: 'Guinness', origin: 'Ireland' };

// var {a, b} = irishBeer;

// console.log(a, b);
// undefined undefined


// var irishBeer = { name: 'Guinness', origin: 'Ireland' };

// function f({ a, b }) {
//   console.log(a, b);
// }

// f(irishBeer);
// > undefined, undefined



// if (true) {
//   var foo = "bar"
// }

// console.log(foo)



// var [a,b] = [10,20,30,40]

// console.log(a, b)


// class Person {
//   name;

//   constructor(name) {
//     this.name = name;
//   }

//   introduceSelf() {
//     console.log(`Hi! I'm ${this.name}`);
//   }
// }

// class Professor extends Person {
//   teaches;

//   constructor(name, teaches) {
//     super(name);
//     this.teaches = teaches;
//   }

//   introduceSelf() {
//     console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`)
//   };

//   grade(paper) {
//     const grade = Math.floor(Math.random() * (5 - 1) + 1);
//     console.log(grade);
//   }
// }

// class Student extends Person {
//   #year;

//   constructor(name, year) {
//     super(name);
//     this.#year = year;
//   }

//   introduceSelf() {
//     console.log(`Hi! i'm ${this.name}, and I'm in year ${this.#year}.`);
//   }

//   canStudyArchery() {
//     return this.#year > 1;
//   }
// }

// const giles = new Person("Giles");
// const walsh = new Professor("Walsh", "Psychology");
// const summsers = new Student("Summers", 2);



// var foo = {}

// function f() {
//   foo.prop1 = "bar"

//   console.log(foo);
// }

// f();


// var arr = new Array(10);

// for (var i=0; i<arr.length; i++) 
//   console.log(arr[i]);

// const cat = {name: "Kitty"};

// cat.name = "Alfredo";

// console.log(cat);

// console.log(0 == false); // true
// console.log(0 == null);
// console.log(0 == undefined);
// console.log("" == 0); // true
// console.log("not empty" == 1); // false


// console.log("" == 0) // true
// console.log("" === 0)

// console.log(0 == false) // true
// console.log(0 === false)


// switch (2023) {
//   case 2022:
//     console.log("Last year");
//     break;

//   case 2023:
//     console.log("This year");

//   case 2024:
//     console.log("Next year");
//     break;
// }

