//remember this in node environment this is an empty object but in browser it refers to window object
const user = {
    username: "jishu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //here this refers to current object context which is user
        //so this here refers to user ,this.username===user.username
        // console.log(this);
    }

}

user.welcomeMessage() // jishu , welcome to website
user.username = "sam" //now context is changed to sam 
user.welcomeMessage()//will print sam , welcome to website

// console.log(this);

//this does not work the same way inside fucntion unlike object
function cofee(){
    let username = "jishu"
    console.log(this.username);//we can not access username using this.username
}

cofee() //so it will print undefined

const chai =  () => {
    let username = "jishu"
    console.log(this); //this will show an empty object because we are running in node in browser it will show the window object
}

chai()

//Arrow fucntion
const addOne = (num1, num2) => {
    return num1 + num2 //if we write return we have o define this inside {} block
}

const addTwo = (num1, num2) =>  num1 + num2

const addThree = (num1, num2) => ( num1 + num2 )
//above two statements are same as in we can use this format without return while defining arrow fucntions

const addFour= (num1, num2) => ({username: "jishu"}) //we can define objects inside arrow fucntion definitions


console.log(addFour(3, 4))

//this is for array methods
const myArray = [2, 5, 3, 7, 8]

myArray.forEach()