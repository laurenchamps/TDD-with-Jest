const isNum = function(num1, num2) {
    if (Number.isFinite(num1) && Number.isFinite(num2)) {
        return true;
    } else {
        return false;
    }
};

const add = function(num1, num2) {
    if (!isNum(num1, num2)) return 'Arguments must be numbers';

    return num1 + num2;
};

const subtract = function(num1, num2) {
    if (!isNum(num1, num2)) return 'Arguments must be numbers';

    return num1 - num2;
};

const divide = function(num1, num2) {
    if (num2 === 0) return 'Cannot divide by 0';

    if (!isNum(num1, num2)) return 'Arguments must be numbers';

    return num1 / num2;
};

const multiply = function(num1, num2) {
    if (!isNum(num1, num2)) return 'Arguments must be numbers';

    return num1 * num2;
};

const calculator = {
    add,
    subtract,
    divide,
    multiply,
};

export default calculator;