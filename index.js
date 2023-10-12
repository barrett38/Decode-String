function decodeString(input) {
    let result = '';
    let shift = 0;
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      !isNaN(char) // If = a number, update shift value
      ? (shift = parseInt(char, 10))
      : isLetter(char) // If = a letter, shift and append result
      ? (result += shiftLetter(char, shift))
      : null; // If not number or letter, do nothing
    }
    return result;
  }
  
  function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
  }
  
  function shiftLetter(letter, shift) {
    const charCode = letter.charCodeAt(0);
    const baseCharCode = letter.toLowerCase() === letter ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
    const shiftedCharCode = (charCode - baseCharCode + shift) % 26 + baseCharCode;
    return String.fromCharCode(shiftedCharCode);
  }
  
  // Examples:
  console.log(decodeString("1a")); // "b"
  console.log(decodeString("3ce")); // "fh"
  console.log(decodeString("2fcjjm")); // "hello"
  