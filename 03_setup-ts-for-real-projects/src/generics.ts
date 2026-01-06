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