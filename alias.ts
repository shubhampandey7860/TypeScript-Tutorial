type User = {
    name:string,
    email:string,
    isActive:boolean

}


function createUser(user:User){
return {name:user.name,email:user.email,isActive:user.isActive}
}

console.log(createUser({name:"Shubham",email:"shubham@gmail.com",isActive:true}))



export{} ;