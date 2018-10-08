// DECLARE the array 
// let numArray = [1, 2, 3, 4, 5];

// // DISPLAY 15. INDEX of 15 is 1 since array starts at 0.
// // console.log(numArray[1]);

// // COUNT NUMBER OF INDEX in an array
// // console.log(numArray.length);


// // REPLACE the value of an element in the array
// numArray[2] = 20;

// // ADD another element
// // new element is added at the end of the array
// numArray.push(100);

// // EXCHANGE index of two elements in an array
// let temp = numArray[5];
// numArray[5] = numArray[2];
// numArray[2] = temp;

// // RE-ARRANGE/SOR elements in an array
// // NOTE: ONLY elements are rearranged. the index remains at 0 to __;
// numArray.sort(); //decending order
// numArray.reverse(); //ascending order



// // DISPLAY all elements of array
// // num = 0 --> index in an array always starts at 0
// for (let num = 0; num < numArray.length; num++){
// 	console.log(numArray[num]);
// }

// // DISPLAY NON-EXISTENT INDEX
// // console.log(numArray[8]); //result is undefined


// let fruits = ["banana", "apple", "durian", "coconut"];
// console.log(fruits.length); // display total number of index = 4
// fruits.push("eggplant"); // add element
// console.log(fruits.length); // display total number of new index = 5
// fruits.sort(); // sort decending order
// fruits.reverse(); // sort ascending order


// for (let num = 0; num < fruits.length; num++){
// 	console.log(fruits[num]);
// } // display elements




// ask users to input elements in an array

// fruits = []; // declare fruits as an array not a normal variable; no "let" kasi nadeclare na sya sa taas

// for (let num = 1; num <= 5; num++) { // "loop five times"
// 	let answer = prompt("Enter fave fruit"); // "ask user to name fave fruit for every loop"; answer variable catches user's fave fruit
// 	fruits.push(answer); // "add answer to fruits array"
// }

// for (num = 0; num < fruits.length; num++) { // num = 0 because we want all index to display, 
// 	console.log(fruits[num]); 
// }


// EXERCISE

let day = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"]
let gifts = ["a partridge in a pear tree", "2 turtle doves", "3 french hens", "4 calling birds", "5 golden rings", "6 geese a laying", "7 swans a swimming", "8 maids a milking", "9 ladies dancing", "10 lords a leaping", "11 pipers piping", "12 drummers drumming"];

for (num = 0; num < gifts.length; num++){
	
}


display.getElementById('output').innerHTML = "On the" += "day[num]" += "of Christmas, my true love sent to me" += "gifts[num]"; 