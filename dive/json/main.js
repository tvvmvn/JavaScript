var data = { name: "John Doe", age: 30 };


// before storing/sending
var json = JSON.stringify(data);

console.log(json);


// after receiving
var obj = JSON.parse(json);

console.log(obj);

