/*
We already know JS is a synchronous single threaded language ,which gets executed line byline and one at a time.
Everything that goes inside a callstack gets eceuted immediately as soon as it is invoked.
There is no timer in callstack ,So you can assume that JS will not wait for anyone and if the function is in callstack and it is invoked the function will be executed.
The architecture of a browser we should know:
1.JS Engine
2.Call Stack(will be inside JS engine)
3.Local storage
4.Timer
5.Rendering the fetched data from a server on browser dsiplay wondow
5.Geo Location and many more
6.url
7.Console

Suppose my call stack will want to access the timer in browser , How we can do it?
::Web APIs:-> 
These are not a part of JS but part of browser
setTimeout()  
DOM APIs 
fetch()//gives access to external servers
local storage
console
location
Browser gives these super powers access to JS Engine so that JS Code can use it using global objects(windows).
ex: window.setTimeout(),window.LocalStorage()
Global object window is wrapped up with these super powers.
we can just do setTimeout() again as well, it will allow in browser.

*/
//CallBacks are registered inside Web APIs.
//1st Program
console.log("a");//logs a
setTimeout(function a() {//when we use setTimeout it registers this callback function in Web APIs.
    console.log("b");//after 5 secs b will be logged in console
}, 5000)//a timer is also set of 5000 ms
console.log("c");//js moves to next line and logs c 
//Explanation of above Code:->
//After each and every line of the code is executed GEC will pop out of the call stack
//After 5 secs of timer has expired the callback function should be executed but we all know that,
//To execute a fucntion in JS it should be in the callstack
//so if we get the callback function in the callstack after the timer of 5 sec has expired it will quickly execute it.
//but it can not go directly to callstcak it will go through the callback queue.
//After the timer expires it will go inside the callback queue.
//The job of event loop is to check the callback queue if any function is there and push it to call stack.
//Once it is pushed to callstack it will execute the function.

//2nd Program
console.log("start");//log start in console
document.getElementById("clickme").addEventListener("click",function cb(){
    console.log("button has been clicked")
});
console.log("End");//log End at console

//document. basically calls the dom api and fetches something from the DOM.
//DOM API will access the html code and find a buttton with id "clickme".
//.addEventListener registers an eventlistener on an event called "click".
//so cb is registered inside web apis and an event click is attached to it.
//It will then move on and go to next line to log "End" in console.
//GEC will pop out of the stack.
//but eventlistner is staying at the web apis our callback function cb with an event click.
//once the button is clicked this cb method is pushed inside the callback queue and waits over there for it's turn to get executed.
//eventloop's only job is to monitor the call stack and callback queue.
//once a method goes to callstack it gets vanished from callback queue as well.

//fetch()
//fetch basically goes an request an api call and returns a promise and
//We have to pass an callback function which will be executed once the promise is resolved.
console.log("start");
setTimeout(function cb() {
    console.log("setTimeout calling")
}, 5000);
//setTimeout will register the callback function cb in web apis with an expiration of timer 5000 ms. and move on to next line.
fetch("https://api.netflix.com").then(function cbF() {
    console.log("CB Netflix");
});
console.log("End");
//fetch will make a network api call to netflix server.
//fetch will register the callback function cbF in web APIs.
//cbF is waiting for data to be returned from netflix server.
//once data is received from netflix server it will execute the call back function cbF 
//suppose the netflix server is fast and you receive the information data in 50 ms.
//Now you might think that the cbF function will go into the callback queue before cb function.
//Here comes microtask queue which is similar to callback queue and has higher priority.
//functiins inside microtask gets executed before callback queue with higher priority.
//function cbF will go into the microtask queue.
//once 5000 ms has expired cb function will go in callback queue and ready to be executed.
//but before the fetch and setTimeout end will be printed before.
//once nothing else there to execute gec will pop it.
//eventloop will check callstack ,if empty it will put the method cbF with high priority from microtask queue and execute it.
//once cb netlix is logged cbF goes out of callstack.
//cb goes inside callstack and log setTimeout calling and whole code will be executed like this.

//what can come inside the microtask queue?
//:All the call back functions which goes through promises and mutation observer will come to microtask queue.
//but all the other callback functions from setTimeout, dom api go to callback queue also known as task queue.

//Mutation observer
//::keeps on checking if there is some mutation in the DOM tree, if there is it can execute some callback function .

//Suppose there are 3 functions in micro task queue and 1 function in callback/task queue.
//:So eventloop will give oppurtunity to the function of callback queue to be executed once all the methods from microtask queue are executed.

//Starvation of Callback queue:
//JS gives priority to microtask queue methods over callback queue right?
//So if there is situation where the tasks keep getting pushed inside microtask queue and the callback queue method will never get opportunity to be executed.
//This situation is known as Starvation of Callback queue.