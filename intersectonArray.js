const a =[2,4,5,6,1,3]
const b=[7,9,8,6,1,3]
let commonNumber=[]
let funname=function ()
{
const c=a.concat(b)
console.log("Print both value of all value array",c);
if (a!==b) {
    console.log("No duplicate",c);   
}
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
if (a[i]===a[j]){

    commonNumber.push(a[i])
    console.log("Print common value ",c);
    break;
}        
    }
    
}
}
funname(commonNumber)