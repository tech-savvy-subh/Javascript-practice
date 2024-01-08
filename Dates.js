// Dates

let myDate = new Date() //current date
console.log(myDate.toString()); //this will give the output like Mon Jan 08 2024 13:40:59 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());// Mon Jan 08 2024 -->more readable format in precise order without hour,min,sec details
console.log(myDate.toLocaleString());// 8/1/2024, 1:40:59 pm -->more readable format in precise order with hour,min,sec details
console.log(typeof myDate); //type of this is object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toLocaleString()); // 23/1/2023, 12:00:00 am-->if we don't mention hours and mins

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleString()); //23/1/2023, 5:03:00 am--> if we mention

let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleString()); //14/1/2023, 5:30:00 am--->yy/mm/dd format

let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString()); //14/1/2023, 12:00:00 am--> dd/mm/yy format more of indian 

//Both methods essentially achieve the same result, providing the current timestamp. 
//The primary difference is that myCreatedDate.getTime() is used when you already have a Date object, 
//and Date.now() is a more concise way to get the current timestamp without explicitly creating a Date object.
let myTimeStamp = Date.now()

console.log(myTimeStamp); //this will give current time in milliseconds calculated from January 1, 1970, 00:00:00 UTC
console.log(myCreatedDate.getTime()); //when we already have a date we use this 
console.log(Math.floor(Date.now()/1000));//to get accurate value in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //to fetch the current month 
//The getMonth() method in JavaScript returns the month of a date as a zero-based index, 
//where January is represented by 0 and December by 11. So, when you use getMonth() on a Date object,
// it returns a number between 0 and 11.
//To display the month in a more human-readable format, where January is represented by 1 and December by 12, 
//you add 1 to the result of getMonth(). This is why you often see +1 when extracting the month from a Date object:
console.log(newDate.getDay());//to fetch the day 

// `${newDate.getDay()} and the time ` //using backticks with string interpolation inside string

// newDate.toLocaleString('default', { //toLocalString expects an object where we can modify the date the way we want.
//     weekday: "long",
    
// })
