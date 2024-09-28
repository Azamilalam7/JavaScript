let ranNum = Math.floor(Math.random() * 100 + 1 )
const Submitbutton = document.querySelector("#button")
const UserInput = document.querySelector("#guessFeild")
const Pre = document.querySelector(".Pre")
const Rem = document.querySelector(".Rem")
const High_Or_Low = document.querySelector(".loworhi")
const Return = document.querySelector(".result")
const p = document.createElement("p")

let prevGuess = []
let NumberofGuess = 1
let Gameplay = true

if (Gameplay){
    Submitbutton.addEventListener("click" , function (event) {
        event.preventDefault()
        const guess = parseInt(UserInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function  validateGuess (guess) {
    //
    if (isNaN(guess)){
        alert("Please Enter A Valid Number ")
    } else if (guess === null){
        alert("Please Enter A Number ")
    } else if (guess < 1 ){
        alert("Please Enter A Number More Than 1")
    }else if (guess > 100 ){
        alert("Please Enter A Number Less Than 100")
    }else{
        prevGuess.push(guess)
        if (NumberofGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over  || Random Number Was ${ranNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess (guess) {
    //
    if (guess === ranNum){
        displayMessage("You Gussed It Right || Congratulation !!")
        endGame()
    }else if (guess < ranNum){
        displayMessage("You Number Is TOO Low ")
    }else if (guess > ranNum){
        displayMessage("You Number Is TOO High" )}}
function displayGuess (guess) {
    //
    UserInput.value = ""
    Pre.innerHTML += `${guess} , `
    NumberofGuess++;
    Rem.innerHTML = `${11-NumberofGuess}`

}
function displayMessage (message) { // Directly Interacts With DOM 
    //
    High_Or_Low.innerHTML = `<h4>${message}</h4>`
}
function endGame () {
    //
    UserInput.value = ""
    UserInput.setAttribute ("disabled" , "")
    p.classList.add("button")
    p.innerHTML = `<h3 id =  "newGame"> Start A NewGame </h3>`
    Return.appendChild(p)
    Gameplay = false;
    newGame();
}
function newGame () {
    //
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener( "click" , function (event) {
        ranNum = Math.round(Math.random () * 100 + 1)
        prevGuess = []
        NumberofGuess = 1 
        Pre.innerHTML = ""
        Rem.innerHTML = `${11-NumberofGuess}`
        UserInput.removeAttribute ("disabled")
        Return.removeChild (p)
        Gameplay = true
    })
}