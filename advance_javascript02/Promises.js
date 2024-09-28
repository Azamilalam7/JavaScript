/*
First We will understand  || 1) What Is Promises ?
The Promise object represents the eventual completion (or failure) of an 
asynchronous operation and its resulting value.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

2) History Of Promises 

In earlier time there were promises libiraries like Q && Bluebird  
we use them to handle asynchronous operation and  now they are defaulted
*/

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log('Async task 2 is compelete');
        resolve()
    }, 1000)
}).then(()=>{
    console.log('Promise Consumed Hogaya Ha')
})

const Promises2 = new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve({name:'Azamil Alam ' , myRealAge : 13 })
    },2000)
})
Promises2.then ((user) => {
    console.log(user)
})

const Promises3 = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({name : 'M Azamil Alam', password : 1031})} 
        else{
            reject('ERROR found !! something went wrong Try Again exit code : 404')}},1000)})

Promises3
//Chaininng 
.then((user) => {
    // console.log(user)
    return user.password
})
.then((password) => {
    console.log(password)
})
.catch((error) => {
    console.log(error)
})
.finally(() => console.log('The Promised Is Either Resolve Or Either Rejected '))

const Promise4 =  new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({languagename : 'JavaScript&Python', password : 'V8456TYh9'})} 
        else{
            reject('ERROR found !!!!')}},1000)})

async function consumePromise4 (){
   try {
        const response = await Promise4
        console.log(response)
   } catch (error) {
     console.log(error)
   }
}

consumePromise4 ()

async function getAllUser (){
        try {
            const response  = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log('E : ', error)
        }
}
getAllUser ()