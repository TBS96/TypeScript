"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return num + 2;
    return 'hello';
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    return "".concat(name, " has signed up with email ").concat(email, " and paid ").concat(isPaid);
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// addTwo(5);
var myValue = addTwo(5);
getUpper('prantik');
signUpUser('prantik', '9tbs6@proton.me', false);
loginUser('prantik', '9tbs6@proton.me');
// now lets tweak fn addTwo. We'll change the return type to string and store the fn in a variable. We'll see this in the next part.
// Type inference is optional when we're decalring variables, but its VERY NECESSARY when we're defining functions.
