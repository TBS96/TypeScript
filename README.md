# Learning TypeScript

## Global Installation

Install TypeScript globally using npm:
```bash
npm install -g typescript
```

## Check TypeScript Version

Verify the installation and check the version:
```bash
tsc -v
```

## Transpiling TypeScript Files

Compile/transpile a TypeScript file to JavaScript:
```bash
tsc filename.ts
```
This will create a `filename.js` file in the same directory.

### Additional Options

- Watch mode (auto-compile on changes):
```bash
tsc filename.ts --watch
```

- Compile all TypeScript files in a directory:
```bash
tsc *.ts
```

Note: Make sure you have Node.js and npm installed on your system before installing TypeScript.