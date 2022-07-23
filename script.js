// 81. Return Early Pattern for Functions

// function abTest(a, b) {
//   if (a < 0 || b < 0) {
//     return undefined;
//   }
//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// abTest(2,2);

// 82. Counting Cards

// let count = 0;

// function cc(card) {

// switch(card) {
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//   count++;
//   break;
//   case 10:
//   case "J":
//   case "Q":
//   case "K":
//   case "A":
//   count--;
//   break;
// }
// if (count > 0) {
//   return count + " Bet";
// } else {
//   return count + " Hold";
// }
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');

// 83. Build JavaScript Objects

// const myDog = {
//   name: "Jack",
//   legs: 5,
//   tails: 10,
//   friends: [1,2]
// };

// 84. Accessing Object Properties with Dot Notation

// const testObj = {
//   "hat": "ballcap",
//   "shirt": "jersey",
//   "shoes": "cleats"
// };
// const hatValue = testObj.hat;
// const shirtValue = testObj.shirt;

// 85. Accessing Object Properties with Bracket Notation

// const testObj = {
//   "an entree": "hamburger",
//   "my side": "veggies",
//   "the drink": "water"
// };

// const entreeValue = testObj["an entree"];
// const drinkValue = testObj["the drink"];

// 86. Accessing Object Properties with Variables

// const testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };

// const playerNumber = 16;
// const player = testObj[playerNumber];

// 87. Updating Object Properties

// const myDog = {
//   "name": "Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };

// myDog.name = "Happy Coder";

// 88. Add New Properties to a JavaScript Object

// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };

// myDog.bark = "woof";

// 89. Delete Properties from a JavaScript Object

// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"],
//   "bark": "woof"
// };

// delete myDog.tails;

// 90. Using Objects for Lookups

// Setup
function phoneticLookup(val) {
  let result = "";

  let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  return lookup[val];
	return result;
}

phoneticLookup("charlie");
