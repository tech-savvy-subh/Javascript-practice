let number= 33;
let string= "33abc"
let score= true
let score2="a"
//the below classes are for converting the datatypes
//some datatypes we can convert sometimes like 33abc is string we can't convert it to a number value
let booleanscore= Boolean(score2)
let numberString= String(number)
let stringNumber= Number(string)
let booleanNumber= Number(score);
let booleanNumber1= Number(score2);
console.log(number);//33
console.log(typeof number);//type of 33 is number
console.log(numberString);//33
console.log(typeof numberString);//type of 33 is string
console.log(stringNumber); //will print NaN 
console.log(typeof stringNumber);//type of NaN is number
console.log(booleanNumber);//will print 1 for value true,for value false it will print 0
console.log(typeof booleanNumber);//type is number 
console.log(booleanscore);//will print 0



