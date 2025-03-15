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



export {}