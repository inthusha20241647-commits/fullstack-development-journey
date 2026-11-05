//get last 3 elemnets using slice

let fruits=["mango","apple","cherry","pineapple","blueberry"];

let reversed=fruits.slice().reverse();//["blueberry","pineapple","cherry","apple","mango"]

let firstThree=reversed.slice(0,3);

console.log(firstThree);
