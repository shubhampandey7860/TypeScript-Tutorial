"use strict";
/*
Interfaces are similar to type aliases, except they only apply to object types.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle);
var UserDetail = {
    name: "Shubham",
    email: 'shubham@gmail.com',
    isActive: true,
    startTrial: function () {
        return "trial started";
    }
};
console.log(UserDetail.startTrial());




