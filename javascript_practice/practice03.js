// Closure

function h () {
    var g  = 74;
    function x () {
        var a = 10;
        a = 94;
        function y () {
            console.log (a , g)  
           }
        y()
       }
    x()
   }
h()

function outerFunction(n) {

    function innerFunction() {
        console.log(outerVar , n);
    }

    let outerVar = 29  ;
    return innerFunction
}
var look = outerFunction( 'SayMyNameYoo');
look()

// closure

// function x(){
//     for( let i = 1; i<=5 ; i++) { // use let instead of var 
//             setTimeout(() => {
//                 console.log(i)
//             }, i * 1000 );
//     }

//     console.log('Namaste Javascript')
// }
// x()

// The Solution Is Let because the Let has blocked scope 

//Using var 

function x() {
    for (var i = 1; i <= 5; i++) {
        (function(i) { // IIFE to create a new scope for each iteration
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        })(i); // Pass current value of i into the IIFE
    }
    console.log('Namaste Javascript');
}
x();

/*
One common pitfall is unintended sharing of the same closure variable in loops. 
This can be avoided by using let instead of var or by using an IIFE to create a new scope.
*/
