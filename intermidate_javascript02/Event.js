/*
//Event Propogation  
Ther Are Two Context In Event Propgation 
Event Bubling (Most Of The Time In Market  We Use Event Bubling) false <Bubling means bottom to top >
Event Capturing (But In Some Secnario We Use Event Capturing) true <capturing means top to bottom >
*/

document.getElementById("images").addEventListener("click" , function(event_object){
     console.log("Clicked Inside The ul ")} , 
     false)

document.getElementById("owl").addEventListener("click" , function(event_object){
     console.log("Owl Clicked")
     event_object.stopPropagation()} , // stop the bubling 
     false) // Third Parametre Is False But it is default But in interviews they can ask 

document.getElementById("google").addEventListener("click" , (event) => {
     console.log("Prevent_Deafaulted")
     event.preventDefault()
     event.stopPropagation()
} , false)

document.querySelector("#images").addEventListener ("click" , (event) => {
     console.log(event.target.tagName)
     if (event.target.tagName === "IMG"){
          let removetheimage = event.target.parentNode
          removetheimage.parentNode.removeChild(removetheimage)
     }

} , true)

/* Thing To Learn 

type , TimeStamp , preventDefault 
target , toElement srcElement 

************************** Interview Prespective ************************
ClientX , ClientY , ScreenX ,ScreenY  < position releated >

Key Related (Track Wheter The User Click altkey , ctrlkey , shiftkey etc ...)

*/