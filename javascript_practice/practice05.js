// Callback Function 
function x(y) {
    y()
}
// Function That Are Passed Inside Another function is call Callback Function 
// It advantage is we can do asyncronous operation
x(function z() {
    setTimeout(() => {
        console.log(`Welcome To The World Of Javascript`)
    }, 2000)
})

// Closure With Event Listner 

function attachEventListners() {
    let count = 0;
    document.getElementById("clickme")
        .addEventListener("click", () => {
            count++;
            console.log(count)
        },
            false)
}
attachEventListners()
