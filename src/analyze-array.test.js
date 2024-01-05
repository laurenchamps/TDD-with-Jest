import analyzeArray from './analyze-array';

test('Returns array with correct values of average, min, max and length', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('Does not accept an array containing non-numbers', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, '6'])).toEqual('All elements in the array must be numbers');
});

test('Does not accept a string', () => {
    expect(analyzeArray('hello world')).toEqual('Argument must be an array');
});

test('Does not accept a number', () => {
    expect(analyzeArray(3)).toEqual('Argument must be an array');
});