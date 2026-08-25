//Hosting = Js secretly Moves Declaration to the top
//before running code , Thhis causes werid behvaiour

console.log(myVar)  //undefined (Not an Error)
var myVar = "Hello"

console.log(myVar)   //Hello

//Let and const they are hosited diff
console.log(myLet)  //ERROR 

let myLet = "Good"

//This Zone before declartion is called Temporary Dead Zone(TDZ)


//Function decalarations are FULLY hosited
sayHi();   //Works Even Though Decalred Below
function sayHi(){
    console.log("Hii")
}

sayHello()  //Error
const sayHello = function(){
    console.log("Hello")
}


//
console.log(a)

var a = 5


