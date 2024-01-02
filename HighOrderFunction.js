//Functional programming
//A function which takes another function as an arguement or returns a function form it, is known as Higher Order Function.
function x() {
    console.log("Namaste");
}
function y(x) {//y is a higher order function and x is the callback function
    x();
}
//Calculate these 3 values using js for the below radius given in the array
//Diameter 2r
//Circumference 2*pi*r
//area pi*r*r
//1st way and it is not the optimal way for doing it.
const radius=[9,8,7,4];

const CalculateArea= function(radius){
    const output=[]
    for(let i=0;i<radius.length;i++){
        output.push( Math.PI*radius[i]*radius[i]);
    }
    return output;
}
const CalculateDiameter= function(radius){
    const output=[]
    for(let i=0;i<radius.length;i++){
        output.push( 2*radius[i]);
    }
    return output;
}
const CalculateCircumference= function(radius){
    const output=[]
    for(let i=0;i<radius.length;i++){
        output.push( 2*Math.PI*radius[i]);
    }
    return output;
}
console.log(CalculateArea(radius));//This arguement radius is expecting an array .,instead of radius if you give 1 or 2 it will throw a blank array
console.log(CalculateDiameter(radius));
console.log(CalculateCircumference(radius));

//The above code is not optimal way of doing it because we are repeating the code too many times ,we have to folow the DRY principal
//Which is Do Not Repeat Yourself
//Below Code is the optimal solution
//In interview you should explain like this
//increased reusablity,modularity
//2nd prpgram
const radius1=[9,8,7,4];

const Area= function(radius){//function 1
return Math.PI*radius*radius;//returning the ouput of this function is supposed to return here which is Math.PI*radius*radius
//Area function is expecting an parametr to be passed which is radius
}
const Diameter= function(radius){//function 2
    return 2*radius;//same like function 1
}
const Circumference= function(radius){//function 3
    return 2*Math.PI*radius;//same like function 1
}

const Calculate= function(radius,logic){//Calculate function is expecting radius and an function logic as a paramter,
    //Here logic is a callback function and calculate is a Higher order function
    const output=[]//an empty array to store the calculated list of values
    for(let i=0;i<radius.length;i++){//traversing through the array here radius is becoming radius 1 because we are passing radius1 as an arguement
        output.push( logic(radius[i]));//logic function is calling Area fucntion at backend and Area function is expecting to pass a paramter
        //which is radius so radius has become radius[i] , paramters and arguement work like this only.
    }
    return output;//reurning the output
}
console.log(Calculate(radius1,Area));//This arguement radius is expecting an array .,instead of radius if you give 1 or 2 it will throw a blank array
console.log(Calculate(radius1,Diameter));
console.log(Calculate(radius1,Circumference));

//Above the calculate function is similar to map method in JS
//map is a common higher order function

const radius2=[9,8,7,4];

const Area1= function(radius){
return Math.PI*radius*radius;
}
console.log(radius2.map(Area1));//it will return the same value like above
//calculate the function we have written is how a map works in js which is a smaller functionaity of map
//If you want our calculate also to implement like map do the below chnages.
const radius3=[9,8,7,4];

const Area4= function(radius){
return Math.PI*radius*radius;
}
Array.prototype.calculate=function(logic){//make your calculate method bind the array prototype
    //we also removed the radius array we were passing as an arguemnt
    //but basically it was fetching the value from arguement which is radius3 in our case
    //so earlier radius==radius3 was happening
    //Right now this==radius3
    //This is how we right pollyfil
    //is'nt this great?
    const output=[];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));

    }
    return output;
}
console.log(radius3.calculate(Area4));
