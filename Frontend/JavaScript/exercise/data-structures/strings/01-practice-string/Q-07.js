//count frequency of characters in String

let str = "banana";

function countFrequency(str) {
  let collect = {};
  for (let i = 0; i < str.length; i++) {
    let chars = str[i].toLowerCase();
    if (!collect[chars]) {
      collect[chars] = 1
     
    }else{
        collect[chars] += 1

    }
  }
  return collect;
}
console.log(countFrequency(str));
