//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

var favoriteThings = {
  band: 'Tallest Man on Earth',
  food: 'Pizza',
  person: 'Allison',
  book: 'Name of the Wind',
  movie: 'Matrix',
  holiday: 'Christmas'
}
//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = 'Audi';
favoriteThings.brand = 'Apple';

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

favoriteThings.food = 'Lettuce';
favoriteThings.book = '50 Shades of Gray';

//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThings.person);
alert(favoriteThings.book);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

for(var key in user) {
  if(!user[key]){
    delete user[key];
  };
}

//Once you get your truthy array, Change the remaining values in the array to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = 'Zac Gorringe';
user.pwHash = 'blah';
user.username = 'zgorringe';

//Now console.log your object and make sure it looks right.

console.log(user);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

var alertHello = function(){
  alert('Hello');
}

var logHello = function(){
  console.log('Hello');
}

methodCollection.func1 = alertHello;
methodCollection.func2 = logHello;

//Now call your alertHello and logHello methods. 

methodCollection.func1();
methodCollection.func2();

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var testString = "This is a test";

  var object = {
  a: 0,
  e: 0,
  i: 0,
  o: 0,
  u: 0
  }

var voweler = function(string) {
  var string = string.split('');
  for(var i = 0; i < string.length; i++){
    if(string[i] === "a") {
      object.a++;
    }
    else if(string[i] === "e") {
      object.e++;
    }
    else if(string[i] === "i") {
      object.i++;
    }
    else if(string[i] === "o") {
      object.o++;
    }
    else if(string[i] === "u") {
      object.u++;
    }
  }
}

//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};
