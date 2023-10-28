type User = {
    name:string,
    email:string,
    isActive:boolean

}


function createUser(user:User){
return {name:user.name,email:user.email,isActive:user.isActive}
}

console.log(createUser({name:"Shubham",email:"shubham@gmail.com",isActive:true}))



type Record = {
    readonly _id:string,
    name:string,
    email:string,
    isActive:boolean,
    creaditCardDetails?:number  // optional

}

let myuser:Record = {
    _id:"101",
    name:"Yash",
    email:"yash@gmail.com",
    isActive:false,
    creaditCardDetails:12345
}


console.log(myuser)
//myuser._id = "1234"


type cardDate = {
    cardDate :string
}
type cardNumber = {
    cardNumber:number
}

type CardDetails = cardNumber & cardDate & {
    cvv:number
}


export{} ;