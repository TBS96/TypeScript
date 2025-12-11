interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst: number
}

interface Story {
    createStory(): number
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ) {}

    createStory(): number {
        console.log('Story was created');
        return Math.floor(Math.random() * 23);
    }
}

const obj1 = new Youtube('cm', 'fil', 3, 'sh')
console.log(obj1);
console.log(obj1.createStory());