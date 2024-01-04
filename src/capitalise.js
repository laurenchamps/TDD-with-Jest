const capitalise = function(string) {
    string = string.toLowerCase();
    return string[0].toUpperCase() + string.slice(1);
}

export default capitalise;