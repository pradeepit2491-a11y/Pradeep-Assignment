const { log } = require("console");

function funString() 
{
 let string="Playwright"
 let stringChar=string.split('')
 console.log("1.Input into character is", stringChar)
 let newString='';
 for (let i = stringChar.length-1; i>=0; i--) {
    newString +=stringChar[i]  ; 
    
 }

console.log("2.Input into reversecharacter is", newString)
 
if (newString=== string) {
    console.log("Given word is palindrome")
    
}
else
console.log("Given word is not palindrome")
}
funString() 