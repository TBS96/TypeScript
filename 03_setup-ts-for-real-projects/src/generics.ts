const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

// identityThree(true)

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string,
    type: number,
}

const ifour = identityFour<Bottle>({
    brand: 'tesla',
    type: 99,
})

console.log(ifour);


function getSearchProducts<T>(products: T[]): T {
    // do some db operations
    const myIndex = 3;
    return products[myIndex]
}


const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some db operations
    const myIndex = 4;
    return products[myIndex]
};

const getMoreSearchProducts1 = <T>(products: Array<T>): T => {
    // do some db operations
    const myIndex = 4;
    return products[myIndex]
};

// getMoreSearchProducts and getMoreSearchProducts1 are same



// Generic classes:

function anotherFunction<T, U extends number>(val1: T, val2: U):object {
    return {
        val1,
        val2
    }
}
// anotherFunction(3, '4');    // Argument of type 'string' is not assignable to parameter of type 'number'.

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction1<T, U extends Database>(val1: T, val2: U):object {
    return {
        val1,
        val2
    }
}
const options: Database = {
    connection: 'mongodb+srv//hshsb/dsds',
    username: 'prantik',
    password: 'bssjbjsbjsb'
};
console.log(anotherFunction1([0].length + 8000, options));



// example2;

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(product: T) {
        this.cart.push(product)
    }
}