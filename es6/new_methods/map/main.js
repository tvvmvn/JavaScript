/* 
  2 map

  almost same as forEach methods.
  it returns new Array.
*/


var arr = [10, 20, 30];

var newArr = arr.map(function (item, index, self) {
  return item * 10;
})

console.log(newArr);
// > 100, 200, 300
