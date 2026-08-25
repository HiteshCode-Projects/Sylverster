const arr1 = [1,2,3,4,5] //True
//            [1,5,3,2]  //false
// return [5,4,3,2,1]

//Approch 1

arr1.reverse()

console.log(arr1);

//Approch 2: Manual Logic

function revserArray(arr){

const reveresed = []

//for Loop-Start from end
for(let i = arr.length-1; i>=0; i-- ){
    reveresed.push(arr[i])
}
              
return reveresed
}

console.log(revserArray[1,2,3,4,5])