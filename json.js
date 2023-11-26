/* 
  * JSON 

  1 What is JSON
  2 JSON.stringify
  3 JSON.parse
*/


/*
  What is JSON 
  It stands for JavaScript Object Notation
  A text format to store or transfer JavaScript object

  * structure
  '{ "key": "value" }'
*/


var cat = { name: "Kitty" };
var cat_json = '{ "name": "Kitty" }';

console.log(typeof cat);
console.log(typeof cat_json);


/* 
  JSON.stringify
  
  It transforms Object to JSON
*/


var cat = { name: "Kitty" };
var cat_json = JSON.stringify(cat)

console.log(cat_json)
console.log(typeof cat_json)


/*
  JSON.parse
  
  It transforms JSON to Object
*/


var cat_json = '{ "name": "Kitty" }';
var cat = JSON.parse(cat_json);

console.log(cat)
console.log(typeof cat)
