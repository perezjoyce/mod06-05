// EXERCISE

let day = [
	"1st", 
	"2nd", 
	"3rd", 
	"4th", 
	"5th", 
	"6th", 
	"7th", 
	"8th", 
	"9th", 
	"10th", 
	"11th", 
	"12th"
	];

let gifts = [
	"a partridge in a pear tree", 
	"2 turtle doves", 
	"3 french hens", 
	"4 calling birds", 
	"5 golden rings", 
	"6 geese a laying", 
	"7 swans a swimming", 
	"8 maids a milking", 
	"9 ladies dancing", 
	"10 lords a leaping", 
	"11 pipers piping", 
	"12 drummers drumming"
	];

let verse1 = "<br> On the ";
let verse2 = " day of Christmas, my true love gave to me: <br>"

/*============================================ LONGER CODE. WITH COMMA AND PERIOD ============================================*/

// OUTER LOOP
// for (let counter = 0; counter < day.length ; counter++) {
// 	let text = verse1 + day[counter] + verse2; // ON THE ___ DAY OF CHRISTMAS MY TRUE LOVE GAVE TO ME

// 	// DISPLAY FIRST SET
// 	if (counter == 0) {
// 		document.getElementById('output').innerHTML += text + gifts[counter] + '. ' +  '<br>';
// 	}

// 	// ALL OTHER SETS
// 	 if (counter > 0) {
// 		// DISPLAY FIRST TWO LINES FOR ALL OTHER SETS
// 		document.getElementById('output').innerHTML += text + gifts[counter] +  ', ' +  '<br>';

// 		// NESTED LOOP TO SHOW SUCCEEDING LINES (i.e., PREVIOUS GIFTS IN REVERSE ORDER)
// 		for (let counter2 = counter; counter2 > 0; counter2--) {

// 			let text2 = ''; // VARIABLE OR CONTAINER OF LOOP FOR PREVIOUS GIFTS

// 			if (counter2 == 1) {
// 				text2 = ' and ' + gifts[counter2 - 1] + '. ' + '<br>'; // SPECIFICALLY FOR LAST LINE FOR ALL SETS: AND A PARTRIDGE IN A PEAR TREE
// 			} 

// 			else {
// 				text2 = gifts[counter2 - 1] + ', ' + '<br>'; // ALL OTHER PREVIOUS GIFTS
// 			}

// 			document.getElementById('output').innerHTML += text2; // DISPLAY  ALL PREVIOUS GIFTS

// 		}

// 	}
	
// }


/*============================================ SHORTER CODE ============================================*/


for (let counter = 0; counter < day.length ; counter++) {
	let text = verse1 + day[counter] + verse2; // ON THE ___ DAY OF CHRISTMAS MY TRUE LOVE GAVE TO ME

	document.getElementById('output').innerHTML += text + gifts[counter] +  '<br>'; // DISPLAY FIRST SET
	
	if (counter > 0) {
		
		for (let counter2 = counter; counter2 > 0; counter2--) {

			let text2 = ''; // VARIABLE OR CONTAINER OF LOOP FOR PREVIOUS GIFTS

			if (counter2 == 1) {
				text2 = ' and ' + gifts[counter2 - 1] + '<br>'; // SPECIFICALLY FOR LAST LINE FOR ALL SETS: AND A PARTRIDGE IN A PEAR TREE
			} 

			else {
				text2 = gifts[counter2 - 1] + '<br>'; // ALL OTHER PREVIOUS GIFTS
			}

			document.getElementById('output').innerHTML += text2; // DISPLAY  ALL PREVIOUS GIFTS

		}

	}
	
}


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
