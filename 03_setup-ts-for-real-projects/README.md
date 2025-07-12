# Setup TypeScript for real projects

## Initialize `TypeScript`:
```bash
tsc --init
# This will create a file called tsconfig.json in /
```

## Initialize `npm` for package installations:
```bash
npm init -y
```

## Create folders: `src` and `dist`
```bash
mkdir src dist
```

## Create `index.ts` file in `/src` and write your code. For example:
```bash
console.log('hello project setup');
console.log('am learning typescript');

interface User {
    name: string,
    phone: number
}

const myData: User = {
    name: 'prantik',
    phone: 1234567890
}

console.log(myData);
```

## In `tsconfig.json` file, search for `outDir` (will be under `Emit`), uncheck the comment (`Crtl+/`), and write the following value:
```bash
"outDir": "./dist",
```

## Create `index.html` and add the basic HTML snippet along with a `script` tag inside `body` tag like:
```bash
<script src="./dist/index.js"></script>
```

## In terminal, instead of transpiling using `tsc src/index.ts` again and again, simply just use:
```bash
tsc -w
# this keeps an eye on the file and gets transpiled to JS automatically to /dist/
```