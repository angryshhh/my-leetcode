/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let result = [1];
  while (0 < rowIndex--) {
    for (let i = 0; i < result.length - 1; i++) {
      result[i] += result[i + 1];
    }
    result = [1, ...result];
  }
  return result;
};
// @lc code=end

