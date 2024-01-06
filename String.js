//String we can define like this in js
const name ="Jishu"
const age = 23
const printname= "My name is "+ name; //this is how we concatenate strings but not an optimal way of doing it 
console.log(printname);

//Instead we can use backticks(``) which is modern way of doing 

const printmyname=`My name is ${name} and my age is ${age}`
console.log(printmyname);

//String methods 
const str= new String("Subh") //another way of defining strings 

// String has built in methods in js
console.log(str.length); //print the length of the string , we don't use length() like array here we only use length
console.log(str.toUpperCase()); //convert it to uppercase
console.log(str.charAt(0));  //method to print value at index 0 but don't compare it with an array because gets store in form of 
//object where 0 is key and 'S' is value
console.log(str.indexOf('u')); //print the index of a particular char in the string
//substring
const substr= new String("Subh-Mandal")
console.log(substr.substring(0,3)); //this will print from index 0 to till index 2 and not print till index 3 that means the last one
//slice
console.log(substr.slice(0,5));//this will print from index 0 to till index 2 and not print till index 5 that means the last one

//both substring and slice might show similar traits but there is difference
//slice allows the use of negative indices to count from the end of the string.
//substring does not support negative indices.
//If the starting index is greater than the ending index:
//slice simply returns an empty string.
//substring swaps the indices before extracting the substring.
//If either parameter is null or undefined:
//slice treats them as if they were 0.
//substring treats them as 0.

//trim
const trimstr= "  jishu    "
console.log(trimstr); //this will print jishu including the spaces
console.log(trimstr.trim()); //this will remove all the spaces from the string and just print jishu

//replace
const replacestr= "jishu are a boy"
console.log(replacestr.replace("are","is")) //replace are with is inside the string
//includes
console.log(replacestr.includes("are")) //will return a boolean true if are exists inside the string
//Split
const splitstr= replacestr.split(" ") //splitstr is now an array 
console.log(splitstr) //this will split the string using separator as a space(" ") and will form an array 
