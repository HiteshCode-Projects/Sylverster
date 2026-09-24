//1. Given a string , count how many times each character appears
// programming -->
// p-1 , r-2 , o-1 , g-2 , m-2 , i-1 , n-1
// character(key) - value(no of times character apper)

function countCharacter(str){

const count = {}


for(const char of str){

//if char exits , increment,  else start with 1

count[char] = (count[char]  || 0 ) + 1
// key      =  value

}


return count

}

console.log(countCharacter("programming"))


//2. First Repeating Element/Data

// [1,5,3,4,3,5,6] --> (first repeat data- index 4 )

// we use Set Object To remove Duplication

function firstRepeating(arr){

    const seen = new Set()  //We created set Object

    for(const num of arr){

        if(seen.has(num)){
           return num  //First Repeated Found
        }

        //setName.add(value)
        seen.add(num)
    }

}


//Group Anagrams

//Input ["eat","tea","tan","ate","nat","bat"]

// Same Size = Same Character -- ANAGRAM
//Output[ ["eat","tea" ,"ate"] , ["tan","nat"] ,["bat"]   ]

function groupAnagram(strs){

 const groups = new Map()

 for(const str of strs){

//Sort the Strings to a get CANONICAL KEY

const key = str.spit("").sort().join("")

//"eat"--->"aet" , "tea"-->aet , "tan"  --> ant

if(!groups.has(key)){
   groups.set(key,[])
}

groups.get(key).push(str)

}

return Array.from(groups.values());

}