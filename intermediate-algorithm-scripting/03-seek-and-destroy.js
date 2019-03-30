/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

function destroyer(arr) {
    var args = Array.from(arguments);
    var args = [...arguments];
    args = args.splice(1);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < args.length; j++) {
            var index = arr.indexOf(arr[i]);
            if (args[j] === arr[i]) {
                arr = arr.filter(function(x) {
                    return x !== arr[i];
                });
            }
        }
    }
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
