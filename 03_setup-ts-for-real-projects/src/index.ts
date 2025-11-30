console.log(`hello project setup`);
console.log(`am learning typescript`);

interface User {
    name: string,
    phone: number
}

const myData: User = {
    name: 'prantik',
    phone: 1234567890
}

console.log(myData);

// const root = document.getElementById('root');

// if (root) {
//     root.innerHTML = `
//     <p>Name: ${myData.name}</p>
//     <p>Phone: ${myData.phone}</p>
// `
// }


// class User1 {
//     public email: string;
//     private name: string;
//     readonly city: string = 'Kolkata';
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//         this.city
//     }
// }

// const user = new User1('prantik@gg.com', 'prantik')
// user.city
// // user.name
// console.log(user.city)


// how would production grade code look like:
class User1 {

    private _courseCount = 1;

    readonly city: string = 'Kolkata';
    constructor(                    // constructor with parameter properties (shorthand initialization)
        public email: string,
        public name: string,
        private userId: string
    ) {
        // No explicit assignment needed here, TypeScript handles it
    }

    private deleteToken() {
        console.log('Token deleted');
    }

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}

const user = new User1('prantik@gg.com', 'prantik', '012')
// user.deleteToken()  // Property 'deleteToken' is private and only accessible within class 'User1'.