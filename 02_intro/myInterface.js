// Interface is a powerful construct used to define the "shape" of an object.
// It acts as a contract that specifies the properties and methods an object must possess, along with their respective types,
// without providing any implementation details.
var prantik = {
    dbId: 59,
    email: '9tbs6@proton.me',
    userId: 123456,
    // startTrial: () => 'trial started',
    startTrial: function () { return 'f'; },
    getCoupon: function (name, val) { return 10; }
};
prantik.email = 'pran@google.com';
// prantik.dbId = 12    // Cannot assign to 'dbId' because it is a read-only property.
console.log(prantik.email);
// googleId is optional property which returns => string | undefined
