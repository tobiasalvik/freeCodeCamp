/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    // Turn letters into character codes, store in array
    var charCodes = [...str].map(x => x.charCodeAt());

    // Init missing number as -1 (meaning not missing)
    var missingNum = -1;
    // Start loop at the number value instead of index
    // and loop through until the end of the array, but not the last value
    for (let i = charCodes[0]; i <= charCodes[charCodes.length - 1]; i++) {
        // If the the character is not found at it's index (value)
        if (charCodes.indexOf(i) === -1) {
            // Set the number to that value
            missingNum = i;
        }
    }
    // If missingNumber is not missing (-1) return undefined, else output the missing letter
    return missingNum === -1 ? undefined : String.fromCharCode(missingNum);
}

fearNotLetter("abce"); // "d"
