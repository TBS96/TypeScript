// Interface is a powerful construct used to define the "shape" of an object.
// It acts as a contract that specifies the properties and methods an object must possess, along with their respective types,
// without providing any implementation details.

interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string,    OR
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
}

// We can reopen or use extension of interfaces to add new fields. Here, as interface 'User'.
interface User {
    githubToken: string,
}

// Inheritence: interface 'Admin' gets all the properties of interface 'User' with 'extend' keyword.
interface Admin extends User {
    role: 'admin' | 'ta' | 'learner'
}

const prantik: Admin = {
    dbId: 59,
    email: '9tbs6@proton.me',
    userId: 123456,
    // startTrial: () => 'trial started',
    startTrial: () => 'f',
    getCoupon: (name: 'pran10', val: 10) => 10,
    githubToken: 'abcd1234',
    role: 'admin'
}

prantik.email = 'pran@google.com'
// prantik.dbId = 12    // Cannot assign to 'dbId' because it is a read-only property.

console.log(prantik.email);
console.log(prantik.role);


export {}

// googleId is optional property which returns => string | undefined

// interface Admin extends User, AnotherUser ... and so on if we have other interfaces too.


// INTERFACE VS TYPE

// INTERFACE:
// 1. can be extended by easily adding 'extend' keyword.
// 2. can be reopened to add new fields in an existing interface.

// TYPE:
// 1. can be extended by type intersections (using '&')
// 2. cannot be changed after being created.