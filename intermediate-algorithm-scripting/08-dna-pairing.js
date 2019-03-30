/* 
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
    var strings = [];
    for (let s in str) {
        if (str[s] === "G") {
            strings.push([str[s], "C"]);
        } else if (str[s] === "C") {
            strings.push([str[s], "G"]);
        } else if (str[s] === "A") {
            strings.push([str[s], "T"]);
        } else if (str[s] === "T") {
            strings.push([str[s], "A"]);
        } else {
            break;
        }
    }
    return strings;
}
pairElement("ATCGA"); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
