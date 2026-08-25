const fruits = ["Apple" , "banana" , "Mango"]

console.log(fruits[0])
console.log(fruits[3]) //undefined(Not an error-Just nothing There)

console.log(fruits.length)  //Total No of Data

console.log(fruits[length - 1])  //Last Index

//Add To END-Push
console.log(fruits.push("Orange"))

//Add To Beginning-unshfit

console.log(fruits.unshift("Kiwi"))

//Remove-END data
console.log(fruits.pop())

//Remove-Begining-shift
console.log(fruits.shift())

//Looping Through Arrays- Go Inside Array and Access Single Data

const prices = [299,499,199,799,349]

//Method 1 : Classic for loop
for(let i = 0; i < prices.length; i++  ){
             console.log(` item ${i} : ${prices[i]}  `)
}

//Method 2: for of
for(const price of prices){
     console.log(`Prices ${price}`)
}

//Method 3: forEach
prices.forEach(  (price , index)=>{
               console.log(`Postion ${index}: ${price}`)
});

      








        



             
                                  

                       

      





           