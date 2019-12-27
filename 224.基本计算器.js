/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let nums = [];
  let symbols = [];
  let quotesCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      let quoteStart = i;
      quotesCount++;
      while (quotesCount) {
        i++;
        if (s[i] === '(') quotesCount++;
        else if (s[i] === ')') quotesCount--;
      }
      nums.push(calculate(s.slice(quoteStart + 1, i)));
    } else if (s[i] === '+' || s[i] === '-') {
      symbols.push(s[i]);
    } else if (s[i] !== ' ') {
      if (
        i === 0 ||
        (i > 0 && (s[i - 1] === ' ' || s[i - 1] === '+' || s[i - 1] === '-' || s[i - 1] === '('))
      ) nums.push(parseInt(s.slice(i)));
    }
  }
  let numCount = nums.length;
  for (let i = 0; i < numCount - 1; i++) {
    if (symbols[i] === '+') {
      nums[i + 1] = nums[i] + nums[i + 1];
    } else if (symbols[i] === '-') {
      nums[i + 1] = nums[i] - nums[i + 1];
    }
  }
  return nums[numCount - 1];
};
// @lc code=end

