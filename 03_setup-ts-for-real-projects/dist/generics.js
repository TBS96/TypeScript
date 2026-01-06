"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(true)
function identityFour(val) {
    return val;
}
const ifour = identityFour({
    brand: 'tesla',
    type: 99,
});
console.log(ifour);
function getSearchProducts(products) {
    // do some db operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // do some db operations
    const myIndex = 4;
    return products[myIndex];
};
const getMoreSearchProducts1 = (products) => {
    // do some db operations
    const myIndex = 4;
    return products[myIndex];
};
// getMoreSearchProducts and getMoreSearchProducts1 are same
// Generic classes:
function anotherFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
function anotherFunction1(val1, val2) {
    return {
        val1,
        val2
    };
}
const options = {
    connection: 'mongodb+srv//hshsb/dsds',
    username: 'prantik',
    password: 'bssjbjsbjsb'
};
console.log(anotherFunction1([0].length + 8000, options));
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
