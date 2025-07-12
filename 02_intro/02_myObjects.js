"use strict";
// ------------------------------------------ BAD BEHAVIOURS OF OBJECTS IN TYPESCRIPT ------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'Prantik',
    email: '9tbs6@proton.me',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// bad syntax
var newUSer = { name: 'prantik', isPaid: false, email: '9tbs6@proton.me' };
createUser(newUSer);
// When an object returns an object inside a fn., so type is also an object with params as shown below
function createCourse() {
    return {
        name: 'typescript',
        price: 999
    };
}
function createUser1(user) {
    return { name: '', email: '', isActive: true };
}
createUser1({ name: '', email: '', isActive: true });
var myUser = {
    _id: '123',
    name: 'prantik',
    email: '9tbs6@proton.me',
    isActive: true,
    hobbies: ['coding', 'gaming', 'tweaking'],
    // creditCardDetails: 1234567897564125
};
// myUser._id = '111';     // Cannot assign to '_id' because it is a read-only property
myUser.hobbies.push('sleeping'); //hobbies is an [], so we can push values in case of READONLY
myUser.email = 'hello@mello.com';
var _id = myUser._id, name = myUser.name, email = myUser.email, isActive = myUser.isActive, hobbies = myUser.hobbies, creditCardDetails = myUser.creditCardDetails;
console.log("My ID is ".concat(_id, ", my name is ").concat(name, ", my email is ").concat(email, " and am i logged in = ").concat(isActive, ". My hobbies are: ").concat(hobbies, ". My creadit card details are ").concat(creditCardDetails));
