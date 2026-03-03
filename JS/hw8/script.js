const myString = "Hello, localStorage!";
const myNumber = 42;
const myBoolean = true;
const myArray = ["apple", "banana", 7];
const myObject = {
  name: "Dana",
  age: 20,
  isStudent: true
};

localStorage.setItem("myString", JSON.stringify(myString));
localStorage.setItem("myNumber", JSON.stringify(myNumber));
localStorage.setItem("myBoolean", JSON.stringify(myBoolean));
localStorage.setItem("myArray", JSON.stringify(myArray));
localStorage.setItem("myObject", JSON.stringify(myObject));

const savedString = JSON.parse(localStorage.getItem("myString"));
const savedNumber = JSON.parse(localStorage.getItem("myNumber"));
const savedBoolean = JSON.parse(localStorage.getItem("myBoolean"));
const savedArray = JSON.parse(localStorage.getItem("myArray"));
const savedObject = JSON.parse(localStorage.getItem("myObject"));

console.log(savedString, typeof savedString);
console.log(savedNumber, typeof savedNumber);
console.log(savedBoolean, typeof savedBoolean);
console.log(savedArray, Array.isArray(savedArray) ? "array" : typeof savedArray);
console.log(savedObject, typeof savedObject);
