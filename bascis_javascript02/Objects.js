// Object.create   Contructor Method Through  

 const mysym = Symbol("key1")
//Objects Literal 
const JSuser = {
    name : "Azamil",
    engine : 'VS8',
    [mysym] : "mykey1",
    CodeEditor : "VSCode",
    Language : "JavaScript"
}

console.log(JSuser["Language"])
console.log(JSuser[mysym])

JSuser.Language = "Python " // We can Change value of an object like this 
// Object.freeze(JSuser)
// JSuser.engine = "VS6"
console.log(JSuser)

JSuser.greeting = function(){
    console.log(`Hello Python User ${this.name}`)
}

console.log(JSuser.greeting())


// SingalTone
const tinder = {
    id : 1,
    name : "Lulu",
    email : "akshd_mm@gmai.ciim"
}

const  regularuser = {
    email : "koiha@youtube.com",
    fullname  :{
        firstname : "Azamil",
        lastname : "Alam"
    }
}
console.log(regularuser.fullname.lastname)

const obj1 = {1 : 'a' , 2 : 'b'}
const obj2 = {3 : 'c' , 4 : 'd'}
// const obj3 = Object.assign({},obj1,obj2) We can also use assingn function ()
const obj3 = {...obj1 , ...obj2} // We can Use spread operator to concatinate the object
console.log(obj3)

const loarr = [
    {
        id : 1,
        name : "Azamil"
    },
    {
        id : 2,
        name : "Hi"
    }
]

console.log(loarr[1].name)
// console.log(Object.keys(tinder)) Return The Key 
// console.log(Object.values(tinder)) Return The Value 
console.log(Object.entries(tinder))
console.log(tinder.hasOwnProperty('Islogged _in'))

                                                //   Destructuring 

const course ={
    coursr_name : "Next.js",
    course_id : 327422,
    Course_Duration : '30Days',
    course_teacher : 'Professor Azamil Alam'
}

const {course_teacher : courseInstructure, course_id } = course
console.log(courseInstructure , course_id)


                    // This Keyword 
// Refer To the Current Context 
const web = {
    username : 'anything',
    price : 40858,
    welcome : function (){
        console.log(`${this.username}, Welcome To The Website`)
        console.log(this)
    }
}

// web.welcome()
web.username = 'bsjs'
web.welcome()

console.log(this)