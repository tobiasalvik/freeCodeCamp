/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    const hasVowel = /[aeiou]/g;
    str = str.split("");
    if (hasVowel.test(str)) {
        for (let s in str) {
            for (let v in vowels) {
                if (str[0].includes(vowels[v])) {
                    return str.join("") + "way";
                } else if (str[s].includes(vowels[v])) {
                    return (
                        (str.slice(s) + str.slice(0, s)).split(",").join("") +
                        "ay"
                    );
                }
            }
        }
    } else {
        return str.join("") + "ay";
    }
}
