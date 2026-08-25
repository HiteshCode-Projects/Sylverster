function makeCount(){

let count = 0   //This variable will remembered

//The Inner fuction is a closure - it has access to count
return function(){
count++
console.log(count)
}


}

// CLOSURE - The Inner function remembers the variable of Outer function
makeCount()


//React useState hook is build on closure 