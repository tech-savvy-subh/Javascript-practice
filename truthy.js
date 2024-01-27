const userEmail = []

if (userEmail) {
    console.log("Got user email"); //this will be printed because userEmail is an empty array which exists and will give true
    //value.
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN --> these are all falsy values

//truthy values
// "0", 'false', " ", [], {}, function(){} --> all these except falsy values are treated as truthy values

// if (userEmail.length === 0) { //checking length of an array
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { //checking the length of keys of an object using Object.keys Object is global object
    //constructor
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 //this is for checking null or undefined which we sometimes use when we expect a value to be printed
//sometimes when data is coming from backend or db when we don't want null or undefined to be printed but the value coming from 
//backend.



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")