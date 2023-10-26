const User = {
    name:"Shubham",
    email:"shubham@gmail.com",
    isActive:true
}


function CreateUser({name:string,ispaid:boolean}){
    
    

}

CreateUser({name:"shubham",ispaid:false})


function createCourse(name:string,price:number) : {name:string,price:number}{
    return {name:name,price:price}

}
createCourse("python",599)

export {};