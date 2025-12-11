"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log('Story was created');
        return Math.floor(Math.random() * 23);
    }
}
const obj1 = new Youtube('cm', 'fil', 3, 'sh');
console.log(obj1);
console.log(obj1.createStory());
