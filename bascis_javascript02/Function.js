// Non Variable Function
function sayMyName () {
    console.log("Azamil ")
}
sayMyName()

function addTwoNo (a,b){  //Input In The Function Definition Is Called Parameter ; 
    return a+b;
}
const result = addTwoNo(455,355) // Input In The Function Call Is Called Argument ;
console.log('Result Value Is' , result)

function Login (username = "YourName"){ //Set The Deafault UserName 
    if(username === undefined){
        console.log('Please Enter A UserName ! ');
        return;
    }
    return `${username} Just LoggedIn `

}
console.log(Login())

function cartItem(...ordername) { //Speard Operator 
    return `Customer Order ${ordername} `
}
console.log(cartItem("AsusLaptop" , "Naruto Volume 5", "Akatsuki Clock"))

// Function With Object 

function object (anyobject){
    return `The Username Is ${anyobject.username} And Email Is ${anyobject.email}`
}
console.log(object(
    {
    username : 'Azamil',
    email : 'Azamilalam7@gmail.com'
    }
))

//Function With Array 

function array (getarray){
    return `Array Second Element Is ${getarray[1]}`
}
console.log(array([737,94,43,8358,582539,393,492,39]))

const chai = function (){
    let username = 'Hong Hae In'
    console.log(this.username)
}
chai()

// Arrow Function 
//Anomynous Function 
// Explicit return 
const addtwor = (num) => {
    return ++num + 1
}
console.log(addtwor(647384754657))

//Implicit Return
const addtwo = (num) =>  (++num + 1)
console.log(addtwo(647384754657))

// (IIFE ) Immediately Invoked Function Expression
(function aur (){
    //Named IIFE
    console.log("Please Enter A Name ");
})();
( () => {
    //UnNamed IIFE
    console.log("jjk")
})()