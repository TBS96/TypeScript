// ------------------------------------------ BAD BEHAVIOURS OF OBJECTS IN TYPESCRIPT ------------------------------------------

const User = {
    name: 'Prantik',
    email: '9tbs6@proton.me',
    isActive: true
};

function createUser({name: string, isPaid: boolean}) {}

// bad syntax
let newUSer = {name: 'prantik', isPaid: false, email: '9tbs6@proton.me'};
createUser(newUSer);


// When an object returns an object inside a fn., so type is also an object with params as shown below
function createCourse() :{name: string, price: number} {
    return {
        name: 'typescript',
        price: 999
    }
}



// ------------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------ TYPE ALIASES IN TYPESCRIPT ------------------------------------------

// We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

type User = {
    name: string,
    email: string,
    isActive: boolean
};

function createUser1(user: User): User {
    return {name: '', email: '', isActive: true};
}

createUser1({name: '', email: '', isActive: true})



// ------------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------ READONLY & Optional ------------------------------------------


type User1 = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    readonly hobbies: [string, string, string],
    creditCardDetails?: number
};

let myUser: User1 = {
    _id: '123',
    name: 'prantik',
    email: '9tbs6@proton.me',
    isActive: true,
    hobbies: ['coding', 'gaming', 'tweaking'],
    // creditCardDetails: 1234567897564125
};
// myUser._id = '111';     // Cannot assign to '_id' because it is a read-only property
myUser.hobbies.push('sleeping');    //hobbies is an [], so we can push values in case of READONLY
myUser.email = 'hello@mello.com';

const { _id, name, email, isActive, hobbies, creditCardDetails } = myUser;
console.log(`My ID is ${_id}, my name is ${name}, my email is ${email} and am i logged in = ${isActive}. My hobbies are: ${hobbies}. My creadit card details are ${creditCardDetails}`);



type cardNumber = {
    cardnumber: string
};

type cardDate = {
    carddate: string
};

// combining different data types using '&'
type cardDetails = cardNumber & cardDate & {
    cvv: number
};

// here, cardDetails is of a combined type, known as Intersections.



export {}