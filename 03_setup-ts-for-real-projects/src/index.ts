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

const root = document.getElementById('root');

if (root) {
    root.innerHTML = `
    <p>Name: ${myData.name}</p>
    <p>Name: ${myData.phone}</p>
`
}