/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i = digits.length - 1;
  while (i >= 0) {
    if (digits[i] === 9) {
      digits[i] = 0;
      i--;
    }
    else {
      digits[i] += 1;
      break;
    }
  }
  if (digits[0] === 0) return [1, ...digits];
  else return digits;
};
// @lc code=end

