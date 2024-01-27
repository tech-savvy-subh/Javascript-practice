//while loop
let index=0
while(index<5){
    index++; //this is needed which will keep the value of index changed on every itertion or els eonly zero will be pronted
    console.log(`the value of index is : ${index}`)
}

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`); //will pront all the elements in the array
    arr = arr + 1 //this is same as arr++
}
//do while loop is a special case where you first want to execute the code and then check the condition 
let score = 11

do {
    console.log(`Score is ${score}`); //in this case first it will print score is 11 cause it is not checking the condition on 
    //first attempt then value of score will be incremented to 12
    score++
} while (score <= 10); //then it will come here and check is 12<=10 the answe ris no so loop will break and code execution will 
//end