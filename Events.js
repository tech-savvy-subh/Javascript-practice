document.getElementById('photoshop').onclick=()=>{ //after clicking the image photoshop the below alert will show up.
    alert('Photoshop has been clicked')
}
//there is a better way to catch an event of clicking osmething 
document.getElementById('owl').addEventListener('click',()=>{
    alert('owl has been clicked')
})

//Event bubbling , capturing and event propagation
//In our html we have a parent element ul with id 'images'and child elements li with diff ids.
//Now we will see how we can catch the events from these elements

//In this case what will happen is, if any image other than japan one has been clicked we will see ul has been clicked
//in console first
// document.getElementById('images').addEventListener('click',()=>{
//     console.log('ul has been clicked')
// },true) //by default this value is false but if it is true first the parent will be captured and then child.
// //If you keep it false or leave it as it is it will do the event propagation in a bubbling format
// //But if we click on Japan then first japan has been clicked will come then it will go to parent element ul and print 
// // ul has been clicked
// document.getElementById('japan').addEventListener('click',(e)=>{
//    // e.stopPropagation() //if this has been used then this event will not go up to parent element.
//     console.log('japan has been clicked')
// },true)

//All of this is known as event bubbling if the third paramter is kept false which is by default false anyways , event propagation
//happens and event will bubbled to upper parent element 
//We can stop this with event.stopPropagation() method as well.

//You don't want to send the request to google.com 
document.getElementById('google').addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    console.log('google clicked');
})