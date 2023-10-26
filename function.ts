function addTo(num1:number,num2:number){
    return num1+num2;
}

console.log(addTo(10,20))


// Default value

let loginUser = (name:string,email:string,ispaid:boolean = false)=>{
    console.log(`Hey ${name} welcome to home page`)
}

loginUser('shubham','shubham@gmail.com')


// function with default return type

function getHello(val:string):string{
    return val.toUpperCase()

}
console.log(getHello('shubham'))

// function with  void return type

function Demo():void{
    console.log('it will not return any thing')

}
Demo();


// never 

function handleError(msg:string):never{
    throw new Error(msg);

}





// Array 
const gods = ["Hanuman Ji",'Mahadev','Krishna']
let res = gods.map((god):string=>{
    return `god ${god} `
})
console.log(res)

gods.forEach((god)=>{
    console.log(god)
})
handleError('something is wrong')

export {}