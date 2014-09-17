var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

var returnFunction = function(){
	return threeItems[threeItems.length-1];
}

alert(returnFunction());


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//Fix 'dicedArray' below so that it's an array full of integers from 0-10
var dicedArray = [0,1,4,5,7,8,10];

dicedArray.splice(0, 0, 2, 3, 6, 9);
dicedArray.sort();


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

var remove = function(){
	for(var i = 0; i < evenArray.length; i++){
		if(evenArray[i] % 2 !== 0)
			evenArray.splice(i, 1)
	}
}
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30, and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var randomLoop = function (){
	var x = Math.random;
	for(var i = 0; i < randomArray.length; i++){
		if(randomArray[i] === x){
			return(true);
		}
		else {
			return(false);
		}
	}
}

alert(randomLoop());


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

var second = first.slice(0,5);
second.push(6,7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

var longest = function(string){
	var arrSplit = string.split(" ");
	var lgth = 0
	var longestWord;
	for(var i = 0; i < arrSplit.length; i++){
		if(arrSplit[i].length > lgth){
			var lgth = arrSplit[i].length;
			longestWord = arrSplit[i];
			alert(longestWord);
		}
	}
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

var capitalize = function(string){
	var string = string.split(' ');
	var newArr = [];
	for(var i = 0; i < string.length; i++){
		var firstLetter = string[i].charAt(0).toUpperCase();
		var restOfWord = string[i].slice(1);
		var wordToPush = firstLetter + restOfWord;
		newArr.push(wordToPush)
	}	
	return newArr.join(' ');
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
var vowelCounter = function(string){
	var string = string.split('')
	var counter = 0
	for(var i = 0; i < string.length; i++){
		if(string[i] === "a"||string[i] === "e"||string[i] === "i"||string[i] === "o"||string[i] === "u"){ 
			counter++;
		}
	}
	return counter;
}