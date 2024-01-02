//What is a CalllBack Function in Javascript?
//function that are passed as params/arguements also known as callback function.
function x(){
    x(function y(){//y is a callback function

    })
}

//Js is a synchronous and single-threaded language
//callback functions give us async features in js.
setTimeout(function(){
    console.log("timer")//After a timer of 5000 ms it will print timer in console
    },5000)//here weTimeout are using asynchronous features of JS using setTimeout 
function x(y){//passing y as a param so that we can use the feature of callback fucntion in JS
    console.log("x");
    y();
}
x(function y(){//y as an aruguement and c callback function
    console.log("y");
})
//output will be x,y,timer<after 5000 ms> it will print in order .

//Event Listeners
document.getElementById("clickme").addEventListener("click",function xyz(){
    console.log("button clicked")
})//every time the clickme event is clicked eventlistener will listen to that click and call function xyz.

//Closure with Event Listeners
function attachEvenetListener() {
    let count = 0;
    document.getElementById("clickme")
        .addEventListener("click", function xyz() {
            console.log("button clicked", count++);
        })
}
attachEvenetListener();

//Garbage Collection and removeEventListeners
//The above closure is holding up the variables and for eventListener those are not getting garbage collected ,as the event might be clicked any time.
//We can use removeEventListener when it is not needed
//eventListeners are heavy and consumes a lot of memory even when we don't use the callstack it hold that memory of variables due to closure.
//so we should remove eventlistner when not needed.
//when we remove the eventlistener all the variables hold by the above closure will be garbage collected.
