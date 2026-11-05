//remove duplicates from string

let str = "samantha";

function removeDuplicates(str) {
  let findDuplicates = {};
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let chars = str[i].toLowerCase();
    if (!findDuplicates[chars]) {
      findDuplicates[chars] = true;
      result+= str[i];
    }
   
  }
   return result;
}
console.log(removeDuplicates(str));
