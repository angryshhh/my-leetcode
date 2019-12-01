/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // Your runtime beats 93.61 % of javascript submissions
  // Your memory usage beats 38.98 % of javascript submissions (34.7 MB)
  return s.split(/\s+/).reverse().join(' ').trim();
};
// @lc code=end

