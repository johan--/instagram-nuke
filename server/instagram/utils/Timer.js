'use strict';

const toLength = (str, len = 6) => ('        ' + str).substr(-len);

let instance = null;
class Timer {
    constructor() {
        if (instance) {
            return instance;
        } else {
            instance = this;
        }
        this.reset();
    }
    reset() {
        this.start = new Date();
    }
    _generateMessage() {
        let ms = new Date() - this.start;
        let formatted = toLength(this.formatTime(ms), 4);
        let msStr = toLength(ms, 7) + 'ms';
        return `:: ${formatted} :: ${msStr} ::`;
    }
    log(...args) {
        return (value) => {
            console.log('LOG', this._generateMessage(), ...args);
            return value;
        }
    }
    error(...args) {
        return (value) => {
            console.log('ERR', this._generateMessage(), ...args);
            return value;
        }
    }
    formatTime(ms) {
        let seconds = Math.floor(ms / 1000);

        let interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + 'h';
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + 'm';
        }
            return Math.floor(seconds) + 's';
        }
}

module.exports = Timer;