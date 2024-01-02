getName();//we are calling the function before even initializing it which is known as hoisting but strangely the function willl be invoked in this case and return us the result of the function.
console.log(x);//as we are logging x before even initializing it will give us undefined
console.log(y);//It will give reference error it can not be used until and unless it is declared
var x=7;
let y=7;//
function getName(){
    console.log("hi jishu")
}
/*var getName=()=>{
    console.log("hi jishu")
}*/
//getName();
//console.log(x);
/*
Golden Rules:
1. Variable declarations are scanned and are made undefined
2. Function declarations are scanned and are made available


Hoisting:->
Hoisting in JavaScript is a process in which all the Variables, Functions and Class defination are declared BEFORE execution of the code 
Before the code even gets started executing all the varibales and function gets stored in memory in execution context.
js will crim through the program and do the memory allocation before executing the code
as the function is already loaded in memory before even initializing line by line it it will be invoked cause js has already stored it in memory.
if you have not even written var x=7 it will throw error as not defined as x was not even initialized in memory and js will not find it in memory.
not defined is an error and undefined is a placeholder kind of.
instead of normal js function if you create an arrow function it will give you not defined error because it will treat getname as an variable (will be alloacated undefined value to getName in arrow function),
not a normal js function which gets load into memory as a function value and copy the whole code in memory.

Variables defined with let and const are hoisted to the top of the block, but not initialized.

Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

Using a let variable before it is declared will result in a ReferenceError.

The variable is in a "temporal dead zone" from the start of the block until it is declared/initialized:
Using a const variable before it is declared, is a syntax error, so the code will simply not run.
JavaScript Initializations are Not Hoisted
JavaScript only hoists declarations, not initializations.
Difference between declaration and initialization is 
var x;// declaration,this is when a certain space is allocated in memory for this variable
x=10;// assigning a value is initialization
*/
//let and const declaration are hoisted but not like var but in the temporal dead zone.
//memory will also be alllocated for let and const variables but you can not access them until and unless you put some value on them.
//Time between the variable declaration also known as hoisting and initializing a value to it is known as temporal dead zone.
//ex:
//let a=10 / so a is hoisted in memory with undefined value at first and later it will be assigned a vlue 10 so time bw these two phases is known as temporal dead zone.
//when you will try to access a variable inside temporal dead zone it will give you reference error.
//so let and const varaibles will not be atached to this/window global object only var gets attached to these two global objects.
/*
let a=10;
let a=20; we can not do redeclaration with let and same variable name syntax error
var a=10; we can not even do this if a is alrready declared as let
//with var we were able to but with let we can't do this but we can do the below,
let a=10;
a=20;
console.log(a);
*/
/*but with const we can not do this
const a;//const is meant to be initialzed here only (putting an value)
a=20;
console.log(a);it will give missing initializer in const declaration and syntax error
*/
/*const a=100;
a=20;
console.log(a);//type error cause it should be initialized and declared togetehr
*/
//when to use 
//let: use most in modern day coding
//var: use less in modern day coding
//const: use as per situation when you want the variable to be constant.
//Best way to avoid temporal dead zone: put the initialization and declaration at the top.


