/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  // 159/159 cases passed (96 ms)
  // Your runtime beats 83.73 % of javascript submissions
  // Your memory usage beats 50 % of javascript submissions (37.3 MB)
  let is = [], js = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        is.push(i);
        js.push(j);
      }
    }
  }
  for (let i of is) {
    for (let j = 0; j < matrix[i].length; j++) matrix[i][j] = 0;
  }
  for (let j of js) {
    for (let i = 0; i < matrix.length; i++) matrix[i][j] = 0;
  }
};
// @lc code=end

