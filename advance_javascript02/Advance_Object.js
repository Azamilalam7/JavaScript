const descriptor = Object.getOwnPropertyDescriptor(Math , 'PI')
// console.log(descriptor)
// console.log(Math.PI)

const Topcoffee  = {
    coffeeBrand : 'Starbucks',
    price : 583,
    flavor : 'Espesso Frappuccino',
    isAvailable : true,
    orderCoffee : function(){
        console.log(`Your Coffee ${this.flavor} is Aailalable The Price Is ${this.price}`)
    }
}

console.log(Object.getOwnPropertyDescriptor(Topcoffee , "coffeeBrand"))
Object.defineProperty(Topcoffee , 'coffeeBrand' , {
    writable: false,
    enumerable: true,
})

// console.log(Object.getOwnPropertyDescriptor(Topcoffee , "coffeeBrand"))

for (let [key ,  value ]  of Object.entries(Topcoffee)) {
    if (typeof value !== 'function'){
        console.log(`${key} : ${value}`)}
}
console.log(Topcoffee.orderCoffee())