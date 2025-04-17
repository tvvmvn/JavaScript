
/*
  1 forEach 

  It has callback as argument
  callback has 3 parameters.

  1 item
  each item of array
  2 index
  index of each item
  3 self
  original array 
*/


// multiply by 10 to each item
var arr = [10, 20, 30];

arr.forEach(function (item, index, self) {
  console.log(item * 10);
})

