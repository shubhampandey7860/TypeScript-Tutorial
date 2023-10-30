const score : Array<number> = []
const names:Array<string> = []


function IdentityOne(val:number|boolean):number|boolean{
    return val
}


function IdentityTwo(val:any):any{
    return val
}


function IdentityThree<Type>(val:Type):Type{
    return val
}


function IdentityFour<T>(val:T):T{
    return val
}


interface Bottle {
    brand:string,
    type:number
}


function getSearchProduct<T>(product:T[]):T{
    const myIndex = 3
    return product[myIndex]
}

const getMoreSearchProduct = <T,>(products:T[]) :T=>{
    const myIndex = 4
    return products[myIndex]


}


interface Database {
    connection:string,
    username:string,
    password:string

}


function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
    return {
        valOne:valOne,
        valTwo:valTwo
    }
}

anotherFunction(3,{connection:"shubhamdb",username:"shubham",password:"*******"})


interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}


class Sellable <T>{
    public cart:T[]=[]
    addTOCart(products:T){
        this.cart.push(products)
    }
}



