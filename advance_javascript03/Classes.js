class Crickter {
    constructor(name , sports , sport_id){
        this.name = name
        this.sports = sports
        this.sport_id = sport_id
    }

    increament_sport_id(){
        return  ++ this.sport_id 
    }
    captilizesportsname (){
        return `${this.sports.toUpperCase()}`
    }
}
const Crickter1 = new Crickter(`Virat Kholi` , `Cricket` , 3782)
// console.log(Crickter1.increament_sport_id())
// console.log(Crickter1.captilizesportsname())

// 
function  Userfun (name , sports , sport_id){
    this.name = name
    this.sports = sports
    this.sport_id = sport_id
}
Userfun.prototype.increament_sport_id = function (){
    return  ++ this.sport_id 
}
Userfun.prototype.captilizesportsname = function (){
    return `${this.sports.toUpperCase()}`
}

const Crickter2 = new  Userfun (`AB Deviliers  ` , `Cricket` , 6437)
// console.log(Crickter2.increament_sport_id())
// console.log(Crickter2.captilizesportsname())

// Inheritance 

class Client 
{
    constructor(id , clientName ) 
    {
        this.id = id
        this.clientName = clientName
    }
    decrement_id ()
    {
        return`${-- this.id}`
    }
    createThe_email ()
    {
        return`${this.clientName}@github.to`
    }
}

class Gameclient extends Client
{
    constructor(id, clientName, task) 
    {
    super(id, clientName);  // Call the parent constructor
    this.task = task;       // Add the task property specific to Gameclient
    }

    My_task() 
    {
    return `My Task Is To Create ${this.task}`;
    }}


const client1 = new Client(100, 'JohnDoe');
console.log(client1.createThe_email());  
console.log(client1.decrement_id());    
    
const gameClient1 = new Gameclient(200, 'flacoES6', 'a new game level');
console.log(gameClient1.createThe_email());  
console.log(gameClient1.My_task());  

console.log(client1 instanceof Client)