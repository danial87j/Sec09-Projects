//First Project:
function users(user1, user2, user3, user4) {
  console.log(user1);
  console.log(user2);
  console.log(user3);
  console.log(user4);
}
//4 objects with values
let user1 = {
    name: "jasem",
    lastname: "amiri",
    age: 10,
  },
  user2 = {
    name: "ahmad",
    lastname: "ghasemi",
    age: 22,
  },
  user3 = {
    name: "mohsen",
    lastname: "ahmadi",
    age: 7,
  },
  user4 = {
    name: "mina",
    lastname: "mohseni",
    age: 72,
  };
//Console warn and group for better organization
console.warn("Project 01 : ");
console.group("Project 01 Section");
//Recalling the function:
users(user1, user2, user3, user4);
//Ending the console group
console.groupEnd();

//Second Project:
function slice(string) {
  if (string.slice(-1) == string.slice(-1) && string.slice(-1) != 0) {
    console.log(string.slice(-1));
  } else {
    console.log("The last character was not found");
  }
}
//Our string
let string = "Hello World XD";
//Console warn and group for better organization
console.warn("Project 02 : ");
console.group("Project 02 Section");
//Recalling the function
slice(`Last Letter : ${string}`);
//Ending the console group
console.groupEnd();

//Third Project:
function characters(text, numberOfCharacters) {
  console.log(
    `stringWithoutSpace: ${text} numberOfCharacters: ${numberOfCharacters} `
  );
}
//Our text
let text = "Hello My Name Is Daniel";
//Removing the space between every word
let withoutSpace = text.replace(/ /g, "");
//Getting the lenght of the text without spaces
let numberOfCharacters = withoutSpace.length;
//Console warn and group for better organization
console.warn("Project 03 : ");
console.group("Project 03 Section");
//Recalling the function:
characters(withoutSpace, numberOfCharacters);
//Ending the console group
console.groupEnd();

//fourth Project:
function arrays(array1) {
  console.log(array1);
}
array1 = ["a", "b", "c"];
array2 = ["d", "e", "f"];
array3 = array1.concat(array2);
//Console warn and group for better organization
console.warn("Project 04 : ");
console.group("Project 04 Section");
// Recalling the function:
arrays(`Merged Array : ${array3}`);
//Ending the console group
console.groupEnd();

//Last Project :
function vowels(str) {
  //Array of vowel words:
  const vowels = ["a", "e", "i", "o", "u"];
  //Changing the string inro lowercase bc we use lowercase letters for finding the vowels
  const decomposedStr = str.toLowerCase().normalize("NFD");
  const strArray = decomposedStr.split("");
  //Changing the string into array and then filtering the nonvowels letters 
  const vowelArr = strArray.filter((char) => vowels.includes(char));
  //Then getting the lenght of the vowels string
  console.log("String:", str, "=>", vowelArr.length);
}
//Our text
let str = "Hello";
//Console warn and group for better organization
console.warn("Project 05 : ");
console.group("Project 05 Section");
//Recalling the function:
vowels(str);
//Ending the console group
console.groupEnd();
