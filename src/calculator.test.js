import calculator from './calculator';

test('Adding 2 and 1 equals 3', () => {
    expect(calculator.add(2, 1)).toBe(3);
});

test('Adding -4 and 2 equals -2', () => {
    expect(calculator.add(-4, 2)).toBe(-2);
});

test('Adding 0.2 and 0.3 equals 0.5', () => {
    expect(calculator.add(0.2, 0.3)).toBeCloseTo(0.5);
});

test('Adding 0 and 2 equals 2', () => {
    expect(calculator.add(0, 2)).toBe(2);
});

test('Subtracting 1 from 2 equals 1', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
});

test('Subtracting 2 from -4 equals -6', () => {
    expect(calculator.subtract(-4, 2)).toBe(-6);
});

test('Subtracting 0.2 from 0.3 equals 0.1', () => {
    expect(calculator.subtract(0.3, 0.2)).toBeCloseTo(0.1);
});

test('Subtracting 2 from 0 equals -2', () => {
    expect(calculator.subtract(0, 2)).toBe(-2);
});

test('Dividing 20 by 4 equals 5', () => {
    expect(calculator.divide(20, 4)).toBe(5);
});

test('Dividing 20 by -4 equals -5', () => {
    expect(calculator.divide(20, -4)).toBe(-5);
});

test('Dividing 0.8 by 0.2 equals 4', () => {
    expect(calculator.divide(0.8, 0.2)).toBeCloseTo(4);
});

test('Dividing any number by 0 gives an error', () => {
    expect(calculator.divide(4, 0)).toBe('Cannot divide by 0');
});

test('Multiplying 2 and 1 equals 2', () => {
    expect(calculator.multiply(2, 1)).toBe(2);
});

test('Multiplying -4 and 2 equals -8', () => {
    expect(calculator.multiply(-4, 2)).toBe(-8);
});

test('Multiplying 0.2 and 0.3 equals 0.5', () => {
    expect(calculator.multiply(0.2, 0.3)).toBeCloseTo(0.06);
});

test('Multiplying 0 and 2 equals 0', () => {
    expect(calculator.multiply(0, 2)).toBe(0);
});

test('Only accepts numbers as arguments', () => {
    expect(calculator.add('5', 1)).toBe('Arguments must be numbers');
});

test('Only accepts numbers as arguments', () => {
    expect(calculator.subtract('5', 1)).toBe('Arguments must be numbers');
});

test('Only accepts numbers as arguments', () => {
    expect(calculator.divide('5', 1)).toBe('Arguments must be numbers');
});

test('Only accepts numbers as arguments', () => {
    expect(calculator.multiply('5', 1)).toBe('Arguments must be numbers');
});

