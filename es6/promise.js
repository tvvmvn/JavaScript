/* 
  Promise object
  
  It have results and data of async operations.
  It improves readability for async operations. 

  1 Structure 
  2 async / await
*/


/*
  Structure

  1 res, rej function

  1) res(resolve)
  invoked when operation succeed

  2) rej(reject)
  invoked wheh operation fail


  2 Promise results (status)
  
  1) fullfilled
  success of operation
  
  2) rejected
  failure of operation

  3) pending
  waiting for success or failure


  3 Promise method

  1) then
  process data when success

  2) catch
  process error when failed

  3) finally
  process final operations 
*/


// promise
const promise = new Promise((res, rej) => {
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


/*
  async / await

  It waits for promise returning its results.
  It improves readablility of promise operation
  It is used with try / catch.

  * 😂 debt metaphor (give me right now)
*/


const promise = new Promise((res, rej) => {
  res("Meow");
})

async function f() {
  try {

    // wait for results
    const data = await promise; 

    console.log("data from server:", data);

  } catch (err) {
    console.error(err)
  }
}

f();