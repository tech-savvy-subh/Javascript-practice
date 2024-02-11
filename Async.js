//setTimeout() is an browser API we get in Javascript which can be used
//sometimes to hold a function execution for sometime.
// setTimeout(() => {
//   console.log("Jishu"); //jishu will be printed once in console after 5 sec.
// }, 5000);

//changing the h1 text using setTimeout after 2 sec.
// setTimeout((text1,text2)=>{
// const heading=document.querySelector('h1')
// heading.innerHTML=`${text1},${text2}`
// },2000,"Jishu ka Area","Sambhal ke ghusna")
//if you see the above setTimeout function you can see it receives 3 params
//1st is the cb function where we are passing two params text1,text2
//2nd is the timeout value which is 2000ms =2sec.
//3rd/4th..nth params you can add but these values are the arguements you are passing on the cb function

//Now we want to revert back the changes after click a button what should we do,
//just like setTimeout ther eis also a clearTimeout

const changeText = (text1, text2) => {
    document.querySelector("h1").textContent = `${text1},${text2}`;
  };
  let change = setTimeout(changeText, 5000, "Jishu ka Area", "Bachke Rahena"); //Here we have to give function reference which is
  // changeText and not changeText()
  document.getElementById('stop').addEventListener('click',()=>{
      clearTimeout(change) //This will basically stop the event when stop button is clicked and it will change the text you are
      //passing
      console.log('stop button has been clicked');
      console.log(change);
  })
  //console.log(change);
  
  //Let's clear it after clicking a stop button
  
  