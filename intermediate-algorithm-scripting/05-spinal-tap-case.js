/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    str = str.replace(/\b[a-z]/g, function(x) {
        return x.toUpperCase();
    }); // all words to uppercase
    str = str.replace(/\_|\s|\-/g, ""); // strip underscores, whitespaces and dashes
    str = str.replace(/([A-Z])/g, "-$1"); // insert dashes before every uppercase character
    str = str.replace(/^\-/g, ""); // remove first occurence of a dash
    return str.toLowerCase(); // convert result to lowercase
}
spinalCase("This Is Spinal Tap"); // this-is-spinal-tap-case
