let x=5
let y=x++
console.log(y)//it will print 5 because in postfix's case first js will paste the initial value of x in y which is 5
console.log(x)//and after than it will increase the value of x to x+1 which is 6

let a=9
let b=++a
console.log(a)//in case of prefix first it will increase the value of a to 10 
console.log(b)//so b will also become 10 in case of prefix 

//operators 

// equality check(==) and comparisons (>,<,>=,<= work differently , comparison converts null toa number treating it as 0)
console.log(null>0) //false
console.log(null>=0) //true
console.log(null<0) //false
console.log(null<=0) //true
//these two does not 
console.log(null==0) //false
console.log(null===0) //false
//for undefined it does not 
console.log(undefined>0) //false
console.log(undefined>=0) //false
console.log(undefined<0) //false
console.log(undefined<=0) //false
console.log(undefined==0) //false
console.log(undefined===0)//false


