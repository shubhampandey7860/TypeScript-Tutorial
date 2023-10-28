"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
}
console.log(createUser({ name: "Shubham", email: "shubham@gmail.com", isActive: true }));
var myuser = {
    _id: "101",
    name: "Yash",
    email: "yash@gmail.com",
    isActive: false,
    creaditCardDetails: 12345
};
console.log(myuser);
