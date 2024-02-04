const hello = (name, greeting) => {
    console.log("Hello" + " " + name + "," + greeting);
  };
  const x = {
    name: "Jishu",
    role: "Js Dev",
    exp: 30,
    show: function () {
      console.log(this);//here in normal function this is referring to object x in it's  parent's lexical scope
      console.log("My name is " + this.name);
      console.log("My role is " + this.role);
      setTimeout(function () {
        console.log(this);//but inside this function it is referring to global window object not x ,
        //so you can not access this.name and all
        console.log("My name is " + this.name);
        console.log("My role is " + this.role);
      }, 2000);
    },
  };
  hello("Jishu", "Good Afternoon");
  console.log(x.name, x.exp);
  x.show();
// 1st fix is using a variable 'that' to store this
  const bye = (name, greeting) => {
    console.log("Hello" + " " + name + "," + greeting);
  };
  const y = {
    name: "Jishu",
    role: "Js Dev",
    exp: 30,
    show: function () {
      let that=this;//storing value of this x in that
      console.log(this);//here in normal function this is referring to object x in it's  parent's lexical scope
      console.log("My name is " + this.name);
      console.log("My role is " + this.role);
      setTimeout(function () {
        console.log(this);//but inside this function it is referring to global window object not x ,so you can not access this.name and all
        console.log("My name is " + that.name);//now that is referring to x and we can use that.name
        console.log("My role is " + that.role);
      }, 2000);
    },
  };
  bye("Jishu", "Good Afternoon");
  console.log(y.name, y.exp);
  y.show(); 
//2nd fix is using arrow function
const hi = (name, greeting) => {
    console.log("Hello" + " " + name + "," + greeting);
  };
  const z = {
    name: "Jishu",
    role: "Js Dev",
    exp: 30,
    show: function () {
      let that=this;
      console.log(this);//here in normal function this is referring to object x in it's  parent's lexical scope
      console.log("My name is " + this.name);
      console.log("My role is " + this.role);
      setTimeout( ()=> {//using arrow function which let's us directly use this lexical and we don't need another that
        console.log("My name is " + this.name);
        console.log("My role is " + this.role);
      }, 2000);
    },
  };
  hi("Jishu", "Good Afternoon");
  console.log(x.name, x.exp);
  z.show();