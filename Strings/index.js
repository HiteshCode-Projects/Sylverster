//Reserve a string Hello - olleH

// "Hello"
//1. Method Build Method
function revstring(str){
    return str.split("").reverse().join("")

}

//2. Manual 
function revserseString(str){
    const words = str.split("")  //[H,e,l,l,o]

    const revserse = [];

    for(let i=words.length - 1; i>=0;i--){
        revserse.push(words[i])  //[o,l,l,e,H]
    }

    return revserse.join("")  //"olleH"
}


//"He l-Iternal Space lo  ----Extra Space-trime  "

//Trmming - Remove The Extra space
function revserseStringTrim(str){
    return str.trim().split(/\s+/).reverse().join("")
}

//JoHn
//ANAGRAM - Two Words with same letters in different Order
//listen 6 and silent - 6 - true
//"rail safety"  and "fairy tales" - true (Ignore The Extra spce)

//METHOD 1 : Sort and Compare
function isAnagram(str1,str2){
    //Clean lowercase and remove space
    const clean1 = str1.toLowerCase().remove(/\s/g,"")
    const clean2 = str2.toLowerCase().remove(/\s/g,"")

    //Length must match
    if(clean1.length !== clean2.length) return false

    //"abdc" -- [a,b,d,c] - [a,b,c,d] - "abcd"
    //"cdab"  -- [c,d,ab] - [a,b,c,d] = "abcd"
    //Sort and Compare
    return clean1.split("").sort().join("")  === clean2.split("").sort().join("")

}
isAnagram("listen", "slient")

//Method 2 :Character counting(Faster - )

function isAnagramfast(str1,str2){
 
    if(str1.length !== str2.length) return false

    const charCount = {
        // l:1,
        // i:1,
        // s:1
        // t:1
        // e:1
        // n:1
    };

    // "abcd"

    for(const char of str1){
        charCount[char] = (charCount[char] || 0) + 1
    }

    //Explanation

    //Check Character from str2
    //slient 
    for(const char of str2){
         if(!charCount[char]) return false; 

         //Reduce Count
         charCount[char]--
    }

    return true
    

}



//Problem 4 : Longest SubString without Repeating Characters

//"Hello World"  - Main String  //World - sub string
//"abcabcbb"  - "abc"
//"bbbb"  - "b"

//The Idea : Sliding Window 
// Imagine Two Pointers
//Start - Beginning of current substring
//end - current character we are checking



//Probelm 5 : Valid Parathese

// () - true
// ()[]{} true

//Hint Stack 
