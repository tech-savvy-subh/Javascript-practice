//Data Types has been segregrated on base of how data is stored in memory
//primitive-->call by value
//String,number,boolean,null(empty),undefined,symbol(to make a value unique),BigInt(values that can not be wrapped inside number)

//non-primitive-->call by reference
//Array,Objects,Functions

//JavaScript is a dynamically typed language. This means that the data type of a variable is determined at runtime, 
//and you don't have to explicitly specify the type of a variable when you declare it. 
//Variables in JavaScript can hold values of any type, and the type can change during the execution of the program. 

//Memory
//Stack --> For primitive data types--in stack we get copy of the varibale
//Heap-- for non primitive data types--in heap we get reference of the variable.

//Stack example

let stackvar1="Jishu" //as this is primitve data type it will store this variable stcakvar1 in stack
let stackvar2=stackvar1 //copying the stackvar1 value to stackvar2 
stackvar2="Subhasis" //here it is changing the value of stackvar2 to Subhasis but stackvar1 remains the same as the value was only
//copied
console.log(stackvar1); //prints Jishu
console.log(stackvar2); //prints Subhasis

//Heap example

let heapvar1={
    email: "Jishu@gmail.com",
    phnno: "9064048751"
}
let heapvar2=heapvar1 //herenas it is a non-primiive datatype it gives the ref of heapvar1 to heapvar2
heapvar2.email="subh@gmail.com" //hence we change the attrobute of heapvar2 this will be rflected in heapvar1 as well
console.log(heapvar1.email); //prints subh@gmail.com
console.log(heapvar2.email); //prints subh@gmail.com
