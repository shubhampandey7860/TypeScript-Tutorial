/*
Interfaces are similar to type aliases, except they only apply to object types.
*/

interface Rectangle {
height: number,
width: number
}

const rectangle: Rectangle = {
height: 20,
width: 10
};


console.log(rectangle)


interface User {
    name:string,
    email:string,
    isActive:boolean
    startTrial:()=> string

}

const UserDetail:User = {
    name:"Shubham",
    email:'shubham@gmail.com',
    isActive:true,
    startTrial:()=>{
        return "trial started"
    }


}
console.log(UserDetail.startTrial());


interface Person {
    name: string;
}

interface Person {
    age: number;
}


let person: Person = {
    name: "Alice",
    age: 30, // This is allowed
}


export {};

