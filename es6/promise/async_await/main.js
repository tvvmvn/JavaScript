

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