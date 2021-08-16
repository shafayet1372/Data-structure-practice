
let arr=[1,2,3,4,5,6,7]

for(let i=0;i<10000000;i++){
  arr.push(i)
}
console.log(arr)
let value;
let hole

for(let i=0;i<arr.length-1;i++){
  value=arr[i+1]
  hole=i+1
  arr[hole]=null
 for(let j=i+1;j>0;j--){
   if(value<arr[j-1]){
    
    arr[hole]=arr[j-1]
    hole=j-1
    arr[hole]=null
  
   } 
 }
 arr[hole]=value


}
