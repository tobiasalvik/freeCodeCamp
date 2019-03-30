/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
    var arr = str.split(" "); // split string into array of words
    for (var i = 0; i < arr.length; i++) {
        // loop through each word
        if (arr[i] === before) {
            // if a word matches the before word
            if (arr[i][0] === before[0].toUpperCase()) {
                // if it matches uppercase words
                after = after.charAt(0).toUpperCase() + after.slice(1); // add uppercase to the after word as well
            }
            arr[i] = after; // regardless, add the after word to the word being changed
        }
    }
    return arr.join(" "); // join the words in the array into a string again with spaces
}
myReplace("Let us go to the store", "store", "mall"); // "Let us go to the mall"
