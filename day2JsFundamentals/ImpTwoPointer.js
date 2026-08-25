// Two Pointers
//left = 0 start point
//right = last index . length -1 
//left will travel left++
//right will travel right --
//condtion left< right

//palindrome - stringg = revstring same

//madam
function ispalidrome(str){
    let left = 0
    let right = str.length - 1

    while(left<right){

        if(str[left] !== str[right]){
               return false  //mismatch
        }

        
         left++
         right--


    }

    return true
}