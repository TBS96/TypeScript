// import { createServer, IncomingMessage, ServerResponse } from 'node:http';

// const PORT: number = 3000;

// const server = createServer((req: IncomingMessage, res: ServerResponse) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('helloss world');
// });

// server.listen(PORT, '127.0.0.1', () => {
//     console.log(`Listening on http://localhost:${PORT}`);
// });











import express from 'express';
import type { Request, Response } from 'express'

const PORT: number = 3000;
const app = express();

interface UserData {
    name: string,
    phone: number,
    email: string,
    address: {
        houseNo: number,
        street: string,
        pincode: number
    },
}

const myData: UserData = {
    name: 'prantik',
    phone: 123456789,
    email: 'prantik@g.co',
    address: {
        houseNo: 101,
        street: 'Dunlop Area',
        pincode: 600935
    },
};

app.get('/', (req: Request, res: Response) => {
    res.status(200).json(myData);
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});