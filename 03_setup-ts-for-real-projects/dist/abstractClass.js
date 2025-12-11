"use strict";
class TakePhotos {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculation
        return 8;
    }
}
class Instagrams extends TakePhotos {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('got sepia');
    }
    getReelTime() {
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
