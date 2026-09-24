//In Js We use Two ways to hash map
//1. Using Object
//2. Using Map 

const userScores = {}

//ObjectName["Keyname"] = value(In Data type)
userScores["John"] = 96
userScores["mike"] = 75
userScores["charlie"] = 70
userScores["aadi"] = 60

//Find Value- 
console.log(userScores["mike"]) //Instant Lookup and Find value

//Check if key exits
//"KeyName"  in ObjectName -- Boolean
console.log("Bob" in userScores)   //false

//Remove a key
// delete userScores["KeyName"]

delete userScores["John"] 

//Loop through all Entries (key:value)
for( const[name , score] of Object.entries(userScores)){

    console.log(`${name} , ${score}`)
}



//Moderm Way Using MAP

const cart = new Map()  //Created MAP OBJECT

//Add a keyvalue  ,.set("key","value")

cart.set("apple", 50)
cart.set("banna", 20)
cart.set("mango",80)

//Access / Find  .get("keyname")  ///value
console.log(cart.get("mango"))

//key exits
// .has("keyname")

console.log(cart.has("kiwi"))  //false

//Total No of KeyVlaue  .size
console.log(cart.size)  //3

//.delete("keyName")

cart.delete("banna")

//loop Through Map
for( const [item,price] of cart){
    console.log(`${item} , ${price}`)
}



//MAP VS OBJECT _ WHEN TO USE WHICH
//USE MAP WHEN:
// - Keys are not Strings(numbers,object)
// - you need size easily
//Frequent Additon /delete


//USE OBJECT
// - Simplet key-value storage
// -- Working with JSON


