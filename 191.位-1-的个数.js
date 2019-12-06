/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  // Your runtime beats 97.36 % of javascript submissions
  // Your memory usage beats 37.08 % of javascript submissions (34.8 MB)
  if (n === 0) return 0;
  return n.toString(2).match(/1/g).length;
};
// @lc code=end

