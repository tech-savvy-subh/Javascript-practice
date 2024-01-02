//Function Statement is also known as function declaration

function a(){
    console.log("hi");
}

//function expression
var b=function(){//function are just like value in JS which you can assign to a variable
    console.log("hey")
}
//Major difference between function statement and expression is hoisting as a will be treated as a function and b will be treated as a variable in first phase while getting allocated in memmory.

//Anonymous function
//They don't have their own identity /name , where functions are used as values anonymous functions are used there,you can not use them independently standalone because a functin statement expects a name.
/*
function(){

}
*/

//Named Function Expression
var c= function xy(){//we can call function c but xy we can not call and will throw not defined error
    console.log("bye");//we can use xy inside scope but not in outer scope outside var c
}

//parametr vs Arguements
var d=function(param1,param2){//local variable inside the function and can not be accessed outside of the function known as params(identifier/label)
console.log("hi",param1,param2);
}
d(1,2);//arguements when you invoke the function and pass it

//First Class Function: The ability of functions to be used as values ,assigned to a variable,passed as an arguement,return from another function is known as first class functions.

//we can pass funcion as an arguemnt in another function
var e =function(param1){
    console.log(param1);
}
function xyzs(){
console.log("b");
}
e(xyzs);
//We can also return a function from another function
var f=function(p1){
    return function(){

    }
}
console.log(b());

//Functions are used as first class citizens as well which is same because function can be used as values.
//for let and const also it behaves the same way

//Arrow Function(ES6)

