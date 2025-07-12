"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["FOUR"] = 3] = "FOUR";
})(SeatChoice || (SeatChoice = {}));
// if i hover on AISLE, it shows '(enum member) SeatChoice.AISLE = 0' and the value gets incremented by 1.
// we can restrict this or make it more strict acc. to our needs.
(function (SeatChoice) {
    SeatChoice["AISLES"] = "AISLES";
    SeatChoice["MIDDLES"] = "MIDDLES";
    SeatChoice["WINDOWS"] = "WINDOWS";
    SeatChoice["FOURS"] = "FOURS";
    SeatChoice[SeatChoice["FIVE"] = 5] = "FIVE";
})(SeatChoice || (SeatChoice = {}));
console.log(SeatChoice.AISLE); // 0
console.log(SeatChoice.AISLES); // AISLES
console.log(SeatChoice.MIDDLE); // 1
console.log(SeatChoice.MIDDLES); // MIDDLES
console.log(SeatChoice.WINDOW); // 2
console.log(SeatChoice.WINDOWS); // WINDOWS
console.log(SeatChoice.FOUR); // 3
console.log(SeatChoice.FOURS); // FOURS
console.log(SeatChoice.FIVE); // 5
var myName = "Prantik" /* UserDetails.NAME */;
console.log(myName);
