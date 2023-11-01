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

  1 res, rej function

  1) res(resolve)
  invoked when operation succeed

  2) rej(reject)
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
  process final operations 
*/


// instance 
const promise = new Promise((res, rej) => {
  // success
  res("Meow"); 
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
  Realworld usage

  when fetching data from server
*/ 


// request data to server
function getData() {
  const promise = new Promise((res, rej) => {
    res("Meow"); 
  })

  return promise;
}

getData()
  .then(data => { 
    console.log("data from server:", data);
  })
  .catch(error => {
    console.error(error)
  })


/*
  async / await

  Wait for Promise object returning its results.
  to improve readablility of Promise
  error handling in try/catch
*/


function fetchData() {
  const promise = new Promise((res, rej) => {
    res("Meow")
  })

  return promise;
}

async function f() {
  try {

    // wait for results
    const data = await fetchData(); 

    console.log("data from server:", data);

  } catch (err) {
    console.error(err)
  }
}