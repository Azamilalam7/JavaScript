/*
JavaScript object has an internal property called [[Prototype]] 
(commonly accessed using __proto__ or the Object.getPrototypeOf method),

Prototypes enable JavaScript objects to inherit properties and methods from other objects.

if the property or method is not found, JavaScript then looks at the object's prototype
If the property or method isn't found anywhere in the chain, undefined is returned.

Every function in JavaScript (except arrow functions) 
has a prototype property that points to an object
*/

function multipleBy5 (num){
    return num*5
}
multipleBy5.power = 2
console.log(multipleBy5.prototype)

function createUser (username , logginCount) {
    this.username = username
    this.logginCount = logginCount
}
createUser.prototype.increment = function (){
    this.logginCount++
}
createUser.prototype.printMe =  function (){
    console.log(`Welcome To The Name Of Code  ${this.username} || ${this.username} , Your Loggin Count Is ${this.logginCount}`)
}

const userone = new createUser('Azamil' , 67)
const usertwo = new createUser('Azamil Alam' , 56)
userone.increment()
userone.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked:The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments 
and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, 
the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/

const marvelHeroArr = ['Thor','SpiderMan']
const marvelHeroObj = {
    Thor : 'Hammer',
    SpiderMan : 'Sling ',
    getSpiderManPower : function (){
        console.log(`The SuperPower Of SpiderMan Is ${this.SpiderMan}`)
    }
}
Object.prototype.Myname = function(){
     console.log(`My Name Is Present In All Object  `)
}
Array.prototype.sayMyname = function(){
    console.log(`My Name Is Present In All Object  `)
}

marvelHeroArr.sayMyname()

//Inheritnce 

const User = {
    UserLoggingedIn : true,
    UserMale : false,
    Userfemale : true,
    UserPurchaseCouse : true,
    CourseName : `Nextjs Full Course`,
    CourseID : 5678392
}

const Teacher = {
    TeacherNumber : 6373828467,
    TeacherSalary : `6LPA`
}

const TeacherAssistant = {
    TeacherAssitantAvailable : false 
}
Teacher.__proto__ = TeacherAssistant
console.log(Teacher.TeacherAssitantAvailable)

let sayMynameYoo = `Hello    `
String.prototype.trueLength = function (){
    // console.log(`${this}`)
    console.log(`True Length Of The String Is ${this.trim().length}`)
}
sayMynameYoo.trueLength()
'AB   '.trueLength()