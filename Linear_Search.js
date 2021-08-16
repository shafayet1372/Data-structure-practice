let arr=[3,7,8,32,51,55,57,89,91,99]
let search=8
let found=0
for(let i=0;i<arr.length;i++){
  if(arr[i]==search){

    found=1
    break;
  }
}
if(found){
  console.log("found")
}else{
  console.log("not found")
}