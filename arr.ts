const superheros:string[] = []

//const superheros:Array<string> = []

superheros.push("spiderman")
superheros.push('thor')
console.log(superheros)


type user = {
    name:string,
    age:number
}

const alluser :user[] = []

alluser.push({name:"Ritik",age:25})
alluser.push({name:"Yash",age:22})
console.log(alluser,alluser.length)


export {};