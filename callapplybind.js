//call() method
let name = {
  firstname: "jishu",
  secondname: "mandal",
  printFullname: function () {
    console.log("My Full name is " + this.firstname + " " + this.secondname);
  },
};
name.printFullname(); //This will print My Full name is jishu mandal
//suppose we want use the printFullname function in anoher object
//but do not want to write it agin inside of the object.
let name2 = {
  firstname: "virat",
  secondname: "kohli",
};
//for this we ahve to implement the fucntion borrowing mechanism using call() method
name.printFullname.call(name2); //we can use this call method with any js function.

//there is a better way to write this code
//the below code works the same way like above but a better version of it
//out put is same
let name3 = {
  firstname: "jishu",
  secondname: "mandal",
};
let printFullname = function () {
  console.log("My Full name is " + this.firstname + " " + this.secondname);
};
let name4 = {
  firstname: "virat",
  secondname: "kohli",
};
printFullname.call(name3);
printFullname.call(name4);

//Suppose you want to pass some arguements with the function.
let name5 = {
  firstname: "jishu",
  secondname: "mandal",
};
let printFullname1 = function (hometown, state) {
  console.log(
    "My Full name is " +
      this.firstname +
      " " +
      this.secondname +
      " and my hometown is " +
      hometown +
      "and my state is " +
      state
  );
};
let name6 = {
  firstname: "virat",
  secondname: "kohli",
};
printFullname1.call(name5, "jhargram", "west benagl"); //here the first arguement is of the object and second and third one are the paramters/args 
//we are passing with the function
printFullname1.call(name6, "delhi", "delhi");

//Apply method
//main diff bw call and apply is how you pass the args with the function

let name7 = {
  firstname: "jishu",
  secondname: "mandal",
};
let printFullname2 = function (hometown, state) {
  console.log(
    "My Full name is " +
      this.firstname +
      " " +
      this.secondname +
      " and my hometown is " +
      hometown +
      " and my state is " +
      state
  );
};
let name8 = {
  firstname: "virat",
  secondname: "kohli",
};
printFullname2.apply(name7, ["jhargram", "west benagl"]); //main difference between call and apply is we pass the func args/params 
//as an array or list
printFullname2.apply(name8, ["delhi", "delhi"]);

//Bind method
//main difference between call and bind is that ,it creates a new copy of the function
//and bind it with the object you will pass with the function,so later we can call it anytime we need.
let name9 = {
  firstname: "jishu",
  secondname: "mandal",
};
let printFullname3 = function (hometown, state) {
  console.log(
    "My Full name is " +
      this.firstname +
      " " +
      this.secondname +
      " and my hometown is " +
      hometown +
      " and my state is " +
      state
  );
};
let name10 = {
  firstname: "virat",
  secondname: "kohli",
};
let bindmyname = printFullname3.bind(name10, "delhi", "delhi");
console.log(bindmyname); //it is a function which are logging
bindmyname(); //copy of the printFullname3 which are invoking
