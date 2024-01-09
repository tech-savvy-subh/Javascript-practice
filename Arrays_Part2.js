const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) //this will push the elements in marvel_heros array and not create a new array
//output will look ugly and difficult to access the elemets
console.log(marvel_heros);  //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]); //this will print flash ,quiet complex to access as nested array is formed

const allHeros = marvel_heros.concat(dc_heros) //concat method creates a new array so storing it inside allHeros array
console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread operator , a better way of merging arrays where we just have to do this ...arrname and we can merge n number of arrays
//easily
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], [7, [6, 7, [4, 5]]]]

//flatting the array means breaking the nesting in order with depths level passed in flat method 
const real_another_array = another_array.flat(1)//this means with depth 1
console.log(real_another_array); //output [ 1, 2, 3, 4, 5, 6, 7, [ 6, 7, [ 4, 5 ] ] ]
const real_another_array1 = another_array.flat(2)//with depth 2
console.log(real_another_array1);//output [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ] 
const real_another_array2 = another_array.flat(3)//with depth 3
console.log(real_another_array2);//output [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5  ] 
//we can also break it using a single depth which is infinity 
const real_another_inf_array = another_array.flat(Infinity)//this means with depth Infinity
console.log(real_another_inf_array);


console.log(Array.isArray("Jishu"))//wheather the given value "Jishu" is an array or not it checks , it will return false
//because "Jishu" is a string and not an array
console.log(Array.from("Jishu")) //this from method will convert string "Jishu" to an array
//Otput: [ 'J', 'i', 's', 'h', 'u' ]
console.log(Array.from({name: "hitesh"})) // interesting this will return an empty array because we want to convert object
//to an array so we have not defined how it will be formed on the basis of key or value so it will show output:-> []

//Forming an array by merging individual variables
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//using Array global object's 'of' method