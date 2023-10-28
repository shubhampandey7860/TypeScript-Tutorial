let score:number| string |boolean = 33
score = "55"
score = true
console.log(score)

type user = {
    name:string,
    id:number
}

type Admin = {
    username:string,
    id:number

}


let Account:user | Admin = {name:"shubham",id:101}
console.log(Account)


function getDbId(id:number | string){
    
    if (typeof id ==="number"){
        console.log(`id is ${id} & type is number`)
    }else{
        console.log(`id is ${id} & type is string`)
    }
}
getDbId(101)


let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"   error
console.log(seatAllotment)



export {};


