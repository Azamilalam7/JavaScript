"use strict"; //treat all the JS code as newer version 
// alert(3+3) we are using node js not browser

let a= "azamil";
const b= 6482294
let Cha; //undefined

/*
datatypes in javascript
numbers => power 53
bigint => use in reddit , instagram and other companines 
character/string => ""
boolean => true/false
null = standalone value
undefined => created  but not defined
symbol => uniquness
*/

//They Are Primitive Type 

console.log(typeof a);

let id = Symbol('12')
let anid = Symbol('12')

console.log(id === anid);
const bigno = 748384793847683827202924848453756384875436653462757624917635283758313746836n

/*
Reference Type  (Non Primitive Type )
Array Object Function 
*/

const myarr = ['kh','dh','fjfj']
let mobj = {
    name : 'naruto' ,
    age : 20,
}

const myfun = function(){
   console.log("HE")
}

console.log(typeof myarr)
console.log(typeof mobj)
console.log(typeof myfun)
console.log(typeof bigno)
console.log(typeof id)