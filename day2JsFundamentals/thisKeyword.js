// this (keyword)- referes to the object calling function
// it CHANGES based on HOW function is called

//case 1:method call(function inside object)

const user = {
    name :"john",

    greet(){
        console.log(`hii i am ${this.name}`)
        //this here is the user object
    }
}

user.greet()

//Case 2 : Regular function call

function showThis(){
    console.log(this)  

}

showThis()  
//In Browser window object


//Case 3 : this LOSSED COntext
 const greetFn =  user.greet
  greetFn()  //Undefined 
