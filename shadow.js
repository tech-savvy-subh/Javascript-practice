
//Shadowing
var a=100;
let b=50;
const c=60;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);//Here in line 6 it will shadow the value from line 3 and print 10 not 100
    console.log(b);//it is shadowing the value of b but in  block scope not in script(special memory space for let and const) is it will print 20
    console.log(c);//it is shadowing the value of b but in  block scope not in script(special memory space for let and const) is it will print 30
}
console.log(a);//Here in line 6 it will shadow the value from line 3 and print 10 not 100 because var a is pointing to same space in global memory scope
console.log(b);//Here it will print 50 because b in line 7 and 4 are different because one is block scoped and another is in a separate memory space script which is for let and const but it is not in block,
console.log(c);//Here it will print 60 because c in line 8 and 5 are different because one is block scoped and another is in a separate memory space script which is for let and const but it is not in block,
//It also works the same way for function,
var a=100;
function x() {
    var a=10;//a is shadowing the value to 10
    console.log(a);
}
x();//it will print 10 //but when function is executed the value 10 is also getiing erased
console.log(a);//it will print 100

//Illelegal shadowing
let a=20;
var x=20;
{
    var a=20;// it will give syntax error as a has been already declared using let and in block you can not use var to declare it again also known as illegal shadowing
    let a=30;//but you can do this you can shadow it using let but not using var
    let x=40;//you can shadow it this way and js will not throw any error.
}

//Blocks also follow lexical scope just like function.
const a=20;
{
    const a=100;
    {
        const a=60;
       console.log(a); 60
    }
    console.log(a);100
}
console.log(a);20
//it works same way as function and it also works same in arrow functions.

