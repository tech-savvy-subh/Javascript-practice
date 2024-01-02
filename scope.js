//Scope in js is related to lexical envrionment
//scope is basically where you can access your variable or function in code
function a(){
console.log(b);
//for the above line first it will try to access b in local memory if not it will search in global scope and fetch it and return 10
//you might think why it did not return not-defined or undefined but it will not it will fetch the value from global scope and return it.
}
var b=10;
a();

function x(){
    y();
    function y(){
        console.log(z);
    }
    var z=10;
}
x();
console.log(a);//here it will give reference error
/*what is the scope of a variable?relation with lexical enviromnet?
: whenever an execution context is created a lexical environment is also created
Lexical environment is the local memory along with lexical enviroment of it's parent.
Lexical means hierarchy/in-sequence
scope chain is the chain of lexical environments.
suppose u have created a function inside a function ,that's when this concpet comes into the picture.
child will refer to it's parent ,that's how it works.
lexical environment of function y is it's local memory+lexical environment of function x
lexical environment of function x is it's local memory+lexical environment of global space
and y has access to scope of x and it's parent which is also known as scope chain.
*/