// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } switch case boiler plate code

const month=1;
switch (month) {
    case 1: //we can also use the same with string as well, meaning of this line is if month==1 
        console.log("Jan");
        break; //if you don't use break it will also print rest of the code except default case which we don't want
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        break;//this is like if no condition is satisfied then do this similar to else
}