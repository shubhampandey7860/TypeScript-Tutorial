"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Shubham",
    email: "shubham@gmail.com",
    isActive: true
};
function CreateUser(_a) {
    var string = _a.name, boolean = _a.ispaid;
}
CreateUser({ name: "shubham", ispaid: false });
function createCourse(name, price) {
    return { name: name, price: price };
}
createCourse("python", 599);
