//Exercise 1

let user = {
    name: "John",
    years: 30
  }
  let {name, years, isAdmin = false} = user;
  console.log( name ); 
  console.log( years ); 
  console.log( isAdmin ); 


  //Exercise 2
  var thisPlant = 'earth'
  var currentVisitor = 'Mo'

  //Exercise 3

  let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}
sayHi()
//alert is not defined


//Exercise 4
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

//Exercise 5

 user = {
      name: "John"
  };
user.name = "Pete";
console.log(user.name);

//Exercise 6
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}
let sum = 0;
for (let value in salaries) {
  sum += salaries[value];
}
console.log(sum)

//Exercise 7

// if (a + b < 4) {
//     result = 'Below';
//   } else {
//     result = 'Over';
//   }

let result
 (a + b < 4) ? 
    'Below' :  'Over';


//  Exercise 8

/*
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';