//Number
const number=50000 //as we are passing a number integer js is understanding it
console.log(number) 

const number1= new Number(400) //we are explicitly mentioning this has to be a number
//with Number object we get some methods

console.log(number1.toString().length); //converting number to a string and fetching the length of that string
//output is 3 as length of string 400 is 3

console.log(number1.toFixed(2)); //using toFixed we will have a precised value which will start after the decimal decimal,  
//in this case output is 400.00 as we ahve passed 2 in toFixed() method

const number2=400.1234
console.log(number2.toPrecision(4)); //this will give a precised value which will start before the decimal unlike toFixed.
//And here the output will be 400.1 as we have passed only 4 in the bracket , if we have passed 5 ouput would be 400.12

const number3= 100000000
console.log(number3.toLocaleString('en-IN')); //converting the number to indian version('en-IN') of string as we quote 
//our numbers in lakhs and crores


//Maths

console.log(Math)
console.log(Math.abs(-1)); //this will convert the negative to postive but it will not make positive to negative
console.log(Math.round(4.2)) //this will convert the decimal to greater number , ex: 4.6 will be converted to 5 and 4.2 to 4
console.log(Math.ceil(4.2));//this will convert the decimal to greater number , ex: 4.6 will be converted to 5 and 4.2 to 5
console.log(Math.floor(4.9))//this will convert the decimal to lessser number , ex: 4.9 will be converted to 4 and 4.2 to 4
console.log(Math.max(3,4,2,1)) //used to fetch the max number
console.log(Math.min(3,4,2,1)) //used to fetch the min number

console.log(Math.random()) //this will give a random number which will be bw 0 and 1 
console.log((Math.random()*10) + 1); //his will give a random number larger than 1 
const max=20
const min=10
console.log(Math.floor(Math.random()* (max-min+1))+min)//generating a random number in between range of 10 and 20
//Math.floor is used to have a value without decimal 
