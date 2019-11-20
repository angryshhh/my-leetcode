/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (target < matrix[i][0]) return false;
    if (target > matrix[i][matrix[i].length - 1]) continue;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > target) return false;
      if (matrix[i][j] === target) return true;
    }
  }
  return false;
};
// @lc code=end

