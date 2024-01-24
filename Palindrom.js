function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  
  // Test cases
//   console.log(isPalindrome("level")); // Output: true
//   console.log(isPalindrome("hello")); // Output: false
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
  