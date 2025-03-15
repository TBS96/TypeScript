var score = 33;
score = 44;
score = '55';
var prantik = {
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
function getDbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    else if (typeof id === 'number') {
        id.toFixed(2);
    }
}
// Array
var data = [1, 2, 3];
var data1 = ['1', '2', '3'];
var data2 = ['1', '2', '3', 4, true];
var pi = 3.14;
// pi = 3.145  // Type '3.145' is not assignable to type '3.14'.
var seatAllotment;
seatAllotment = 'aisle';
// seatAllotment = 'crew'      // Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.
