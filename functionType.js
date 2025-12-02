function userProfile(name)
{
   console.log("Hello ,"+ name + "!" );
   
}
userProfile("Pradeep")
//Arrow function
let double =(s)=> {
    console.log("Double of the number is", s*s);
      
}
double(2)

//Anonynous function

let af="This message is delayed by 2 seconds"

let setTimeout= function()
{
console.log("Anonymous function message is" , af);

}
setTimeout()