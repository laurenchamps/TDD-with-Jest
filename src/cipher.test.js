import caesarCipher from './cipher';

test('Punctuation marks are retained', () => {
    expect(caesarCipher('.,?!;"', 3)).toEqual('.,?!;"');
});

test('Special characters are retained', () => {
    expect(caesarCipher('&^%$#@*', 5)).toEqual('&^%$#@*');
});

test('Numbers are retained', () => {
    expect(caesarCipher(123, 10)).toEqual('First argument must be a string');
});

test('Single letter is correctly encrypted', () => {
    expect(caesarCipher('a', 3)).toEqual('d');
});

test('Case is retained during encryption', () => {
    expect(caesarCipher('aAbBcC', 3)).toEqual('dDeEfF');
});

test('A shift of 27 is the same as a shift of 1', () => {
    expect(caesarCipher('hello world', 27)).toEqual('ifmmp xpsme');
});

test('Full sentence is correctly encrypted', () => {
    expect(caesarCipher('Hello! How are you?', 3)).toEqual('Khoor! Krz duh brx?');
});

