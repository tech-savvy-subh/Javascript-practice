/*console.log(x);
console.log(func2);
//func2();
//func();
//getname();
var x=7;
//function getname(){
    //console.log("namaste js");
//}
var func=function getname(){
    console.log("namaste js");
}
var func2=()=>{
    console.log("hehe");//arrow function
}
//console.log(x);
//getname();
*/

/*var x=1;
a();
b();
console.log(x);
function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x=100;
    console.log(x);
}*/
//console.log(a);//it will throw error can not call before initialization
/*console.log(b);
let a=10;
var b=100;
*/
/*var a=20;
{
    let a=10;
    console.log(a);//it is able to shadow the value inisde the block
}
console.log(a);// but outside the var a value will be printed
*/

/*let a=20;
function x(){
    var a=10;
    console.log(a);//in case of function we can do that inside the function for let and var
}
x();
console.log(a);// b
*/
/*console.log(z);
var z=10;*/

/*function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y;//we are not just returning the function here but we r returning the closure(function+it's lexical environment)
}
var z=x();//after invoking the x function it's execution context gets terminated 
//now what will happen to y(), in js when we return a function it always remembers it's lexical scope
console.log(z);// so when we console.log it will return the function itself
z();//after storing the function in z when we call z it will return the value 
//it is known as closure where the function bundles itself with it's lexical environment
//even if the parent function's execution context is finished it will still be able to use the lexical variables */
/*function z(){
    var b=900;
    var a=90;
    function x(){
        var a=7;
        function y(){
            //a=11;// but if i mention the value in the function itself it will take this avlue of a because first it searches
            //function itself and then outside
            console.log(a,b);// so here a & b is actually the reference we r passing for var a & var b not the value
        }
        a=100;
        a=80;// but in the lexical scope it will take the last value
       y();//we have to call it inside x
    }
    // y();//at z y is not defined so it will throw ref error
   x();
}
z();
*/
/*function x(){
    for(var i=1;i<=5;i++){//in case  of var when the callback function is executed in settimeout it will refer to the same 
        //object in memory and will be executed when the value of i becomes 6 after incrementing

        setTimeout(function() {
            console.log(i);
        }, i*1000);//then it will print 6 around 5 times the loop will run
    }
    console.log("namaste js");//due to setTimeout first it will print "namste js"
}
x();
*/
/*function x(){
    for(let i=1;i<=5;i++){//in case of let it will indicate towards different space in memory because let scope is block
        setTimeout(function(){//as it's scope is block so it will everytime print differnt version of i instead of same version 
            //like in the case of var.
            console.log(i);
        },i*1000);//it will print 1,2,3,4,5 like this.
    }
    console.log("namaste js");//due to setTimeout it will be printed first because js does'nt wait for anyone >_<
}
x();
*/


//to achieve the same with var instead of let we have to create a closure of the setTimeout
/*function x(){
    for(var i=1;i<=5;i++){
        function close(x){//so here we created a function close where we r passing the value of i
            //so like before in the memory it was referencing to same object in this case it is not 
            //it is passing evrytime different value of i through the close() function after storing
            //so this is an example of closure
            setTimeout(function(){
                console.log(x);
            },x*1000);
        }
        close(i);//here we r pasing the value of i
    }
    console.log("namaste js");
}
x();
*/
/*
console.log(1);
setTimeout(function(){
console.log(2);
}
,1000);
setTimeout(function(){
    console.log(3);
    }
    ,0);
console.log(4);//S o the order it will print 1 4 3 2
//because setTimeout will take time
*/

//Data Hiding
 /*var x=10;
 function outer(){
     x++;
     console.log(x);
 }
 outer();
 console.log(x);
 */
/*
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
   //this is sknown as data hiding or encapsulation in javascript through the closure
*/
/*
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
*/
 //But if we want to print a function for decremention also then it will be headache for us and the code will also not be
 //scalable
 //so we have to use constructor at this position

 /*function outest(){
    var x=10;
    this.increment=function () {//this is a constructor for incrementing the value using anonymous function
        x++;
        console.log(x);
    }
    this.decrement=function(){//this is a constructor for decrementing the value using anonymous function
        x--;
        console.log(x);
    }
 }
 
 var a=new outest();//as we are using constructor we have to use the new keyword while storing in the a object
 a.increment();//now we have to call ,it will print 11 (10+1)
 a.decrement();//it will print 10 (11-1)
 */

 //Disadvantages of closure is it accumulates a lot of memory and the closed variables are not also collected by garbage collector
 //So it memory leaks can happen 

 //garbage collector
 //so not like other languages js lets us do the garbage collecting stuff on our own
 //it is already defined in the js engine<v8 for chrome>
 //there is another thing in js which is smart garbage collecting
 
 /*function a(){
    var x=10, z=20;//but js has smart garbage collection so we will not be able to console log (z) in the console
    return function c(){
        console.log(x);
     }

 }
 var b=a();//so here the x should also be vanished because a is invoked but as the function c has created a closure
 //it will not because then we will not be able to access the x variable using closure property
 //so as u can see it is not garbage collected
 b();//so it will print 10
 //the value of x we can console.log but for z we will not be able to as it is not used in the closure environment
*/

//function statement/function declaration
/*
a();
function a(){
    console.log("a called");
}

//function expression
b();//will throw not a function error
var b=function (){
    console.log("b called");
}
*/

//anonymous function
//function (){
//we have to assign it to some value like the above ex. or it will throw some error
//}
//Named function expression
/*var c=function xy(){//here we are giving a name to the function it's not an anonymous function
    console.log("c called");
}
c();
//xy();//but we can not call this function like this because it is created in the outer scope
*/

//Difference between parameters and arguements
/*function a(b,c){//b,c are parameters which we r created in the local scope we can not access it outside
    console.log(b,c);
}
a(3,4);//these are the values we r passing a.k.a arguements
*/
/*
//First class function
var a=function (){
    return function xyz(){

    }//here we r returning a function aa a value
}
console.log(a());*/





