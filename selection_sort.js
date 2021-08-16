
let arr=[3,44,38,5,47,15,36,26,27,2]

let minimum;
let index;
let swap
for(let i=0;i<arr.length-1;i++){
    minimum=arr[i]
  for(let j=i+1;j<arr.length;j++){

    if(minimum>arr[j]){
      minimum=arr[j]
      index=j
    }
    
  }
  swap=arr[i]
  
  arr[i]=arr[index]

  arr[index]=swap
   


}
console.log(arr)