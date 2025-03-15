function addTwo(num: number): number {
    return num + 2;
    // return 'hello';     // Type 'string' is not assignable to type 'number'.
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


// We'll discuss much about the below later = > UNION.
// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true;
//     }
//     return '200 OK';    // Type 'string' is not assignable to type 'boolean'.
// }


const getHello = (s: string): string => {
    return '';
};


const heros = ['spiderman', 'ironman', 'thor'];
// const heros = [1, 2, 3];

heros.map((hero): string => {
    return `hero is ${hero}`;
    // return 2;   // Type 'number' is not assignable to type 'string'.
});


function consoleError(errMsg: string): void {
    console.log(errMsg);
}


// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program. never also appears when TypeScript determines there’s nothing left in a union.
function handleError(errMsg: string): never {
    throw new Error(errMsg);
}


export {}


// now lets tweak fn addTwo. We'll change the return type to string and store the fn in a variable. We'll see this in the next part.
// => TWEAKED AND MENTIONED FN. addTwo() AS A number

// Note:
// Type inference is optional when we're decalring variables, but its VERY NECESSARY when we're defining functions.