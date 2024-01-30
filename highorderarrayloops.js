//for of
const arr=[1,2,3,4,5]
for (const i of arr) { //traversing through the array using for of loop
    console.log(i)
}
const str="Hello Jishu"
for (const s of str) { //strings are also treated as arrays , here s refers to each element in the string
    console.log(s)
}

//maps can be iterated using for of loop
const map = new Map() //here map is a type of object created using new keyword
console.log(typeof(map));

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") //It will not take this duplicate entry
console.log(map);

for (const [key, value] of map) { //[key,value ] it shows array destructuring
    console.log(key, ':-', value);
}

//traversing through object using for of is not possible
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

//traversing through object using for in loop
for (const key in myObject) {
    // console.log(key); //this will only print the keys which is game1 and game2 
    //if we want to print the values we will do
    console.log(`my key is ${key} and value is ${myObject[key]}`);
}
//traversing through array using for in loop
const myarr=["dog","cat","goat","kundu"]
for (const key in myarr) {
    // console.log(key);//this will only print the index of the elements which is also known as keys
    //always remember in js arrays also have keys
    console.log(myarr[key])
}
//but the same if we use using for of we don't have to use key for showing the elements
//we can directly use the iterator
for (const iterator of myarr) {
    console.log(iterator);
}
//on maps we can't use for in

const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

// Using for...in to iterate over keys
for (const key in myMap) {
    console.log(key); // nothing will come

}

//For objects we mostly use for in loop

//For Each method
const arrr=["boka","stupid","little","idiot"]
//For each method expects a call back function where in the param of the cb function it is giving us the iterator 
//of each elemnet in the array
//in function block we can implement logic
arrr.forEach(function(item){
    console.log(item)
})
//for each with arrow function 
arrr.forEach((item)=>{
console.log(item);
})

//can i call my own function in for Each method

function printMe(item){
    console.log(item);
}

arrr.forEach(printMe) //we have to pass function reference here not the execution of the function

arrr.forEach( (item, index, arr)=> { //for Each has access to more than 1 param
    //item is the iterator element, index of that element and then the array itself
    console.log(item, index, arr);
} )

//An array of object
const myarrr = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myarrr.forEach( (item) => {//using forEach we can print the values fetched from the object
    
    console.log(item.languageName);
} )



