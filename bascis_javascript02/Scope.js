if (true){
    let a = 10
    const b = 20 
    var c = 30 // Get Out From The Scope  (var)
}
// console.log(a)
// console.log(b)
console.log(c)

function one (){
    const name = "Myname "

    function two (){
        const webbrowser = "Brave"
        console.log( name )
    }
    // console.log(webbrowser)

    two()
}
one()

if (true){
    const name = " Azamil "
    if (name === " Azamil "){
        const website = " MyAnimeList"
        console.log(name +website )
        console.log(website)
    }
    // console.log(website)
    console.log(name)
}

function addone (num){
    return ++num
}
console.log(addone(74))

const addtwo = function(num){
    return ++num + 1
}

console.log(addtwo(83))
