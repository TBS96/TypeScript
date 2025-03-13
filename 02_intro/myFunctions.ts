function addTwo(num: number) {
    // return num + 2;
    return 'hello';
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
    return `${name} has signed up with email ${email} and paid ${isPaid}`;
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

// addTwo(5);
let myValue = addTwo(5);

getUpper('prantik');
signUpUser('prantik', '9tbs6@proton.me', false);
loginUser('prantik', '9tbs6@proton.me');

export {}

// now lets tweak fn addTwo. We'll change the return type to string and store the fn in a variable. We'll see this in the next part.

// Type inference is optional when we're decalring variables, but its VERY NECESSARY when we're defining functions.