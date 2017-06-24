const get = (obj, props) => (props.length === 1) ? obj[props.shift()] : get(obj[props.shift()] || {}, props);
const set = (obj = {}, props, val) => {
    let prop = props.shift();
    obj[prop] = (props.length) ? set(obj[prop], props, val) : val;
    return obj;
};
const splitArgs = (args) => ({keys: args.slice(0, -1), value: args.slice(-1)[0]});

let instance = null;
class Store {
    constructor() {
        if (instance) {
            return instance;
        } else {
            instance = this;
        }
        this.reset();
    }
    reset() {
        this.data = {};
    }
    get(...args) {
        return get(this.data, args);
    }
    set(...args) {
        let {keys, value} = splitArgs(args);
        if (keys.length) {
            set(this.data, keys, value);
        }
        return value;
    }
    setThen(...keys) {
        return (value) => this.set(...keys, value);
    }
    setWhen(...keys) {
        return (prom) => prom.then(this.setThen(...keys));
    }
}

module.exports = Store;