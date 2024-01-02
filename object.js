//Objects can be defined in many ways
// Singleton
//objects can be create dusing Object.create

//Object literals
// Defining a Symbol
const mySym= Symbol('key1');
//This is defined as non singleton and defined as object literals
const user={
  name: "Jishu",
  "full name": "Subhasis Mandal", //if we do console.log(user.full name) it will throw error
  isLoggedIn: false,
  lastLoginDays: ["Monday"],
  [mySym]:"mykey1" //once we define it this way it becomes a symbol inside the object
}
console.log(user.name)
console.log(user["name"])//in a js objects keys are treated as strings ,both the above concole logs are same
console.log(user["full name"])//correct way to console log string as key if we are directly mentioning it
console.log(user.mySym) //here we are able to see the value of the mySym key but it is not getting used as a symbol
console.log(user[mySym]) //here we are able to see the value of the mySym key but it is not getting used as a symbol

//Suppose we want to change the value of one key
user.name="Tanay Mandal"
console.log(user.name)//you will use the updated value of user.name from Jishu to Tanay Mandal
//Object.freeze(user)//but if we don't want the value of our object key to be updated we will simply freeze it
user.name="Eti Mandal"
console.log(user.name)//This will again show the value as Tanay Mandal and not Eti Mandal because we have applied freeze over it.

user.greetings=function (){
    console.log("hello i am a good boy")
}
console.log(user.greetings); //this will come as function reference something like [Function (anonymous)]
console.log(user.greetings());//this will return "hello i am a good boy" as we are executing the function here

user.greetingsTwo=function (){
    console.log(`I am a good boy and my name is, ${this.name}`) //string interpolation using backticks
    //this here refers to the current object which is user
}
console.log(user.greetingsTwo())

//Singleton , Constructor
const myApp= new Object() //this is singleton object and can also be declaed like const myApp={} ,which is a non-singleton way
console.log(myApp)//resulting output is {}

const tinderUser={
  age: 26,
  isLoggedIn: true ,
  fullname: {
    firstname: "Subh",
    lastname: "Mandal"
  }
}
console.log(tinderUser.fullname.firstname) //printing values within nested objects 
console.log(tinderUser?.fullname?.firstname)//optional chaining ,we use this because when we fetch data from backend APIs,
//it may miss some values and our code may crash if that key is missing so to control the error we use this.
//if suppose a value a does not exist just like below example , it will simply return undefined
console.log(tinderUser?.fullname?.firstnam)

//Some methods we should know about object
//All of the below output will be put inside an array 
console.log(Object.values(tinderUser));//printing values of the object tinderuser
console.log(Object.keys(tinderUser));//printing keys of the object tinderuser
console.log(Object.entries(tinderUser))//printing entries in aneste array 
console.log(tinderUser.hasOwnProperty("fullname"))//if the fullname key exist or not and will return boolean
console.log(tinderUser.fullname.hasOwnProperty("firstname"))//for nested objects

//Merging Objects
const obj1={id1:1,name1:"j"}
const obj2={id2:2,name2:"k"}
const obj3={id3:3,name3:"l"}


const myobj={obj1,obj2,obj3} //Here merging will happen but output will be like 
console.log(myobj)
/*
{
  obj1: { id1: 1, name1: 'j' },
  obj2: { id2: 2, name2: 'k' },
  obj3: { id3: 3, name3: 'l' }
}
*/

//Using Object.Assign
const myobj1=Object.assign({},obj1,obj2,obj3); //this only works if the properties /keys of each object is different
//here the {} referes to the target and rest is referred to the source so all the values after mergingwill be copied inside target 
//block, Keep in mind that Object.assign() creates a shallow copy, meaning that if the properties themselves are objects, 
//only their references are copied, not the objects they point to
console.log(myobj1)

//using spread operator
// Certainly! The spread operator (...) in JavaScript is a syntax for expanding or spreading the elements of an iterable 
// (like an array or string) or the properties of an object. It allows you to easily copy values or properties from one 
// array, object, or other iterable to another.
const myobj2={...obj1, ...obj2, ...obj3} //most of the time we will be using this 
console.log(myobj2)

//Object Destructuring

const course={
  coursename: "JS",
  price: "999",
  instructor: "Jishu"
}
const {instructor,coursename,price}=course //An way of destructuring
console.log(instructor)
const {instructor:Inst,coursename:cname,price:p}=course//using alias for thr keys
console.log(Inst)

