function addTo(num1, num2) {
    return num1 + num2;
}
console.log(addTo(10, 20));
// Default value
var loginUser = function (name, email, ispaid) {
    if (ispaid === void 0) { ispaid = false; }
    console.log("Hey ".concat(name, " welcome to home page"));
};
loginUser('shubham', 'shubham@gmail.com');
// function with default return type
function getHello(val) {
    return val.toUpperCase();
}
console.log(getHello('shubham'));
// function with  void return type
function Demo() {
    console.log('it will not return any thing');
}
Demo();
// never 
function handleError(msg) {
    throw new Error(msg);
}
// Array 
var gods = ["Hanuman Ji", 'Mahadev', 'Krishna'];
var res = gods.map(function (god) {
    return "god ".concat(god, " ");
});
console.log(res);
gods.forEach(function (god) {
    console.log(god);
});
handleError('something is wrong');
