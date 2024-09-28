const myArr = [1,2,3,4,5,6,7,8,9,0]
console.log(myArr[0]);

// Array Method 

myArr.push(11)
myArr.push(12)
myArr.pop()

myArr.unshift(9)
myArr.shift()


console.log(myArr.includes(7)) // This Means That 7 Exists In myArr and Retrun the Value In Boolean
console.log(myArr.indexOf(7)) // This Mean In Which Index the  7  Is 

const newarr = myArr.join()
console.log(newarr)
console.log(typeof newarr)


arr = [0,1,2,3,4,5]
console.log('A', arr)
const myarr1 = arr.slice(1,3) // Copy The Element From arr and Paste It In myarr1 and its indexes is like Range Function (range()) In Python
console.log(myarr1)

console.log('B',arr)

const myarr2 = arr.splice(1,3) // Cut Element From The arr and Paste It In myarr2 and its index range is n to n fixed
console.log(myarr2)

console.log('C',arr)

// ********************************************************************************************


const anime_hero = ['Naruto','Goku','Asta','Deku','Itachi']
const anime_villan = ['Aizen','Kaido','Friza','Delta','Toji']

/*
    anime_hero.push(anime_villan)
    Not Good Practice  Use Concat Instead Of push()
    console.log(anime_hero[5][2])
 */

const anime = [...anime_hero,...anime_villan]
console.log(anime);


const arr_arr = [1,2,3,[4,6],7,[99]]
const new_arr = arr_arr.flat(Infinity) // If in an array there is a subarray of x it return in a format of x array 
console.log(new_arr)

console.log(Array.from("Azamil"))  // This Convert The String Into Array

let a= 100
let b= 200
let c= 300
console.log(Array.of(a,b,c))