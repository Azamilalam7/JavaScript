// (if )
const userloggedin = true
const temperature = 42

if (temperature < 50 ){
    console.log('Temperture Is Less Than 50 ')
}
else {
    console.log('Temperature Is Greater Than 50')
}
// < , > , <= , => , == , === , != , !== 

const score =26746
if (score > 100 ){
    const Power = "Ki"
    console.log(`User power is ${Power}`)
}

const balance  = 1000
//Nested Condition 

if (balance < 500 ){
    console.log("Less Than 500")
}else if (balance < 750){
    console.log("Less Than 750")
}else if (balance < 900){
    console.log("Less Than 900")
}else {
    console.log("Less Than 1200")
}

// And , Or && & ||
const userloggedinfromgoogle = true
const userloogedinfromemail = false
const debitCard = true
const creditCard = false 

if(userloggedinfromgoogle || creditCard){
    console.log("allow you to buy course")
}else if (userloogedinfromemail || debitCard){
    console.log("allow you to buy laptops")
}

/* Switch 
Switch Basics Syntax Is :
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const day  = 4
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
     case 4:
        console.log("Thursday")
        break;
    default:
        console.log("Nahi Hua Beeeeee Yaaaaaaaar")
        break;
}

const password = []
if (password){
    console.log("True")
}else {
    console.log("False")
}
/* False Value
false , 0 , "" , -0 , Bigint 0n , null , undefinrd , NaN
*/

/*True Value 
True , [] , 'false' , "0" , " " , {} , function(){ }
*/

// check if an object is empty 
const emptyobject = {}
if (Object.keys(emptyobject).length === 0){
    console.log("Object is empty ;")
} else {
    console.log("Object is not empty")
}

// nullish coalescing Operator (??) //

let val1;
val1 = null ?? undefined
console.log(val1)
let val2;
val2 = undefined ?? 6532  ??49
console.log(val2)

// Terniary Operator
const price = 930 
{
    price <= 800 ? console.log("done") : console.log("false");
}