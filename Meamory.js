// Two Types of Meamory 
/*
1.Stack (Primitive DataType)  
Stack Give You The Copy Value Of That 
2.Heap ( Non Primitive DataType) 
Heap Gave You The Original Value Of That 
*/

let myname = "Azamilalam"

let mynameis = myname
mynameis = "Azaamil"
console.log(myname);
console.log(mynameis);

let user1 = {
    email : "user@gmail.com",
    upiId :"user@upi"
}

let user2 = user1

user2.email = "azamilalam7@gmail.com"

console.log(user1.email)
console.log(user2.email)