// Interface is a powerful construct used to define the "shape" of an object.
// It acts as a contract that specifies the properties and methods an object must possess, along with their respective types,
// without providing any implementation details.

interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string,    OR
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
}

const prantik: User = {
    dbId: 59,
    email: '9tbs6@proton.me',
    userId: 123456,
    // startTrial: () => 'trial started',
    startTrial: () => 'f',
    getCoupon: (name: 'pran10', val: 10) => 10
}

prantik.email = 'pran@google.com'
// prantik.dbId = 12    // Cannot assign to 'dbId' because it is a read-only property.

console.log(prantik.email);



// googleId is optional property which returns => string | undefined