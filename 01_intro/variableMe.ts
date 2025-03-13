// Types:
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Void
// 7. Object
// 8. Array
// 9. Tuples
// 10. Any  (Dynamic Type): only use it when your'e debugging or when you're not sure about the type of the variable.
// 11. Never
// 12. unknown  (Better than Any): It's a type-safe version of Any. It's a type that is not known until runtime.


// Syntax:
// let variableName: type = value;



let greetings: string = 'Hello, Prantik';

let myNum = 10;

// myNum.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'.

// greetings.toLowercase();  // Error: Property 'toLowercase' does not exist on type 'string'. Did you mean 'toLowerCase'?


console.log(greetings);
console.log(myNum);

export {};  // Temporary solution for the error: Cannot redeclare block-scoped variable 'greetings'.