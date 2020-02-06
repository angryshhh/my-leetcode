/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  // return n.toString(2).lastIndexOf('1') === 0;
  return n > 0 && !(n & (n - 1)); // 位运算
};
// @lc code=end

