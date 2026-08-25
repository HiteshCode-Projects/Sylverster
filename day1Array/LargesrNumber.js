const arr = [3,7,1,9,4,2]  // return 9

function findLargest(arr){

    if(arr.length === 0)  return null;  //Safest 

//Step 1: Assume the first data/element is largest

let largest = arr[0]  //Largest Number - comparsion

//Step 2 : Loop Through Every Other Element
for(let i=1; i < arr.length; i++){

    //Step 3:
    if(arr[i]  > largest ){
            largest = arr[i]
    }

}

return largest

}

console.log(findLargest[3,7,1,9,4,2])

//Time Complexity - Big O notation