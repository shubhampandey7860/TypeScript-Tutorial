"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
}
console.log(createUser({ name: "Shubham", email: "shubham@gmail.com", isActive: true }));
