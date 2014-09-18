/* Declare and Define the functions here that will make the function calls below work properly */

var first = function(arr, cb) {
  var thisName = names[0];
  cb(thisName)
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});







/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var last = function(arr, cb) {
  var thisName = names[names.length -1];
  cb(thisName)
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var contains = function(name, cb) {
  var hisName = false;
  for(var i = 0; i < name.length; i++) {
    if(name === names[i]) {
      hisName = true;
    }
  }
  cb(hisName);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

contains('Colt', function(yes){
  if(yes){
    alert('Colt is in the array');
  } else {
    alert('Colt is not in the list');
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var map = function(arr, cb){
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    newArr[i] = cb(arr[i]);
  };
  return newArr;
}


var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  console.log(num * 2); //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var uniq = function(arr, cb) {
  var uniqArr =  arr.sort();
  for(var i = 0; i < uniqArr.length; i++) {
    if(uniqArr[i] === uniqArr[i - 1]) {
      uniqArr.splice(i, 1);
    }
  }
  cb(uniqArr)
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var each = function(arr, cb) {
  for(var i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

each(names, function(item, indice){
  console.log('The item in the ' + indice + 'position is ' + item)
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var getUserById = function(id, cb) {
  var user;
  for (var key in users) {
     user = users[key];
     for (var prop in obj) {
        if(user[prop] === '16t'){
          console.log(user.name && user.email && user.address);
        }
     }
  }
  cb(user);
}

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById('16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var find = function(nums) {
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
      var num = nums.push(nums[i]);
    }
    alert(num);
  }
}


//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
})
