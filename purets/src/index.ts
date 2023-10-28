class User {
    //private _coursecount = 1
    protected _coursecount = 1
    name:string
    email:string
    private readonly city:string = "Jaunpur"
    constructor(name:string,email:string){
        this.name = name
        this.email = email
        //private userId:string
    }
     // private method

    private deleteToken(){
        console.log("token deleted");
    }


    get getCityName():string{
        return this.city
    }

    get courseCount():number{
        return this._coursecount
    }

    set courseCount(courseNum){
        if (courseNum <=1){
            throw new Error("course count should be more than one")
        }
        this._coursecount = courseNum
    }
}
    

const u1 = new User("shubham","shubham@gmail.com")
u1.getCityName;



class SubUser extends User{
    isFamily:boolean = true
    changeCourseCount(){
        this._coursecount = 4
        
    }


}


export{};
