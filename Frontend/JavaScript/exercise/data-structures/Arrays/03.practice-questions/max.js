//find maximum number in the array
let arr=[1,3,10,4,6]
let max=arr[0]
for(let i=1;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
    }
}
console.log(max)
