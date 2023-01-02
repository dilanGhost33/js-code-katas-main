/**
Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

For example:
Input --> 'h3ll0w0rld'
Output --> 3

Input --> 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
Output --> 3635
*/

export const sumOfIntegersInString= (s)=> {
    let sum = 0;
    let currentNumber = '';
  
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (isNumber(c)) {
        currentNumber += c;
      } else {
        sum += parseInt(currentNumber, 10) || 0;
        currentNumber = '';
      }
    }
    sum += parseInt(currentNumber, 10) || 0;
    return sum;
  }

  function isNumber(c) {
    return !isNaN(parseInt(c, 10));
  }