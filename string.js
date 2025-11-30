//String reverse
/* function fName()
{
let string ="Playwright"
let stringChar=string.split('')
console.log("Input into character is", stringChar)
let reverseString=stringChar.reverse()
console.log("Input into reverse character is", reverseString)
}

fName()*/


// 1 Length of the last word

// let input="hello world"
// let inputSplit=input.split('')
// let finalLetter=input[inputSplit.length-1]
// console.log("Length of last word",finalLetter )
// let final=[inputSplit.length-1]
// console.log("Length of last lenght",final )

// let  trimSpace=input.trim
// console.log("Trimm unwanted space",trimSpace)

//2 trim and find the last word

// let input=" fly me to the moon "
// let inputTrim=input.trim()
// console.log("After trim sentence is",inputTrim )
// let inputChar= inputTrim.split('')
// console.log("After split sentence is",inputChar )
// let inputLastLength=inputChar.length-1
// console.log("Last length is", inputLastLength )
// let inputLastword=inputChar[inputLastLength]
// console.log("Last word is", inputLastword )

 
//3Anagram

let s1="listen"
let s2="silent"
let s1Case=s1.toUpperCase().split("").sort().join()
console.log("Converting case s1", s1Case)
let s2Case=s2.toUpperCase().split("").sort().join()
console.log("Converting case s2 ", s2Case)
if (s1Case===s2Case) 
{
console.log("Given word is Anagaram")
}
else
{
 console.log("Given word is not Anagaram")   
}



