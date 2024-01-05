const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const caesarCipher = function(string, shift) {
    if (typeof string !== 'string') return 'First argument must be a string';
    if (typeof shift !== 'number') return 'Second argument must be a number';

    const originalArr = string.split('');
    const encryptedArr = [];
  
    originalArr.forEach((char) => {
      let curIndex;
      let newIndex;
    
      // Check if character is upper or lower case letter
      if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        // Get current index of letter in alphabet array
        curIndex = alphabet.indexOf(char.toLowerCase());
        // Get new index
        newIndex = curIndex + (shift % 26);
        
        // Wrap back to beginning of array when new index is above 25
        if (newIndex > alphabet.length - 1) {
          newIndex = newIndex - alphabet.length;
        }
        // Add new (encrypted) letter to encrypted array
        encryptedArr.push(alphabet[newIndex].toUpperCase());
      } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        // Get current index of letter in alphabet array
        curIndex = alphabet.indexOf(char);
        // Get new index
        newIndex = curIndex + (shift % 26);
        
        // Wrap back to beginning of array when new index is above 25
        if (newIndex > alphabet.length - 1) {
          newIndex = newIndex - alphabet.length;
        }
        // Add new (encrypted) letter to encrypted array
        encryptedArr.push(alphabet[newIndex]);
      } else {
        encryptedArr.push(char);
      }
    });
  // Convert encrypted array into string
  return encryptedArr.join('');
};

export default caesarCipher;