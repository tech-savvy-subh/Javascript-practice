//Map method
const arr = [1, 2, 3, 4, 5];
//Double the elements in the array using map function
function double(x) {
  return x * 2;
}
//Triple the elements in the array using map function
function triple(x) {
  return x * 3;
}
//Binary the elements in the array using map function
function binary(x) {
  return x.toString(2);
}

const output = arr.map(binary); //map function at the backend is traversing
//the arr elements and implementing everything passed on the insider method.

//using Higher Order Function in short format we can remove the return statement
//if it is an one-liner and the curly braces can also be removed.
const output2 = arr.map((x) => x.toString(2));
//This code is also same
// const output3=arr.map((x)=>{
//    return x.toString(2)
// });

// arr.map creates another Array and transform every value inside it as defined in the insider function/mehod

console.log(output2);

//Filter method

const arr1 = [1, 2, 3, 4, 5];
// function isOdd(x){
//     return x%2;//This return a boolean value true or false
// }
const output3 = arr1.filter((x) => x % 2); //will return the odd numbers by filtering out using filter method.
console.log(output3);

//Reduce method
//let's see a normal way of finding the sum of elements in an array.

const arr4 = [1, 2, 3, 4, 5];
function findSum(arr4) {
  let sum = 0;
  for (let i = 0; i < arr4.length; i++) {
    sum += arr4[i];
  }
  return sum;
}
console.log(findSum(arr4));

//using reduce method
const arr5 = [1, 2, 3, 4, 5];
const output4 = arr5.reduce((acc, curr) => {
  //This reduce method expects two args,
  // 1st is the cb function which takes 2 args
  // 1st is accumulator(acc) and 2nd is Current element(curr)
  //If you take refrence from the above code acc is kind of similar to sum variable which is accumulating the sum
  //curr is referring to the current element(arr[i]) while traversing through the array .
  //2nd is the initial value for the acc which in above code you are seeing let sum=0;
  acc += curr;
  return acc;
}, 0); //Here we are passing it 0 the second argument for the reduce method which will initialize the acc variable
console.log(output4);

//find the max number in the Array using reduce method

const arr6 = [6, 2, 3, 4, 5];
const output5 = arr6.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(output5);

//normally without reduce method
const arr7 = [6, 2, 3, 4, 5];
function findMax() {
  let max = 0;
  for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] > max) {
      max = arr7[i];
    }
  }
  return max;
}
console.log(findMax());

//Tricky programs
const users = [
  { firstName: "Jishu", lastName: "Mandal", age: 24 },
  { firstName: "Subh", lastName: "Mandal", age: 24 },
  { firstName: "Tanay", lastName: "Mandal", age: 63 },
  { firstName: "Eti", lastName: "Mandal", age: 52 },
];
//Getting list of full names using map method
//x is refered here as each object and x.firstName/lastName/age is it's properties
const op = users.map((x) => x.firstName + " " + x.lastName);
console.log(op);

//How many users are with same age? or a particular age?or an unique age?
//we would be using reduce for this because we want  one value object
//Here acc is an empty array which we are initializing it with
//curr is refered as each object in the array while traversing through it.
//here in return we are expecting an object not an Array so we are using reduce method
const ap = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age]; //after every traversal the acc object will be updated if age is repating it will be incremented to 2,3 this way
  } else {
    acc[curr.age] = 1; //if the age is initially not in our empty object update it with 1 time
  }
  return acc; //it will return acc object
}, {});
console.log(ap); //the return type is an object
//Output
//acc={24:2,63:1,52:1}

//Find out the firstName of people whose age is less than 30

//This is using map and filter together
//so instead of users.filter(x=>x.age<30).map((x)=>x.firstName) if you would have written users.filter(x=>x.age<30), The result would have been
// [{ firstName: "Jishu", lastName: "Mandal", age: 24 },
// { firstName: "Subh", lastName: "Mandal", age: 24 }]
const pp = users.filter((x) => x.age < 30).map((x) => x.firstName);
//After applying map over the above fetched result we are getting both the firstNames in an Array format
//["Jishu","Subh"]
console.log(pp);
//implemeneted same using reduce method
const pq = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(pq);
//Output : ["Jishu","Subh"]

