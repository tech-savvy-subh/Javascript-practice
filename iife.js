//Immediately Invoked Function Expression
// () ->we know that using this we can make use of blocks{} easily
//To get rid of global scope pollutions (variables) we use iife
//Executing a normal js function
function chai(){
    console.log("chai pieynge")
}
chai();//also make sure when you are using more than one iife use semicolon to make js understand

//iife way of executing ()()
(function cofee(){
    //this is also known as named iife cause the function has a name cofee
    console.log("cofee pieynge")
})(); //make sure when  you use iife you use the semicolon cause js does not know where your code is ending 

//iife with arrow function
((name)=>{
    //unnamed iife
    console.log(`Pani piyenge, wobhi ${name} ke haat se`);
})('jishu')

//Both patterns are used to encapsulate code within a function and execute it immediately.
// They are commonly employed to create private scopes, manage variable scope, and avoid polluting the global namespace.
// The choice between named and unnamed IIFE often depends on whether you need the function name for debugging or 
//if you simply want to create an anonymous function for a one-time execution.