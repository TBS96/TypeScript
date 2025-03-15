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


export {}