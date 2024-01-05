const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const getCase = function(char) {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return 'upper';
  }
  if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    return 'lower';
  }
}

const getNewIndex = function(char, shift) {
  let curIndex;
  let newIndex;

  // Get current index of letter in alphabet array
  curIndex = alphabet.indexOf(char.toLowerCase());
  // Get new index
  newIndex = curIndex + (shift % 26);
    
  // Wrap back to beginning of array when new index is above 25
  if (newIndex > alphabet.length - 1) {
      newIndex = newIndex - alphabet.length;
    }
  return newIndex;
}

const caesarCipher = function(string, shift) {
    if (typeof string !== 'string') return 'First argument must be a string';
    if (typeof shift !== 'number') return 'Second argument must be a number';

    const originalArr = string.split('');
    const encryptedArr = [];
  
    originalArr.forEach((char) => {
      // If character is not a letter, add to encrypted array without conversion
      if (getCase(char) !== 'upper' && getCase(char) !== 'lower') encryptedArr.push(char);
    
      // If character is uppercase letter, get ciphered letter and add to array
      if (getCase(char) === 'upper') {
        encryptedArr.push(alphabet[getNewIndex(char, shift)].toUpperCase());
      }
      
      // If character is lowercase letter, get ciphered letter and add to array
      if (getCase(char) === 'lower') {
        encryptedArr.push(alphabet[getNewIndex(char, shift)]);
      }
    });
  // Convert encrypted array into string
  return encryptedArr.join('');
};

export default caesarCipher;