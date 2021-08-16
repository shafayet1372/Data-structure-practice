//Binary search

let arr=[3,7,8,32,51,55,57,89,91,99]
let search=8
let left=0;
let right=arr.length-1
let mid=Math.floor((left+right)/2)
let found=0

while(left<=right){
if(search>arr[mid]){
  left=mid+1
  
}else{
  right=mid-1
}

mid=Math.floor((left+right)/2)
if(arr[mid]==search){
  found=1
  break;
}
}
if(found){
  console.log("found")
}else{
  console.log("not found")
}