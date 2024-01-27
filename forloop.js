// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");//it will then print line number 5 and then again it will go back to line number 8 
    }
    console.log(element); //it will print till 4 but after 4 it will go to line number 6
    //then it will print from 5 to 10
    
}

// console.log(element); //this is not accessiable outside for loop scope

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`); //this is outer scope
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`); //inner scope
    console.log(i + '*' + j + ' = ' + i*j );//inner scope can accessouter scope value
   }
    
}
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length); //will print the length of the array
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]; //at each index the elements are getting store din this variable
    console.log(element); //printing the values going through whole for loop
    
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break //when we are apply break it will print Detected 5 and will not continue the loop
    }
   console.log(`Value of i is ${index}`); //so these lines will not be printed 
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue//in this case it will give one chance
    }
   console.log(`Value of i is ${index}`);//after Detected 5 it will skip the 6th one and will print rest of the lines
    
}