//if statement 
// if(condition){
    //if the condition value is true code inside this {} scope will be xecuted or else not
// }
//operators
// Comparison Operators:

// == (equality, loose equality)
// === (strict equality)
// != (inequality, loose inequality)
// !== (strict inequality)
// > (greater than)
// < (less than)
// >= (greater than or equal to)
// <= (less than or equal to)
let a=2 //Assignment operator-->assigning a value 2 to variable a 
console.log(a)
console.log(2=="2") //this will return true cause datatype of 2 is not checked if it is sting or number-->true
console.log(2==="2") //but this will check datatype-->false

//if else statement demo
const price=100
if(price>50){
    console.log(`The price is : ${price}`)
}
else{
    console.log(`The price is not expected: ${price}`)
}
//but in above case either the block inside if or else will be executed on the basis of condition is satidfied or not
console.log(`The price in outer if else scope: ${price}`) //this line will be printed what ever condition we are passing in if else

//scope in if else
const isLoggedinTrue=true;
if(isLoggedinTrue){
    let paisa= 500
    console.log(`the price is: ${paisa} `) //paisa outside this if {} scope will not be accessiable
}
console.log(`the price is: ${paisa} `) //this will throw error if we pass paisa variable as let becaus ethe scope of let and const
//is blocked 

//but before es6 this was not the case
if(isLoggedinTrue){
    var paisa= 500
    console.log(`the price is: ${paisa} `) //paisa outside this if {} scope will  be accessiable because var is global scoped
}
console.log(`the price is: ${paisa} `) //wwe can access paisa outside if scope as the scope of variable type var is global scoped. 

//more than one condition
const doesUserIdExist=true
const isAlive=true
 if(doesUserIdExist && isAlive){ //just like && we can use || where it will only need to check if one condition satisfies
    console.log("user is alive and id is also there")
 }


