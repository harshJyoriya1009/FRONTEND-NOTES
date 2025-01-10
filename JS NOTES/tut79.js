// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors

let a= prompt("Enter first number")
let b= prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
   throw SyntaxError("Sorry this input is not acceptable")
}
let sum= parseInt(a)+ parseInt(b);

let x=1;
function handling(){

    try{
        console.log("The sum is", sum*x)
        return true
    }catch(error){
        
        console.log("The has something wrong in the code please check")
        return false
    }
    
        console.log("Files are being closed and db collection is being closed ")
    
}
handling();
    