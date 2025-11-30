"use strict";
console.log(`hello project setup`);
console.log(`am learning typescript`);
const myData = {
    name: 'prantik',
    phone: 1234567890
};
console.log(myData);
// const root = document.getElementById('root');
// if (root) {
//     root.innerHTML = `
//     <p>Name: ${myData.name}</p>
//     <p>Phone: ${myData.phone}</p>
// `
// }
// class User1 {
//     public email: string;
//     private name: string;
//     readonly city: string = 'Kolkata';
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//         this.city
//     }
// }
// const user = new User1('prantik@gg.com', 'prantik')
// user.city
// // user.name
// console.log(user.city)
// how would production grade code look like:
class User1 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = 'Kolkata';
    }
}
const user = new User1('prantik@gg.com', 'prantik', '012');
