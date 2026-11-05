//check whether the given string is anagram of another string

let str1 = "listen";
let str2 = "silent";

function isAnagram(str1, str2) {
  let sorted1 = str1.split("").sort().join();
  let sorted2 = str2.split("").sort().join();

  if (sorted1 === sorted2) {
    return true;
  } else {
    return false;
  }
}
console.log(isAnagram(str1, str2));