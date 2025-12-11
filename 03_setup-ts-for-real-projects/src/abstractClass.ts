abstract class TakePhotos {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepia(): void
    getReelTime(): number {
        // some complex calculation
        return 8;
    }
}


class Instagrams extends TakePhotos {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log('got sepia');
    }

    getReelTime(): number {
        return 2;
    }
}

// const prantik = new TakePhotos('8mp', 'blur');  // Cannot create an instance of an abstract class.

const prantik = new Instagrams('50mp', 'sepia', 3);
console.log(prantik);
console.log(prantik.getReelTime());
console.log(prantik.getSepia());






// NOTE:
// Abstraction is used to hide complex implementation details and expose only the essential features or functionality to the user.
// It is the process of defining the 'what needs to be done, rather than the 'how' it is done.