/* 
  Promise
  represents status whether success or failure and results 
  of asynchronous operations.
  used to improve readability for asynchronous operations. 

  1 Structure of promise
  2 Realworld examples
  3 async / await
*/


/*
  Structure of Promise

  1 resolve and reject function

  1) resolve
  invoked when operation succeed

  2) reject
  invoked wheh operation fail


  2 Promise status
  1) fullfilled
  success of operation
  
  2) rejected
  failure of operation

  3) pending
  wait for end of operation


  3 Promise method
  1) then
  process data when success

  2) catch
  process error when failed

  3) finally
  process final operations that executed not relavant with success or failure
*/


// instance 
const promise = new Promise((resolve, reject) => {
  resolve({ foo: "bar"}); // success
}) 

// usage
promise
  .then((value) => { // fullfilled
    console.log(value)
  })
  .catch((error) => { // rejected
    console.error(error);
  })


/*
  2 Realworld examples

  when fetching data from server
*/ 


// request data to server
function fetchData() {
  const promise = new Promise((res, rej) => {
    res("duck"); // success
  })

  return promise;
}

fetchData()
  .then(data => { 
    console.log("data from server:", data);
  })
  .catch(error => {
    console.error(error)
  })

// > data from server: duck


/*
  async / await

  Wait for Promise object returning its results.
  improve readablility of Promise operation
  error handling in try/catch
*/


function fetchData() {
  const promise = new Promise((res, rej) => {
    res("duck")
  })

  return promise;
}

async function f() {
  try {

    const data = await fetchData(); // wait for results

    console.log("data from server:", data);

  } catch (err) {
    console.error(err)
  }
}

// > data from server: duck