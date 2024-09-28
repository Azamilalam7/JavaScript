// Object Literal

const user1 = {
    usename : 'M.Azamil Alam ',
    logginCount : 67,
    IsSignIn : true,
    SingnInFrom : 'appleID',
    E_mailAdress : 'appleID123@apple.com',
    password : 'Safaribrowser_123',
    location : false,
    phoneNumber :  6754331092,
    getUserDetail : function (){
        console.log(this)
    }
}

// console.log(user1)

//Constructor
function user2 (username , logginCount ) {
    this.usename = username
    this.logginCount = logginCount

    // return this
}
const newuser1 =  new user2('Azamil',72)
const newuser2 =  new user2('CodeInMyOwnWay',952)
// console.log(newuser1)
// console.log(newuser2)

// Call  (It Takes A Method And an object )
// this refers to window = {this, window}  && node = {}

function setUserName (UserName){
    this.UserName = UserName
}
function CreateUser (UserName , email , password){
    setUserName.call(this , UserName)
    this.email = email
    this.password = password
}

const user_1 = new CreateUser('Azamil' , 'AzamilAlam@apple.com' , '0814')
console.log(user_1)

const object1 = {name : 'Mohd.Azamil Alam'}
// console.log(object1.name.length)
const object2 = {name : 'Naruto Uzumaki From Naruto'}

function getTheSubString(maxLength) {
        let shortString = this.name; // `this.name` refers to `object2.name` because of `call`
        if (shortString.length > maxLength) {
            shortString = shortString.substring(0, maxLength) + '...';
        }
        
    }

getTheSubString.call(object1, 11);
