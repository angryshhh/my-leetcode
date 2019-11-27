/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return [];
  let result = [[1]]
  while (1 < numRows--) {
    let upper = result[result.length - 1];
    let temp = [1];
    for (let i = 1; i < upper.length; i++) {
      temp.push(upper[i] + upper[i - 1]);
    }
    temp.push(1);
    result.push(temp);
  }
  return result;
};
// @lc code=end

