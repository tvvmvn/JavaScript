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


// switch (2023) {
//   case 2022:
//     console.log("last year");
//   case 2023:
//     console.log("this year");
//   case 2024:
//     console.log("next year");
// }


// switch (2023) {
//   case 2022:
//     console.log("last year");
//     break;
//   case 2023:
//     console.log("this year");
//     break;
//   case 2024:
//     console.log("next year");
//     break;
// }


// switch (2030) {
//   case 2022:
//     console.log("last year");
//     break;
//   case 2023:
//     console.log("this year");
//     break;
//   case 2024:
//     console.log("next year");
//     break;
//   default:
//     console.log("Not a close year");
// }



// Speed limit
// for (var i=0; i<100; i++) {
  
//   if (i > 60) {
//     console.log("Slow down")
//     break;
//   }

//   console.log(i);
// }


// var n = 0;

// setInterval(() => {
//   console.log(new Date().toLocaleTimeString());

//   n++;
// }, 1000)


// console.log(new Date().toLocaleTimeString());


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)


// var arr1 = [10, 20];
// var arr2 = [30, 40] 

// arr1.concat(arr2); 

// console.log(arr1);

// var arr = ['b', 'c', 'Z', 'w'];

// arr.sort();

// console.log(arr);

// array.splice(index, howmany, item1, ....., itemX)


// gen.splice(startIndex, deleteCount)
// var gen = [10, 20, 30, 40];

// // gen.splice(0, 1);

// gen.splice(4, 0, 50)

// console.log(gen);

// class Beer {
  
//   // ...

//   // static variables
//   static HISTORY = 'B.C 3000';

//   // static function
//   static brewing() {
//     return 'grains, hops, yeast and water'
//   }
// }

// Beer.HISTORY = "foo";

// console.log(Beer.HISTORY);


/*
  Literal notation

  writes only value on the right side
*/


// Create an instance of String

// 1 class invoke
// var foo = new String('bar'); 
// // 2 literal notation
// var foo = 'bar'; 


// // Create an nstance of Number

// // 1 class invoke
// var year = new Number(2023); 
// // 2 literal notation
// var year = 2023; 


// // Class which is not supporting literal notation 

// var date = new Date();


// /*
//   Object meaning

//   narrow meaning VS wide meaning

//   1 narrow meaning
//   { key: value }

//   2 wide meaning
//   all data in JavaScript
// */


// var foo = "bar";

// console.log(foo.toUpperCase());


// console.log(foo)
// try {
// } catch (error) {
//   console.log(error)
// }


// var beers = [
//   { name: "Guinness", origin: "Ireland", available: false },
//   { name: "Heineken", origin: "Netherlands", available: true },
//   { name: "Budwiser", origin: "USA", available: true },
// ]

// for (let i=0; i<beers.length; i++) {
//   console.log(beers[i].name.toUpperCase());
// }

// for (let i=0; i<beers.length; i++) {
//   if (beers[i].available == false) {
//     console.log(beers[i].name);
//   }
// }


// function isPIN(pin) {
//   var error = "";

//   if (pin.trim() == "") {
//     error = "PIN is required";
//   }

//   if (pin.trim().length != 4) {
//     error = "PIN must be 4 letters";
//   }

//   if (pin.match(/[^0-9]/)) {
//     error = "PIN must be a number from 0 to 9";
//   }

//   if (error != "") {
//     return "Error: " + error;
//   } 

//   return "Nice PIN";
// }


// function isPIN(pin) {
//   try {
//     if (pin.trim() == "") {
//       throw "PIN is required";
//     }
  
//     if (pin.trim().length != 4) {
//       throw "PIN must be 4 letters";
//     }
  
//     if (pin.match(/[^0-9]/)) {
//       throw "PIN must be a number from 0 to 9";
//     }
  
//     return "Nice PIN";
  
//   } catch (error) {
//     return "Error: " + error;
//   } 
// }


// try {
//   console.log(x);
// } catch (error) {
//   console.log("I caught", error.name);
// }

// console.log("other operations");

// console.log("hello".length); 
// 5



// function isPIN(pin) {
//   var err = "";

//   for (var i=0; i<4; i++) {
//     if (typeof pin[i] != "number") {
//       err = "PIN must be a number";
//       break;
//     }
//   }
// }

// var value = [1,2,3,4];

// isPIN(value)


// Exceptions handling without try/catch


// function invalid(password) {
//   var lowerCaseLetters = /[a-z]/
//   var upperCaseLetters = /[A-Z]/
//   var numbers = /[0-9]/

//   if (!password) {
//     return 'Password is required';
//   }

//   if (!password.match(lowerCaseLetters)) {
//     return "Password must contain at least one lowercase letter";
//   }

//   if (!password.match(upperCaseLetters)) {
//     return "Password must contain at least one uppercase letter";
//   }

//   if (!password.match(numbers)) {
//     return "Password must contain at least one number";
//   }

//   if (password.length < 8) {
//     return "Password must be at least 8 letters";
//   }

//   return null;
// }

// var err = pw_error("123");

// if (!err) {
//   message.innerHTML = `<span class="success">Accepted</span>`;
// } else {
//   message.innerHTML = `<span class="warning">${error}</span>`;  
// }


// function swap(a, b) {
//   var c = a;
//   a = b;
//   b = a;
// }

// var hello = "Hello";
// var world = "World";

// swap(hello, world);

// console.log(hello, world);


// var age = 15;

// console.log('a student:', 'Guinness, please');

// if (age < 18) {
//   throw "get back, kids";
// }

// console.log('staff:', 'Here are Guinness');



// function keyUpHandler(password) {
//   var lowerCaseLetters = /[a-z]/
//   var upperCaseLetters = /[A-Z]/
//   var numbers = /[0-9]/

//   try {
//     if (!password) {
//       throw 'Password is required';
//     }
  
//     if (!password.match(lowerCaseLetters)) {
//       throw "Password must contain at least one lowercase letter";
//     }
  
//     if (!password.match(upperCaseLetters)) {
//       throw "Password must contain at least one uppercase letter";
//     }
  
//     if (!password.match(numbers)) {
//       throw "Password must contain at least one number";
//     }
  
//     if (password.length < 8) {
//       throw "Password must be at least 8 letters";
//     }  

//     console.log("Done");

//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// keyUpHandler("123");


// function f(name) {
//   var r = /^[a-zA-Z]+$/.test(name);
//   console.log(name, r)
// }


// f("john")
// f("john1")
// f("john 1")


// var password = "123";
// var input = "12";

// try {
//   if (input != password) {
//     // throw an exception
//     throw "Password not match";
//   }
  
//   // not executed
//   console.log("Done");
// } catch (error) {
//   console.log("Error:", error);
// }



// var cat = {
//   name: "Kitty",
//   home: null,
//   age: 2,
//   sound: function () {
//     return "Meow";
//   }
// }

// console.log(JSON.stringify(cat));



// async function f() {
//   try {
//     // It throws an exception when rejected
//     await new Promise((res, rej) => {
//       rej(null);
//     })
//   } catch (err) {
//     console.log(err);
//   }
// }

// f();


// if (true) {
//   console.log(1)
// } else if (true) {
//   console.log(2)
// } else {
//   console.log(3)
// }


// function f1() {
//   throw 400;
// }

// function f2() {
//   f1();
// }

// function f3() {
//   f2();
// }

// function main() {
//   try {
//     f3();
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// main();


// function f1() {
//   return 400;
// }

// function f2() {
//   return f1();
// }

// function f3() {
//   return f2();
// }

// function main() {
//   var err = f3();

//   console.log("Error:", err);
// }

// main();


// f([1,2], [3,4], [5,6]);

// function f([a,b], [c,d], [e,f]) {
//   console.log(a,b);
// }


// var board = [
//   [0, 3, 4, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 1, 2],
// ]

// // move
// board[2][2] = 1;
// board[3][2] = 0;

// console.log(board);


// var x = 10;
// var y = 20;

// function f(a, b) {
//   a *= 10;
//   b *= 10;
// }

// f(x, y);

// console.log(x, y);


// function f([r1, c1], [r2, c2], [r3, c3]) {
//   console.log(r1, c1);
//   console.log(r2, c2);
//   console.log(r3, c3);
// }

// f([0, 0], [1, 0], [2, 0])


// var pieces = [
//   { id: 1, mcount: 0 },
//   { id: 2, mcount: 0 },
//   { id: 3, mcount: 0 },
// ]


// for (var i = 0; i < 3; i++) {
//   var piece = pieces.find(piece => piece.id == 1);

//   piece.mcount++;

//   console.log(piece.mcount);
// }

// var p1 = { id: 1, mcount: 0 };

// var p2 = p1; // p2 = p1

// p2.mcount++;

// console.log(p1);

// var n = 1;

// function f() {
//   n++
// }

// f();
 
// console.log(n);


// function f(year) {
//   year++;
// }

// function main() {
//   var year = 2023;

//   f(year);

//   console.log(year); // 2023 expected
// }

// main(); 


// var s = "hello world";

// console.log(s.indexOf("e"));

// console.log(s.indexOf("l"));

// console.log(s.indexOf("world"));

// console.log(s.indexOf("bar"));



// var url = "posts?id=p0";

// console.log(url);
// console.log(url.substring(0, 5));

// // 5, -1 -> 5, 0
// console.log(url.substring(5, 0));
// // posts


// var s = "hello world";

// console.log(s.substring(0, 4))
// // hell

// console.log(s.substring(4, 0))
// // hell


// var s = "hello world";

// console.log(s.indexOf("l", 1));
// console.log(s.indexOf("l", 5));


// Q. equal operation
// Q. Not equal operation
// Q. Logical operation



// console.log(null == false)
// console.log("" != null);
// console.log(1 == true && 0 == false)



// for (var i = 0; i < 10; i++) {
//   if (i == 5) {
//     break;
//   }

//   console.log(i);
// }

// for (var i = 0; i < 10; i++) {
//   if (i == 5) {
//     continue;
//   }

//   console.log(i);
// }


// var n = 1;
// var sum = 0;

// while (n <= 10) {
//   sum += n;

//   n++;
// }

// console.log(sum);


// for (var n = 1; n <= 10; n++) {
//   if (n % 2 == 0) {
//     console.log(n);
//   }
// }


// for (var n = 1; n <= 10; n++) {
//   if (n % 2 == 1) {
//     continue;
//   }

//   console.log(n);
// }


// for (var n = 2; n <= 10; n += 2) {
//   if (n % 2 == 0) {
//     console.log(n);
//   }
// }


// console.log("" == false);

// console.log(null != false);

// console.log(0 == null);


// var r = null || 0;

// console.log(r);


// for (var i = 0; i < 10; i = i + 2) {
//   console.log(i);
// }



// 2 while loop


// var n = 1;
// var sum = 0;

// while (n <= 10) {
//   sum += n;

//   n++;
// }

// console.log(sum);

// var car;

// switch (car) {
//   case "Avante":
//     console.log(2000);
//     break;

//   case "Sonata":
//     console.log(3000);
//     break;

//   case "Grandeur":
//     console.log(4000);
//     break;
// }



// for (var n = 1; n <= 10; n++) {
//   if (n % 2 == 0) {
//     console.log(n);
//   }
// }

// for (var n = 1; n <= 10; n++) {
//   if (n % 2 == 1) {
//     continue;
//   }

//   console.log(n);
// }

// for (var n = 2; n <= 10; n += 2) {
//   console.log(n);
// }


// if (1) {
//   var n = 1;
// }

// console.log(n);


// function f(n) {
//   if (n < 0) {
//     console.log("negative");
//     return;
//   }

//   console.log("positive");
// }

// f(-1);


// function f(m) {
//   var sum = 0;

//   for (var n = 1; n <= m; n++) {
//     sum += n;  
//   }

//   return sum;
// }

// var r = f(10);

// console.log(r);


// var arr = [10, 20, 30];

// arr[2] = 40;

// console.log(arr)

/*
  4 splice
  add or remove items at position you want

  - how to use
  splice(startIndex, deleteCount, newItem1, newItem2, ..)
  startIndex is required.
*/

// var arr = [10, 20, 30, 40];

// arr.splice(2);
// console.log(arr);
// // > 10, 20

// var arr = [10, 20, 30, 40];

// arr.splice(2, 1);
// console.log(arr);
// // > 10, 20, 40

// var arr = [10, 20, 30, 40];

// arr.splice(2, 1, 99);
// console.log(arr);
// // > 10, 20, 99, 40


// var top5brands = ["Volvo", "Renault", "Hyundai", "Toyota", "Ford"];

// top5brands[3] = "Honda";

// console.log(top5brands);


// var koreanCars = ["Hyundai", "Kia"];
// var japaneseCars = ["Lexus", "Honda"];

// var asianCars = koreanCars.concat(japaneseCars);


// var brands = ["apple", "samsung", "huawei"];

// for (var i=0; i<brands.length; i++) {
//   console.log(brands[i].toUpperCase());
// }

// var cat = {};

// cat.sound = function () {
//   return "meow";
// }

// console.log(cat);



// console.log('I\'m John');


// console.log("abc" == "abc")
// console.log("abc" == "ab c")
// console.log("ab c" == "ab c")


// console.log("헬로월드" == "헬로월드")
// console.log("헬로 월드" == "헬로 월드")
// console.log("헬로월드" == "헬로 월드")


// function getSquare(n) {
//   if (typeof n != "number") {
//     console.log("err: wrong input");
//     return;
//   }

//   console.log(n ** 2);
// }

// getSquare(null);
// getSquare(5);


// var arr = [10, 20, 30];

// for (var i = 0; i < arr.length; i++) {
//   arr[i] *= 10;
// }

// console.log(arr);


// var brands = ["apple", "samsung", "huawei"];

// for (var i=0; i < brands.length; i++) {
//   brands[i] = brands[i].toUpperCase();
// }

// console.log(brands);

// var arr = [];

// for (var n = 0; n < 10; n++) {
//   arr.push(n);
// }

// function f(n) {
//   n += 1;
// }

// var num = 1;

// f(num);

// console.log(num); 
// 1


// function pow(n) {
//   return n ** 2;
// }

// console.log(pow(5));


// var arr = [10, 20, 30];

// arr.forEach(function (item, index, self) {
//   console.log(item * 10);
// })


// for of - es 6


// setInterval((ev) => {})


// var beers = [
//   { name: "Guinness", available: false },
//   { name: "Heineken", available: true },
//   { name: "Budwiser", available: true },
//   { name: "Kirin", available: true },
// ]


// var availableBeers = beers.filter(function (beer) {
//   if (beer.available) {
//     return beer;
//   }
// })

// console.log(availableBeers);


// var arr = [10, 20, 30]

// function f([a, b, c]) {
//   console.log(a, b, c);
// }

// f(arr);


// var beers = ["Guinness", "Heineken", "Budwiser"];

// function f([irishBeer, dutchBeer, americanBeer]) {
//   console.log(irishBeer);
//   console.log(dutchBeer);
//   console.log(americanBeer);
// }

// f(beers)


// f(irishBeer)

// function f({ name, origin, available }) {
//   // ..
// }