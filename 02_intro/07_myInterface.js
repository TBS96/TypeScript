"use strict";
// Interface is a powerful construct used to define the "shape" of an object.
// It acts as a contract that specifies the properties and methods an object must possess, along with their respective types,
// without providing any implementation details.
Object.defineProperty(exports, "__esModule", { value: true });
var prantik = {
    dbId: 59,
    email: '9tbs6@proton.me',
    userId: 123456,
    // startTrial: () => 'trial started',
    startTrial: function () { return 'f'; },
    getCoupon: function (name, val) { return 10; },
    githubToken: 'abcd1234',
    role: 'admin'
};
prantik.email = 'pran@google.com';
// prantik.dbId = 12    // Cannot assign to 'dbId' because it is a read-only property.
console.log(prantik.email);
console.log(prantik.role);
// googleId is optional property which returns => string | undefined
// interface Admin extends User, AnotherUser ... and so on if we have other interfaces too.
// INTERFACE VS TYPE
// INTERFACE:
// 1. can be extended by easily adding 'extend' keyword.
// 2. can be reopened to add new fields in an existing interface.
// TYPE:
// 1. can be extended by type intersections (using '&')
// 2. cannot be changed after being created.
