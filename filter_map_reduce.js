// forEach Extra Topic 
let array1 = ['js','py','rb','java','kafka','swift','docker','HTML','CSS']
const printarray1 = array1.forEach ( () => {
    // console.log(item)
})
// console.log(printarray1)  

const array2 =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let myarray2 = array2.filter( (nums) =>  { // If You Open The Scope You Must Use return Keyword 
    return nums >=6})
// console.log(myarray2)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]
const gavebook = books.filter ( (bk) => bk.genre === 'Science')
const gavebook1 = books.filter ( (bd) => bd.publish >= 1995 && bd.genre === 'History')
console.log(gavebook1)

// Map()

let Numer = [1,2,3,4,5,6,7,8,9,10]
const myNumer =  Numer.map((nu) => nu+1)
console.log(myNumer)

let MeraNumber = [1,2,3,4,5,6,7,8,9,10]
let TeraNumber = MeraNumber.map((n) => n*10)
                           .map((k) => k/10+1)
                           .filter((x) => x<20) // Chaining /-\
console.log(TeraNumber)

// Reduce 

let meranum = [1,2,3]
const teranum = meranum.reduce( (accumulator,currentvalue) => {
    console.log(`Accumulator Value Is ${accumulator} And CurrentValue Id ${currentvalue}`)
    return accumulator + currentvalue } , 0
)
console.log(teranum)

const shoopingCart = [
    {
        productName : 'IPhone 14Pro Max',
        price : 128000
    },
    {
        productName : 'Asus Nitro Geni5',
        price : 112999
    },
    {
        productName : 'BoAT AvanteBar 503',
        price : 34500
    },
    {
        productName : 'Apple Watch Series A8',
        price : 128000
    },
]

let TotalPriceOfShoppincart = shoopingCart.reduce ( (accumulator,currentvalue) => {
     return accumulator + currentvalue.price } , 0 )

console.log(TotalPriceOfShoppincart)              