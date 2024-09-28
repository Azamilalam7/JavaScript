let delhiTemp = 45;
console.log(delhiTemp)
delhiTemp = 46
console.log(delhiTemp)

// function foo() {
//     var x = 10;
//     y = 20; // y is not declared with var, let, or const, so it becomes global
// }
// foo();
// console.log(x); // 20 (y is globally accessible)

let string = "Hellow World How Are You"
let vowels = ["a","e","i","o","u"]

function removeVowel(str){
    return str
            .split("")
            .filter((char) => {
               return  !vowels.includes(char .toLowerCase())})
            .join("")
}

let result = removeVowel(string)
console.log(result)

//.Hoisting

// console.log(x)
// console.log(y)
console.log(z)

let x = 12;
const y = 173;
var z = 84;

// console.log(getname)

// const getname = function(){
//    console.log(`GetMyName ||||!!!||!!| SayMyNameSayMyNameYOO`)
// }

const string1 = "kya Hua Be "; 
const string2 = "kuch Nahi Be"; 

if (string1.startsWith("k") && string2.startsWith("k")) {
   console.log(string1 + string2)
}
else {
   console.log(string2)
}


// function getElement (){
//    const inputElement = document.getElementById("ToDo")
//    const inputvalue = inputElement.value;
//    console.log(inputvalue)
   
//    const selector = document.getElementById("list")
//    document.querySelector("selector")
//    //List
//    let li = document.createElement("li")
//    li.innerHTML = inputvalue
//    // append
//    if(inputvalue){
//        const app = selector.append(li)
//        return app
//    }
// }
// getElement()