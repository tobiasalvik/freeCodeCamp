/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.
*/

// should have stored sum in plain number variable, no need for array and reduce to sum
function sumAll(arr) {
    var largest = Math.max.apply(null, arr); // store largest number in array
    var smallest = Math.min.apply(null, arr); // store smallest number in array
    var numbers = []; // create empty array
    for (var i = smallest; i <= largest; i++) {
        // loop through from smallest to largest number, one number at a time
        numbers.push(i); // push each step to numbers array
    }
    // sum numbers in numbers array with reduce function
    return numbers.reduce(function(a, b) {
        return a + b;
    }, 0);
}
sumAll([1, 4]); // 10
