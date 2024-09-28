const button = document.querySelectorAll(".button")
const body = document.querySelector("body")
button.forEach( (buttons) => {
    console.log(buttons)
        buttons.addEventListener("click" , function(event) {
            console.log(event)
            console.log(event.target)
            if(event.target.id === "grey"){
                body.style.backgroundColor = event.target.id
                body.style.color = "white"
            }
            if(event.target.id === "white"){
                body.style.backgroundColor = event.target.id
                body.style.color = "black"
            }
            if(event.target.id === "blue"){
                body.style.backgroundColor = event.target.id
                body.style.color = "white"
            }
            if(event.target.id === "yellow"){
                body.style.backgroundColor = event.target.id
                body.style.color = "black"
            }
            if(event.target.id === "purple"){
                body.style.backgroundColor = event.target.id
                body.style.color = "white"
            }
        })
})