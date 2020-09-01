/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  let charCount = {
    'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0,
    'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0,
    'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0,
    'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0
  };
  if (A.length !== B.length) return false;
  let charsOfA = [], charsOfB = [];
  let count = 0;
  let multiChar = false;
  for (let i = 0; i < A.length; i++) {
    charCount[A[i]]++;
    if (!multiChar && charCount[A[i]] === 2) {
      multiChar = true;
    }
    if (A[i] !== B[i]) {
      count++;
      if (count < 3) {
        charsOfA.push(A[i]);
        charsOfB.push(B[i]);
      } if (count === 3) {
        return false;
      }
    }
  }
  if (count === 0 && multiChar) {
    return true;
  } else if (count === 2) {
    return charsOfA[0] === charsOfB[1] && charsOfA[1] === charsOfB[0];
  }
  return false;
};
// @lc code=end

