"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = "55";
score = true;
console.log(score);
var Account = { name: "shubham", id: 101 };
console.log(Account);
function getDbId(id) {
    if (typeof id === "number") {
        console.log("id is ".concat(id, " & type is number"));
    }
    else {
        console.log("id is ".concat(id, " & type is string"));
    }
}
getDbId(101);
var seatAllotment;
seatAllotment = "aisle";
console.log(seatAllotment);
