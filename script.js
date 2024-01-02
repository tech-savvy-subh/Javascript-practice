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

const course={
  coursename: "JS",
  price: "999",
  instructor: "Jishu"
}
const {instructor,coursename,price}=course
console.log(instructor)
const {instructor:Inst,coursename:cname,price:p}=course
console.log(Inst)


