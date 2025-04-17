/* 
  3 filter 

  It has callback as argument
  callback has 3 parameters.
  It returns filtered new array.
*/


var ages = [13, 20, 34, 40];

var adults = ages.filter(function (age, index, self) {
  return age >= 18;
});

console.log(ages);
// > 20, 34, 40
