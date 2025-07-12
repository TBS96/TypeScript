"use strict";
// Tuples, in broad category is just an array, a kind of a specialized array, that is given to us by TypeScript, with some restrictions onto it.
Object.defineProperty(exports, "__esModule", { value: true });
// const user: (string | number)[] = ['pg', 1, 'yo'];
var tUser;
tUser = ['pg', 1, true];
// tUser = [1, false, 'yo'];   // Type 'number' is not assignable to type 'string'. this is because we have defined type tUser to check strictly following the order of array(types).
var rgb = [255, 123, 122];
// const newUser: User = [122, 'abcs@bdg.com', true];   // Type '[number, string, boolean]' is not assignable to type 'User'. Source has 3 element(s) but target allows only 2.
var newUser = [122, 'abcs@bdg.com'];
newUser[1] = 'pg.com';
