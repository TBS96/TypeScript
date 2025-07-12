let score: number | string = 33;
score = 44;
score = '55';


type User = {
    name: string;
    id: number;
};

type Admin = {
    username: string;
    id: number;
};

let prantik: User | Admin = {
    name: 'prantik',
    id: 23
};

prantik = {
    username: 'pg',
    id: 44
};


// function getDbId(id: number | string) {
//     console.log(`DB ID is ${id}`);
// }
getDbId(3);
getDbId('3');

// type narrowing
function getDbId(id: number | string) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    else if (typeof id === 'number') {
        id.toFixed(2);
    }
}



// Array

const data: number[] = [1, 2, 3];
const data1: string[] = ['1', '2', '3'];
const data2: (string | number | boolean)[] = ['1', '2', '3', 4, true];



let pi: 3.14 = 3.14;
// pi = 3.145  // Type '3.145' is not assignable to type '3.14'.


let seatAllotment: 'aisle' | 'middle' | 'window';
seatAllotment = 'aisle'
// seatAllotment = 'crew'      // Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.