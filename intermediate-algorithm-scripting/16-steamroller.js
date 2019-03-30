/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce((done, curr) => {
            return done.concat(steamrollArray(curr));
        }, []);
    } else {
        return arr;
    }
}
