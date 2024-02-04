
// document.getElementById will return the first element with the id you will mention
// document.getElementsByClassName will return a HTMLCollection which you can also convert to an Array for manupulating dom
// document.querySelector and document.querySelectorAll works differently.and
// where querySelector only returns a single value but querySelectorAll returns a NodeList which is similar to Array
// but not array , we don't get map,filter ,reduce with NodeList.

// so if you want to use those you have to convert NodeList to an Array.
// you only get forEach method in nodelist
// to convert  NodeList and HTMLCollection to an Array you need to use this,
// Array.from(<name of the variable where you are storing NodeList/HTMLCollection >)

const parent = document.querySelector('.parent') //refer to one.html for this ,ther eis single element with class parent
    console.log(parent); //you will get the parent div here 
    console.log(parent.children);//using .children you will go inside the parent element and whatever child element is there 
    //you will be able to identify and it will return a HTMLCollection
    console.log(parent.children[1].innerHTML);//this will return the innerHTML inside second children and we can use similar to
    //array but it does not support all the array stuffs

    for (let i = 0; i < parent.children.length; i++) {
         console.log(parent.children[i].innerHTML);
        
    }//this code is suign for loop to print all the inneHTML inside all the children elements
    parent.children[1].style.color = "orange" //changing color of children element
    console.log(parent.firstElementChild); //this will print the first child element
    console.log(parent.lastElementChild); //this will print the last child element

    const dayOne = document.querySelector(".day") //this will select the first child with class day that means Monday one 
    console.log(dayOne);
    console.log(dayOne.parentElement);//this will give the parent elemet
    console.log(dayOne.nextElementSibling); //this will give the next child

    console.log("NODES: ", parent.childNodes); //this returns a Nodelist for child elements inside parent

    //creating a new element using DOM commands
    const div = document.createElement('div') //creating a div 
    console.log(div);
    div.className = "main" //asigning a class to that div
    div.id = Math.round(Math.random() * 10 + 1) //this will give a postive round number
    div.setAttribute("title", "generated title") //another way to create a title and assign a value to it
    //styling
    div.style.backgroundColor = "green" 
    div.style.padding = "12px"
    // div.innerText = "Chai aur code" inserting a text to our created element div
    //Another way to insert a text
    const addText = document.createTextNode("Life is good") //storing the text in a variable named addText
    div.appendChild(addText) //adding that text to our div , another way of showing text in our created div

    document.body.appendChild(div)//rendering that div