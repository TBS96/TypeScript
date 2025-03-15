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
