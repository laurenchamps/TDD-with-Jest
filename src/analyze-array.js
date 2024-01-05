const analyzeArray = function(arr) {
    if (typeof arr === 'number' || typeof arr === 'string') return 'Argument must be an array';

    if (!arr.every(el => typeof el === 'number')) return 'All elements in the array must be numbers';

    const average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;

    const min = Math.min(...arr);

    const max = Math.max(...arr);

    const length = arr.length;

    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}

export default analyzeArray;