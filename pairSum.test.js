// This is the test file that jest will use to test the pairSum function
// Given an integer array, output all the unique pairs that sum up to a specific value k.
// So the input:
// pair_sum([1, 3, 2, 2], 4)
// would return 2 pairs:
// (1, 3)
// (2, 2)
// For testing purposes we will use a count of the number of pairs....(length of the array containing pairs)

const pairSum = require('./pairSum');

it('PairSum 0', () => {
    expect(pairSum([1], 1)).toBe(0);
});

it('PairSum 1', () => {
    expect(pairSum([1, 9, 2, 8, 3, 7, 4, 6, 5, 5, 13, 14, 11, 13, -1], 10)).toBe(6);
});

it('PairSum 2', () => {
    expect(pairSum([1, 2, 3, 1], 3)).toBe(1);
});

it('PairSum 3', () => {
    expect(pairSum([1, 3, 2, 2], 4)).toBe(2);
});

it('PairSum 4', () => {
    expect(pairSum([1, 1, 1, 1], 2)).toBe(1);
});

it('PairSum 5', () => {
    expect(pairSum([1, 1], 2)).toBe(1);
});

