class GoogleService {
    constructor (Servicename ,  passwordkey) {
        this.Servicename = Servicename
        this.passwordkey = passwordkey
    }

    get Servicename (){
        return `${this._Servicename}@google.com`
    }

    set Servicename (getserviceName){
        this._Servicename = getserviceName
    }

    get passwordkey  (){
        return `${this._passwordkey + 100}`
    }

    set passwordkey (value){
        this._passwordkey = value
    }
}

const service1 = new GoogleService(`Youtube` , 7473)
console.log(service1.Servicename)
console.log(service1.passwordkey)

// Definig Getter and Setter without class 

function website (domainName , IPAdress) {
    this._domainName = domainName
    this._IPAdress = IPAdress

    Object.defineProperty(this , 'domainName' , {
        get : function (){
            return `https://www.${this._domainName}.com`
        },
        set : function (setURL){
            this._domainName = setURL
        }
})

    Object.defineProperty(this , 'IPAdress' , {
            get : function (){
                return `${this._IPAdress}.78`
            },
            set : function (Ip){
                this._IPAdress = Ip
            }
    })
}

const website1  = new website('GitHub' , '192.158.1.38')
console.log(website1.domainName)
console.log(website1.IPAdress)