                        //   Conversion 
let score = true

console.log(typeof score);

let typeconversion = Number(score)

console.log(typeof typeconversion);
console.log(typeconversion);

/*
    33 => 33
    33abc => NaN
    null =>  0
    Undefined => Nan
    Boolean true => 1 ;  false => 0


*/

let loggedIn =  ""
let BooleanIn = Boolean(loggedIn)

console.log(typeof  BooleanIn);
console.log(BooleanIn);

                        // Operation 

let value = 3 
let negvalue = --value // Decrement 
console.log(negvalue);

let str1 = "Hello"
let str2 = " Azamil"
let str3 =  str1 + str2
console.log(str3);

console.log(1+"2");
console.log("1" + 2);
console.log("1" + "2");
console.log("1" +2 +2);
console.log(1+2+"2")

let game = 100 
++game;
console.log(game);