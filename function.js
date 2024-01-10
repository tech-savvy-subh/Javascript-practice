var x = 1;
//we can invoke these functions before even initializing it just because of hoisting
a();
b();
console.log(x);
function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}
//GEC will be created kept inside callstack and x ,a(),b() will be stored in memory.
//x will be undefined at first phase, a()and b() will contain function code.
//at second phase 1 will replace undefined for x and x will assigned 1
//a() function will be invoked and an EC will be created and limited to just this function and same goes for b() as well.
//but the value of x inside a() ec will be alloacated different memory not the gec x memory.
//the memory allocation and all wil be same as GEC
//ONCE THE CODE is executed inside the function the EC will be deleted and control will go to back to GEC whereever the function was invoked.
//After both a() and b() is executed it will go to line number 5 and execute after finfing the value of x in local space.
//After all the code is executed the GEC will also be deleted from callstack and nothing will be left.

function sayMyName() {
  console.log("J");
  console.log("I");
  console.log("S");
  console.log("H");
  console.log("U");
}

sayMyName(); //sayMyName without () is known as function reference and sayMyName() is fucntion execution

function addTwoNumbers(number1, number2) {
  //func params number1, number2

  console.log(number1 + number2);
}

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2; //returning a value , that means you are not printing anything but returning something
  //if you refer this while showing the output you can see the value of this
}

const result = addTwoNumbers(3, 5);

console.log("Result: ", result); //just like this here we are using that

function loginUserMessage(username = "sam") {
  if (!username) {
    //it is same as username===undefined , that means if username is not passed
    console.log("PLease enter a username");
    return; //we are returning it because if it is inside this block don't go to the next block
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("")); //if you pass empty value it will print default value sam
console.log(loginUserMessage("jishu")); //if you pass jishu it will print jishu

//Rest Operator
function calculateCartPrice(val1, val2, ...num1){ //spread and res operator is same you just need to know when to use it
    return num1 //this will print 500,2000 because val1 is referring to 200 and val2 is referring to 400
}

console.log(calculateCartPrice(200, 400, 500, 2000))

//passing object as an param in function
const user = {
    username: "jishu",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
}) //both way we can pass the argument which is of type object

//passing array to an object
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); //this also goes same as type of arg is an array
