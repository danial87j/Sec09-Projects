//First Project:
function users(user1, user2, user3, user4) {
  return user1 || user2 || user3 || user4;
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
console.log(users(user1));
console.log(users(user2));
//Ending the console group
console.groupEnd();

//Second Project:
function slice(string) {
  if (string.slice(-1) == string.slice(-1) && string.slice(-1) != 0) {
    return string.slice(-1);
  } else {
    return "last character was not found";
  }
}
//Our string
let string = "Hello World XD";
//Console warn and group for better organization
console.warn("Project 02 : ");
console.group("Project 02 Section");
//Recalling the function
console.log(slice(`Last Letter : ${string}`));
//Ending the console group
console.groupEnd();

//Third Project:
function characters(text, numberOfCharacters) {
  return `stringWithoutSpace: ${text} numberOfCharacters: ${numberOfCharacters} `;
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
console.log(characters(withoutSpace, numberOfCharacters));
//Ending the console group
console.groupEnd();

//fourth Project:
function arrays(array3) {
  return array3;
}
array1 = ["a", "b", "c"];
array2 = ["d", "e", "f","g"];
array3 = array1.concat(array2);
//Console warn and group for better organization
console.warn("Project 04 : ");
console.group("Project 04 Section");
// Recalling the function:
console.log(arrays(`Merged Array : ${array3}`));
//Ending the console group
console.groupEnd();

//Last Project :
function vowels(str) {
  //Array of vowel words:
  let vowels = ["a", "e", "i", "o", "u"];
  //Changing the string inro lowercase bc we use lowercase letters for finding the vowels
  let decomposedStr = str.toLowerCase().normalize("NFD");
  let strArray = decomposedStr.split("");
  //Changing the string into array and then filtering the nonvowels letters
  let vowelArr = strArray.filter((char) => vowels.includes(char));
  //Then getting the lenght of the vowels string
  return vowelArr.length;
}
//Our text
let str = "Hello";
//Console warn and group for better organization
console.warn("Project 05 : ");
console.group("Project 05 Section");
//Recalling the function:
console.log(vowels(str));
//Ending the console group
console.groupEnd();
