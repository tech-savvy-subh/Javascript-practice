const arr=[1,2,3,4,5]
const myheros=['luffy','zoro']
const myarr=new Array(1,2,3,4,5)
console.log(myarr);
myarr.push(6) //adding an element
myarr.pop()//removing last element
myarr.unshift(9) //adding an element in the begining
myarr.shift()//removing the added elemennt using unshift at the begining

console.log(myarr);

console.log(myarr.includes(9)); //returns boolean and checks if the element exist or not in the array
console.log(myarr.indexOf(3)); //returns index of the element

 const newArr = myarr.join()

console.log(myarr);
console.log( typeof newArr); //join method converts array to a string in js

// slice, splice
console.log("A ", myarr); //original array

const myn1 = myarr.slice(1, 3) //slicing the array from index 1 to 3
//storing it in myn1 array
console.log(myn1); //will print [2,3] because it will print elments of index 1 and 2 and exclude index 3
console.log("B ", myarr); //will print the original array which remains same


const myn2 = myarr.splice(1, 3)
console.log("C ", myarr);//but when we use splice it takes all the elements from index 1 to 3 and removes from original array[1,5]
console.log(myn2); //prints the removed elements from index 1 to 3 [2,3,4]

// splice modifies the original array by adding, removing, or replacing elements in place.
// slice creates a new array containing a portion of the original array without modifying the original array.

// Shallow Copy:
// A shallow copy of an array creates a new array, but it only copies the references to the objects within the original array. 
// It doesn't create new copies of the objects themselves.
// If you modify the properties of an object in the original array, you'll see the changes in the shallow copy as well:
// This happens because the objects inside the shallow copy point to the same objects in the original array.

// Deep Copy:
// A deep copy, on the other hand, creates a new array and completely duplicates the objects within the original array. 
// Changes made to the objects in the original array do not affect the objects in the deep copy.
// Now, if you modify the properties of an object in the original array, it won't affect the deep copy:

