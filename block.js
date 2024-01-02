//what is a block in JS?
// Block is defined by this {} curly braces.
//why do we use this?
//:it is known as a compound statement.
//it is combinning multiple statements into a group.
{
    var a=10;
    console.log(a);
}
//why do we need a block?
//::So that we can group multiple statements in a group and use it when js expects to use 1 statement.
if(true) //this will give error as js expects a single statemnet but if you run the below code,
if(true){
    var a=10;
    console.log(a);  //compounding multiple statements where js expects one. 
}
//It will not give any error.
if (true) console.log("hi") //this is also correct syntax but for a single statemenet ,to use multiple statements you need to use the above block.
//Block Scope
{
    var a=10;//This will be hoisted in global scope with value undefined
    let b=20;//will be reserved in a separate memory space reserved for the block(hoisted in block space) not in global space scope with value undefined
    const c=30;//will be reserved in a separate memory space reserved for the block((hoisted in block space)) not in global space scope with value undefined
}
//That's why let and const are block scoped ,for them a special space is hold in memory block scope.
//let and const are not accessiable outside that block.
{
   var a=10;
   let b=10;
   const c=30;
   console.log(a);//will return 10
   console.log(b);//will return 20
   console.log(c);//will return 30
}
console.log(a);//will return 10 as it is in global scope
console.log(b);//will give ref error as it is in block scope
console.log(c);////will give ref error as it is in block scope

