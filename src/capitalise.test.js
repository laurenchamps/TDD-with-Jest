import capitalise from './capitalise';

test('"test" should be "Test"', () => {
    expect(capitalise('test')).toEqual('Test');
});

test('"TEST" should be "Test"', () => {
    expect(capitalise('TEST')).toEqual('Test');
})

test('"Test" should be "Test"', () => {
    expect(capitalise('Test')).toEqual('Test');
});

test('Four word sentence should have first letter capitalised followed by all lower case', () => {
    expect(capitalise('ThiS iS A tEst')).toEqual('This is a test');
});

test('A number entered instead of a string should throw an error', () => {
    expect(() => capitalise(1234)).toThrow(Error);
})