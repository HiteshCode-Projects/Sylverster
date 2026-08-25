// var (old way), let(new way), const (constant value) are used to declare variables in JavaScript.

// let age = 12
// age = 24  //Ok can be reassigned
// let age = 2 // Error Cannot Re use the same variable Name


//SCOPE = Where a Variable is ACCESSIBLE

//GLobal scope - Any be called or access anyhwhere - declare ouside any function/blocl

const globabar = "I am global"

function showVar(){
    console.log(globabar)
}

showVar()


//Function scope
function myFun(){
    const insideVar = "I exisit only inside function"
    console.log(insideVar)
}

//Block Scope - declared inside { }  Block
if(true){
    let blockvar = "i exit inside block only"
}



//Real Example

function calcluateCArtToal(cart){


    let total = 0


    for(const item of cart){
        total+= item.price * item.quantity
    }

    return total
}

