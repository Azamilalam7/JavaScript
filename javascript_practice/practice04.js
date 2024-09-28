// function statement also known as function declartion 
function a (){
    console.log(`a`)
}
a()


// Difference between function statement and function expression  is Hoisting .
//function statement can be hoisted to the top but function expression cannot be 

// function expression 

var b = function (){
    console.log(`b`)
}
b()

/*Anoymonous Function are those function which do not have name . They can used as the value 
This mean they can assingn to a variable 

function () {

}

*/

// Named Function Expression 

var c = function xyz(){
    console.log(`Named Function Expression `)
}
xyz()

/*First Class Function 
The ability of function to be used as an argument , 
The ability of function to be used as values ,
The ability of function can be pased to another function is called
 First Class Function also known as first class citizen 
*/