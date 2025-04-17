
// promise
let promise = new Promise((res, rej) => {
  // success
  res("Meow"); 
}) 


// usage
promise
  .then((data) => { // data handling
    console.log("data from server:", data)
  })
  .catch((error) => { // error handling
    console.error("error:", error);
  })
