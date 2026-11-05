// Count the number of vowels in a string.

let str = "I love coding";

let splitted = str.split("");

let vowels = "aeiouAEIOU";

let count = 0;

for (let i = 0; i < splitted.length; i++) {
  if (vowels.includes(splitted[i])) {
    count++;
  }
}
console.log(count);
