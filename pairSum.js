// Given an integer array, output all the unique pairs that sum up to a specific value k.
// So the input:
// pair_sum([1, 3, 2, 2], 4)
// would return 2 pairs:
// (1, 3)
// (2, 2)
// Note:  no duplicate pairs!  
// For testing purposes we will use a count of the number of pairs....(length of the array containing pairs)


function pairSum(intArray, targetSum) {

    // Initial thoughts....
    // Sort the array so we have some order
    // loop through the array
    // if current number is greater than target sum then stop....
    //      we know every number afterwards is also greater so the sum won't work
    // otherwise, we can check the sum of current + next
    // if it's equal, push this pair to a magicPair array and continue
    // if the next sum is > than target then stop and move the current to the next and continue
    // feels like this could be a O(n^2) solution...possible to optimize?

    // quick exit.....must have at least 2 integers
    if (intArray.length < 2) {
        return (0);
    };

    // default for sort is a lexical sort....
    // provide a compare function using ES6 form of anonymous function
    // result will be an integer sort
    let sortedArray = intArray.sort((a, b) => a - b);

    let currentIndex = 0;
    let nextIndex = 1;
    let magicPair = [];
    let currentSum = 0;
    let prevInt1 = null;
    let prevInt2 = null;

    while ((currentIndex < sortedArray.length)) {

        let int1 = parseInt(sortedArray[currentIndex]);
        let int2 = parseInt(sortedArray[nextIndex]);

        currentSum = int1 + int2;

        if ((currentSum > targetSum)) {
            currentIndex++;
            nextIndex = currentIndex + 1;
            continue;
        };

        if (currentSum == targetSum) {
            // skip value that's been evaluated so fewer potential dupe pairs
            if ((currentIndex > 0) &&
                (sortedArray[currentIndex] === sortedArray[currentIndex - 1])) {
                currentIndex++;
                nextIndex = currentIndex + 1;
                continue;
            } else {
                // prevent dupes...
                if (prevInt1 != int1 && prevInt2 != int2) {
                    prevInt1 = int1;
                    prevInt2 = int2;
                    magicPair.push([int1, int2]);
                };
                nextIndex++;
            };
        } else {
            if (nextIndex < intArray.length) {
                nextIndex++;
            } else {
                currentIndex++;
                nextIndex = currentIndex + 1;
            };
        };
    }

    console.log(magicPair);

    return (magicPair.length);
};

module.exports = pairSum;