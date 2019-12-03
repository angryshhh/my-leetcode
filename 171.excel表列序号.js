/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let result = 0;
  for (let char of s) {
    result *= 26;
    result += (char.charCodeAt(0) - 64);
  }
  return result;
};
// @lc code=end

