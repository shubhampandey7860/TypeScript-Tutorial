function detectType(val:number|string){
    return typeof val

}


function ProvideId(id:string | null){
    if (!id){
        console.log("please provide id")
    }
    else{
        id.toLowerCase()
    }

}


interface User{
    name:string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

// in operator narrowing

function isAdminAccount(account: User | Admin){

    if ("isAdmin" in account){
        return account.isAdmin
    }

}

// instance of narrowing

function logValue(x:Date | string){

    if (x instanceof Date){
        console.log(x.toUTCString);
    }
    else{
        x.toLocaleUpperCase();
    }
}

type Fish = {swim:() => void};
type Bird = {fly:() => void};


// type predicts narrowing

function isFish(pet:Fish | Bird):pet is Fish{
    return (pet as Fish).swim!==undefined
}

function getFood(pet:Fish | Bird){
    if (isFish(pet)){
        pet
        return "fish food"
    }
    else{
        pet
        return "bird food"
    }
}


// Discriminated unions

interface Circle{
    kind:"circle",
    radius:number
}

interface Square{
    kind:"square",
    side:number
}

interface Rectangle{
    kind : "rectangle",
    length:number,
    width:number


}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape:Shape){

    if (shape.kind === "circle"){
        return Math.PI*shape.radius**2
    }
    else if (shape.kind == 'square'){
        return shape.side *shape.side
    }
    return shape.length * shape.width
}

function getArea(shape:Shape){
    switch (shape.kind){
        case "circle":{
            return Math.PI*shape.radius**2

        }
        case "square":{
            return shape.side *shape.side

        }
        case "rectangle":{
            return shape.length * shape.width

        }

        default:
            const _defaultforShape:never = shape
            return _defaultforShape
    }
}
