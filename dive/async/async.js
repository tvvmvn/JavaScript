//  It is used to prevent blocking in program.
//  for example, when fetching resources from a server

function getData(callback) {
  setTimeout(function () {
    callback(null, "Meow");
  }, 1000);
}

getData(function (err, data) {
  if (err) {
    return console.error(err);
  }

  console.log("data from server:", data);
});

// faster operation runs ahead 
console.log("next operations");











