const saymyname = function(){
    console.log("Azamil " , Date.now())
}
const changeText = function (){
    const series = document.querySelector("h2")
    series.innerHTML = " Async ReCode "
    console.log(series)
}

const setMe = setTimeout (saymyname , 3000)
// setTimeOut is method that takes two argument one is <function () {} or callBack ()=>> and second is duration 
const setYou = setTimeout (changeText , 3000)

document.querySelector("#stop").addEventListener ( "click" , () => {
    clearTimeout (setMe) // This Method Clear The Time given In SetMe 
    console.log("setMe Is STOPPED !!! DAMN YOU aZamiL")
    }, false)

    
let interval ;
const st = document.querySelector("#start").addEventListener("click" , () => {
    interval = setInterval(saymyname , 1000)
    // setInterval is a method that calls a function in given seconds 
},false)

document.querySelector("#stop").addEventListener("click" , () => {
    clearInterval(interval) // This Method Clear The Time given In SetMe 
    }, false)
