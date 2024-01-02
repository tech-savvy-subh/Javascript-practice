//1st Example
function x(){
    var a=1;
    function y(){
       console.log(a); // A function bind within it's lexical environemnt is known as closure
       //a function bundled together with it's lexical scope forms a closure.
       //function y is bundled with the var of function x and has it's access to parents lexical scope 
    }
    y();
}
x();
//2nd Example
function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y;
    }
var z=x();//after x is invoked everything related to x will be deleted from memory vars and all but now z contains the function y
console.log(z);//z has function y now so it can be used outside x
/*
    The above line will return ƒ y(){
        console.log(a);
    }
*/
//Not only the function y but function y with it's lexical scope was returned inside var z. a point to remember
z();//It will print 7 but why and how? cause we know once x is invoked verything inside x will be deleeted right?
//When a function is return from another function it still maintains it's lexical scopes.
//so even if function x does not exist the function y will remember form where it came from and also it's lexical scope where var a was residing.

//3rd Example , The 2nd Code and 3rd one is exactly same but it's a cool way to write it with this syntax.
function x(){
    var a=7;
    return function y(){
        console.log(a);
    }
    }
var z=x();
console.log(z);
z();
//4thprogram
function x(){
    var a=7;
    function y(){
        console.log(a);//here it will print 100 because in the memory it does not indicate to the value of a but the reference of a
    }
    a=100;
    return y;
    }
var z=x();
console.log(z);
z();
//5th program
function a() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {//closure has been formed with parent and parent's parent
            console.log(a, b);//Here it will print 7 and 900 because y will form a closure with lexical scope of function x and a both
        }
        y();
    }
    x();
}
a();
/*Use of closure
Module Design pattern
Currying
Functions like once
memoize
maintaing state in async world
setTimeouts
Iterators
and many more
*/
//6th Program setTimeout+closure
function x(){
    var i=1;
    setTimeout(function(){//This function() forms a closure and remembers the reference to i
        console.log(i);
    },1000)//It will basically print the value of i in console after 3 sec(3000 millisec)
console.log("Namste JS");//you might be thinking that it will wait 1 sec to print the value of i and then print Nmaste JS but no,
//It will print Namaste JS and then wait 1 sec and print the value of i in console.
//JS waits for none as you might think it will wait for setTimeout method ti be executed and then print Namaste JS.
//the callback function in setTimeout forms a closure and keep the reference of i wherever it goes.
//see the this setTimeout then take this callback function and stores it at a place and attaches a timer of 1000 millisecs to it.
//Then JS goes to next line and print Namaste JS.
//Once the timer expires it puts the callback fucntion into the callstack and runs it.
}
x();
//Write a program to print 1,2,3,4,5 in JS but the condition is each number should be printed with a delay of it's value in seconds.
//so for ex if you reckon 1 should be printed after 1 sec.
//2 should be printed after 2 secs and the list goes on.
//The below program I will write is not correct but it will help us understand closure more.
//You might think the below code should print 1 to 5 in the way it is given above but instead of that it will print 6 'five' times  
//why??
/* Basically the callback function in memory is attached with a timer right?
:But we know that the way JS Bheaves it basically will store the value of i also in memory and each time the for loop runs the 
value will be incremented in memory.
But the main issue here is the callback function is forming a closure with it's parent x's lexical scope.
so it remembers the reference to i and not the value of i and for variable type var it stores the same copy of i in memory just the value is incremeneted only.
unlike let which is block scoped and each time the for loop runs a separate copy/reference is stored in memory.
when the value of i becomes 6 the setTimout method will be invoked and 6 will be printed 5 times.
*/
function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000)
    }
    console.log("Namste JS");
}
x();
//if you replace the variable type to let instead of var it will print 1,2,3,4,5 with a delay of it's value in seconds.
//Why does it work with let but not var as let is block scoped each time the for loop runs it stores a diffferent copy of i in memory
//In case of var it was referencing to the same copy of i
//the value of i in first iteration will be 1 in second iteration will be 2 and it will go on.
function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000)
    }
    console.log("Namste JS");
}
x();
//Now suppose interviewer asks you to complete the above code using var not let
//what will you do?
//you have to find a way to understand that a separate copy of i should be stored in memory which the callback fucntion will try to access
//You have to take help of closure here
//So we want a separate copy of i each time the loop runs right?
//so Yeah, we have created a fucntion close() and passing a value there to store a separate copy of i in memory
//each time i is getting passed in close and for loop runs it stores a separate value in memory.
//earlier it was referncing towards the same copy in memory
//by using the close function we are creating a separate copy of i/x in memory whenever setTimeout method is called.
//Simply you can say the callback function in setTimeout mehod will remember a different copy of i/x each time it is called.

function x() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
    console.log("Namste JS");
}
x();
//Interview questions
//what is a Closure in JS?
//:Closure is a combination of a function bundled together with it's lexical environment.
//:Each and every function has access to it's parent's variables or functions.
//So even if the fucntion is executed in some other scope not in it's oroginal scope it still remembers it's lexical environment.
function outest(){
    let b=20;
    function outer(c){
        let a=10;//if this line was commented out or not there it will try to find the value of a first in it's lexical environment and then in it's parent's lexical environment and then in global scope
        function inner(){
            console.log(a,b,c);//as a closure is already formed with outer and outest's lexical environment these 3 variables we can access
        }
        return inner;
    }
    return outer;
}
let a =100;//now what will be the output ?The output remains same as while trying to do console log it will try to find the value of a in it's local scope and if it is there it will return the value of it as it is already there in line 159
var close=outest()("hello world");//calling a function and another function inside it till outer function with a param passed
close();//callling inner function Output: 10,20,"hellow world"
//Advantages of Closure
/*
Module Design pattern
Currying
Functions like once
memoize
Data Hiding and Encapsulation
maintaing state in async world
setTimeouts
Iterators
*/
//Data Hiding and Encapsulation
//We can encapsulate/hide the data so that other functions can not access it.
function outest(){
    var x=10;
    function outer(){
        x++;
        console.log(x);
    }
    outer();
   }
outest();//this will print the incremented value of x 11
console.log(x);//this will throw error reference because x is not accessible outside outest function
//this is known as data hiding or encapsulation in javascript through the closure
//The below code is how we can access the varibale within the function but by using the function ,we can not access it without it
function outest(){
    var x=10;
    return function incrementing(){
        x++;
        console.log(x);
    }
   }
var a=outest();//a stores the function incrementing(){} <which is being stored while invoking the outest function>
a(); //This will print 11
a(); //This will print 12 as we will increment the value by calling the function again
var b=outest();//This variable will take the fresh value form above scope.
b();//This will print 1 again and it will not take the value from previous counter a.
//But the above code is not good and scalable ,if we want to have decrement also this is not a good way
//For this we should use constructor.
function Counter() {//It is just a suggested way to have the counter function name start with a capital letter
    var count = 0;
    this.incremenetCounter = function increment() {//we have to create methods this way inside a constrcutor function
        count++;
        console.log(count);
    }
    this.decrementCounter = function decrement() {
        count--;
        console.log(count);
    }

}
var counter1=new Counter();//We should always use new keyword to store the fucntion inside a variable.
counter1.incremenetCounter();//and call it this way ,if we dont use new it will give reference error.
counter1.decrementCounter();

//Disadvanatges of closure
/*
Over consumtion of memory 
The variables declared inside a closure are not garbage collected.
Too many closures can slow down your application. This is actually caused by duplication of code in the memory.
*/
//Garbage collector:
/*It is a program in the browser or the JS engine which frees up the unutilized memory.
it is a high level of programming language where developer does not have control over how to take memory and all,
So, the garbage collector in JS will check the unutilized variables and free up the memory which those variables consume.
*/

//Relation bw Garbage collector and Closure::
//If we form too many closures then the variables will not be garbage collected and consume a lot of memory
function a(){
    var x=0;
    return function b(){
        console.log(x);
    }
}
a();//if the code was finished here and after the a's execution the var x would have been garbage colleceted.
var y=a();//but here if you see we are closing the b function in varaible y and b is accessing var x through closure so even 
//after the executon of function a the variable x can not be garbage colllected because b acn be utilized later in code.
y();
//Smart modern day browsers can effecienly do smart garbage collection
function a(){
    var x=0,z=10;
    return function b(){
        console.log(x);
    }
}
var y=a();
y();
//In the above code we are not using variable z right?
//So smartly browser will do garbage colllection for this variable and if try to access it on browser we will not be able to access it and get not defied error even though it forms a closure with bot variable x and z.
