const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task started");
    resolve(); //this resolve is connecting our promiseOne with .then , basically when a promise is resolved then only
    //it goes it then() and that resolved promise will be handled by then()
  }, 1000);
}); //creating an instance of Promise object, Promise takes a callback function , which are resolve and reject
promiseOne.then(() => {
  console.log("Promise One consumed");
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true; //this value is used to test reject and resolve is working as expected or not if it is true reject
    // will happen, or else resolve will happen
    if (!error) {
      resolve({ user: "Jishu", userName: "jishu@boss.com" });
    } else {
      reject("ERROR: Something is wrong here");
    }
  }, 1000);
});
promiseTwo
  .then((userObj) => {
    //here user refers to the object you are passing inside resolve
    console.log(userObj); //if you do user.UserName it will throw error
    return userObj.userName;
    //but you can return this userName and it will be passed to the nex chain in second .then method
  })
  //now suppose you want print the exact userName of the user not the whole object how will you do??
  .then((userName) => {
    console.log(`the username is ${userName}`);
  })
  //how to catch error
  .catch((error) => {
    //this param error has been received from reject
    console.log(error);
  })
  .finally(() => {
    //this is something anywaywill be executed, either resolve or rejected has been earlier executed or not
    console.log("Either Resolve or Rejected has happen");
  });

//Async await
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "jishu@boss.com", password: 123 });
    } else {
      reject("ERROR: Please put correct userName and password");
    }
  }, 1000);
});
const asyncPromise = async () => {
  const response = await promiseThree;
  console.log(response);
};
asyncPromise();

//The above code is good but it is not good enough to handle errors so with async await we can not handle errors the way we can
//with .then .catch and .finally
//so we have to implement try and catch block to handle errors here

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "jishu@coooldude.com", password: 1234 });
    } else {
      reject("ERROR: Please put correct userName and password");
    }
  }, 1000);
});
const asyncPromise2 = async () => {
  try {//resolve part
    const response = await promiseFour; //await we use cause we know it will take time to fetch the information
    console.log(response);
  } catch (error) {//reject part
    console.log(error);
  }
};
asyncPromise2();

import fetch from 'node-fetch';

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json() //we are using await here as well cause because it takes time to convert the object 
        //to JSON as well
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()

//fetch with then and catch
fetch('https://jsonplaceholder.typicode.com/users').
then((response)=>{
  return response.json
}).
then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log("E",error);
})