//find min number in the array
let arr = [8, 3, 10, 4, 6];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(min);
