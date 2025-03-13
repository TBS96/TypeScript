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



let greetings: string = 'Hello, Prantik';   // Temporary solution for the error: Cannot redeclare block-scoped variable 'greetings'.

let myNum = 10;

// myNum.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'.

// greetings.toLowercase();  // Error: Property 'toLowercase' does not exist on type 'string'. Did you mean 'toLowerCase'?


console.log(greetings);
console.log(myNum);




// ----------------------------------------------------------------------------------------------------------------------------


// number

let userId: number = 334466.2;
// userId.allNumberMethods


// boolean

let isLoggedIn: boolean = false;

// in these scenarios, we dont need to explicitly mention the type of the variable, as typescript can infer the type of the variable from the value assigned to it. It is called type inference. It is needed only when we want to explicitly mention the type of the variable in complex scenarios.
// So, better syntax would be simply:
// let userId = 3131364.4;



// ----------------------------------------------------------------------------------------------------------------------------


// any (we can use it whenever we don’t want a particular value to cause typechecking errors, but NOT RECOMMENDED)

let hero: string;

function getHero() {
    // return true;
    return 'SpiderMan';
}
// hero = getHero();   // in case of true, Error: Type 'string | boolean' is not assignable to type 'string'. Type 'boolean' is not assignable to type 'string'
hero = getHero();

// noImplicitAny (When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any. You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.)



export {};