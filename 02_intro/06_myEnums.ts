enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
    FOUR,
}

// if i hover on AISLE, it shows '(enum member) SeatChoice.AISLE = 0' and the value gets incremented by 1.
// we can restrict this or make it more strict acc. to our needs.

enum SeatChoice {
    AISLES = 'AISLES',
    MIDDLES = 'MIDDLES',
    WINDOWS = 'WINDOWS',
    FOURS = 'FOURS',
    FIVE = 5
}

console.log(SeatChoice.AISLE);      // 0
console.log(SeatChoice.AISLES);     // AISLES
console.log(SeatChoice.MIDDLE);     // 1
console.log(SeatChoice.MIDDLES);    // MIDDLES
console.log(SeatChoice.WINDOW);     // 2
console.log(SeatChoice.WINDOWS);    // WINDOWS
console.log(SeatChoice.FOUR);       // 3
console.log(SeatChoice.FOURS);      // FOURS
console.log(SeatChoice.FIVE);       // 5


// if we compile the above codes and see, the js code, we see that a lots of unnecessary codes gets generated in IIFE. so to avoid it and just get the required work done, we simply will use 'const', as enums are basically constant values in a data structure.

const enum UserDetails {
    NAME = 'Prantik',
    PHONE = 1234567890,
    EMAIL = 'pg@pran.in',
    PROFESSION = 'fdev',
    ISACTIVE = 'true'
}

const myName = UserDetails.NAME
console.log(myName);


export {}