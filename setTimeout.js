//setTimeout has trust issues,The timer you mention in setTimeout does not gurantee that it will execute the call back
// function after that timer expires everytime,It all depends on callstack
console.log("start");
setTimeout(function cb() {
    console.log("setTimeout calling")
}, 5000);
console.log("End");
//Supppose here are millions lines of code which needs atleast 10 sec to execute and timer is of 5 secs.
//what will js do?
//It will not print the setTimeout calling even after the timer has expired and wait for gec from call stack to pop out.
//Because that is how it works , a fucntion form callback queue will go into the callstack when it is empty.
//if gec is still getting executed in callstack it will not put the cb queue method in callstack.
//so after 10 secs it will call the cb quque method and execute it in callstack.
//That is why setTimeout has trust issues ,
//It is also known as concurrency model in JS.
console.log("start");
setTimeout(function cb() {
    console.log("setTimeout calling")
}, 5000);
console.log("End");
//let's block the main thread for 10 secs though it is suggested not to block
//new Date()=returns the current date it is Date api features.
//new Date().getTime()= returns current time in milliseconds.
//The below code is blocking the main thread for 10 secs ,both the value of startDate and endDate is same
//but in while loop we are giving the condition to wait for 10 sec or 10000 ms.
//it will update the end date every millisecond for 10000 milliseconds.
let startDate=new Date().getTime();
let endDate=startDate;
while(endDate<startDate+10000){
endDate=new Date().getTime();
}
console.log("while expires");
//it will print the above code in this order
/*
Output:
Start
End
while expires(after waiting for 10 secs)
setTimeout calling
*/
//why js has one call stack?
//it is a single threaded synchronous language and a main thread but we can do asynchronous operation as well.
//It has just in time compilation.
//setTimeout with zero will also throw same behaviour because the callback function will go inside callback queue.
console.log("start");
setTimeout(function cb() {
    console.log("setTimeout calling")
}, 0);
console.log("End");
//Output
/*
Start
End
setTimeout calling
*/
//if we have to defer some piece of code we can use this,means we want that piece of code to be executed later part in code .
