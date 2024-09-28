// (for loop )

for (let i = 1; j <=  10; index++) {
    const element = index; 
    if(element == 7 ){
        console.log("7 is The Best Number")
    }
    console.log(element)
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop Value Is ${i}`)
    for (let j = 0; j <= 10; j++) {
      //  console.log(`Inner Loop Value ${j} And Outer Loop Value Is ${i}`)      
}}

// Printing Table From 1 To 10 
for (let a = 1 ; a <= 10; a++){
    console.log("Table")
    for (let b = 1 ; b <= 10; b++){
        console.log(`${a} * ${b} = ${a*b}`)
    }
    console.log(`${number} * ${a} = ${number*a}`)
}

let array = ["Tallha Anjum", 'Tallha Yunus', 'Raftaar','Badsha']
console.log(array.length)
for (let index = 0; index < array.length; index++) {
    const element = array[index];console.log(element)
    
}

// Break & Continue

for (let index = 1; index <= 20; index++) {
    if (index == 17 ){
        continue
    }
    const element = index;
    console.log(element)
}

// while 
let i =  0
while (i <= 10) {
    console.log(i)
    i =i +2    
}

const arr = ['Naruto','Boruto','Kakashi','Saskue']
let ar = 0
while(ar < arr.length){
    console.log(`Value Is ${arr[ar]}`)
    ar = ar +1
}

let points = 11
do{
    console.log(points)
    points++
}while(points <=10)

// for of  
const aray = [1,2,3,4,5,6,7,8,9,1,1,2,3,4,5,6,7,93,5,7,9,6,4,3,5,7]

for (const nnn of aray) {
    console.log(nnn)
}

const map = new Map()
map.set('In', 'India')
map.set('Nj', 'New Jersey')
map.set('Fr', 'France')
console.log(map)

// for (const key in map) {
//     console.log(key)  Cannot Be Iterate 
// }

for (const [key , value] of map) {
    console.log(key ,':-', value)
}

const game ={
    game1 : 'NFS',
    game2 : 'WWE2k17',
    game3 : 'FIFA23'
}

for (const key in game ){
    console.log(`${key}  My Favourite Game ${game[key]}`)
}

const araey = ['js','py','rb','java']
for (const key in araey) {
    console.log(araey[key])
}

//foreach  loop 

const myarr = ['Naruto','Boruto','Kakashi','Saskue']

myarr.forEach( function (ele) {
        console.log(ele)
})
//  Arrow Function 
myarr.forEach( (i) => {console.log(i)})  // use this Instead  (Arrow Function)
// function greetUserName  (...name) {
//     console.log(`Hello , ${name} `)
// }
// forEach(greetUserName('Azamil','Kaif','Saif') )

myarr.forEach( (item,index,myarr) => {console.log(item,index,myarr)})

const coding = [
    {
        languageName : 'javascript',
        languageFile : 'js'
    },
    {
        languageName : 'python',
        languageFile : 'py'
    },
    {
        languageName : 'seekkabaab',
        languageFile : 'kafka'
    }
]
coding.forEach ( (x) => {
    console.log(x.languageFile,x.languageName)
})