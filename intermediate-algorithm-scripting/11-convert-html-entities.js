/* 
Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    // spread string in as individual letters in array
    let newStr = [...str];
    // could have used switch/case
    // but loop through letters in array
    for (let s in newStr) {
        // convert each symbol into corresponding html entitiy
        if (newStr[s] == "&") {
            newStr[s] = "&amp;";
        } else if (newStr[s] == "<") {
            newStr[s] = "&lt;";
        } else if (newStr[s] == ">") {
            newStr[s] = "&gt;";
        } else if (newStr[s] == '"') {
            newStr[s] = "&quot;";
        } else if (newStr[s] == "'") {
            newStr[s] = "&apos;";
        }
    }
    // join letters in array back into a new string
    return newStr.join("");
}

convertHTML("Dolce & Gabbana"); // "Dolce &amp; Gabbana"
