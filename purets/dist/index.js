"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email) {
        //private _coursecount = 1
        this._coursecount = 1;
        this.city = "Jaunpur";
        this.name = name;
        this.email = email;
        //private userId:string
    }
    // private method
    deleteToken() {
        console.log("token deleted");
    }
    get getCityName() {
        return this.city;
    }
    get courseCount() {
        return this._coursecount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than one");
        }
        this._coursecount = courseNum;
    }
}
const u1 = new User("shubham", "shubham@gmail.com");
u1.getCityName;
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._coursecount = 4;
    }
}
