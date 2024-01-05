import reverseString from './reverse-string';

test('"hello" should be "olleh"', () => {
    expect(reverseString('string')).toEqual('gnirts');
});

test('Multiword sentence is reversed', () => {
    expect(reverseString('Hello world!')).toEqual('!dlrow olleH');
});

test('Does not accept a number as an argument', () => {
    expect(reverseString(1234)).toBeUndefined();
});

