const reverseString = function(string) {
    if(typeof string !== 'string') return;
    
    return string
            .split('')
            .reverse()
            .join('');
  }

  export default reverseString;