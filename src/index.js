import shortString from 'short-string';

export default function namer() {
    const known = {};
    let nextIndex = 0;

    return function(file, selector) {
        const id = file + selector;

        return known[id] || (known[id] = shortString(nextIndex++));
    }
}
