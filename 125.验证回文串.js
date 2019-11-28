/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = [...s].filter(value => {
    if ('a' <= value && value <= 'z') return true;
    if ('A' <= value && value <= 'Z') return true;
    if ('0' <= value && value <= '9') return true;
    return false;
  }).join('').toLowerCase();
  return str === [...str].reverse().join('');
};
// @lc code=end

