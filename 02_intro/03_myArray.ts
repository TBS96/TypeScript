const superHeros: string[] = []
// const heroPowers: number[] = []
const heroPowers: Array<number> = []

superHeros.push('spiderman')
console.log(superHeros);
heroPowers.push(2)
console.log(heroPowers);

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []

allUsers.push({
    name: 'prantik',
    isActive: true
})

console.log(allUsers);


// Array of arrays
const rgbColors: number[][] = [
    // ['']    // Type 'string' is not assignable to type 'number'
    [255, 255, 255],
    [222, 215, 254]
]

console.log(rgbColors);

export {}


// syntax of line 3 is more often preferred than syntax of line 2. Both depicts the same meaning though.