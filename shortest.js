//SHORTEST JS PROGRM IS AN EMPTY CODE.
//Even for an empty JS file which does not contain any code js will create a GEC.
//JS engine creates window object and many functions with it.
/*The window object is supported by all browsers. It represents the browser's window.

All global JavaScript objects, functions, and variables automatically become members of the window object.

Global variables are properties of the window object.

Global functions are methods of the window object.
*/
//At global level 'this' points to the window object
//When JS code runs a global object,GEC and along with it 'this' object is created.
//the global object incase of browser is known as window.
//js also runs without browsers ,so wherever it runs there will be JS Engine and has responsibility to create a global object.
//for chrome it is v8 engine.
//global object for browser is known as window and for node it will e something else.
//even if the code is empty js will create a global object.
//in global level this===window and it will return u true in case of browsers.
//both for functional and global execution context this object is created .
//global space is basically which will be in top level not inside a function or block.
//any variable and function you create in global space will be attache dto the window object.
var x=10;
function a(){
    var y=10;
}
//window object only works at browser end not in node.
//you will get same output of these 3 lines in browser side 
console.log(window.x);
console.log(this.x);
console.log(x);
//this will give undefined error as y var is not in gloabl space
console.log(window.y);


console.log(this); // In the global scope, "this" refers to the "window" object.
const myObject = {
  myFunction: function() {
    console.log(this); // Inside this method, "this" refers to "myObject."
  }
};
myObject.myFunction();
var globalVar = 42; // Creates a property of the "window" object.
function sayHello() {
  alert("Hello, world!");
}
window.alert("This is an alert."); // Using a method of the "window" object.
/*
In summary, "this" refers to the current context or object, and its value can change based on how and where it's used in your code, while the "window" object is a global object specific to the browser environment and provides access to various browser-related functionalities.
*/
