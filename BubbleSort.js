let arr=[5,1,4,4,2,10,7,20]
let swap;
for(let i=0;i<arr.length;i++){

  for(j=i;j<arr.length-1;j++){
   if(arr[i]>arr[j+1]){
     swap=arr[j+1]
     arr[j+1]=arr[i]
     arr[i]=swap
   }
   console.log(arr)
  }
}
console.log(arr)