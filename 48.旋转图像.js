/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let len = matrix.length;
  let half = ~~(len / 2);

  for (let i = 0; i < half; i++) {
    for (let j = 0; j < len - i - i - 1; j++) {
      let temp = matrix[i + j][len - i - 1];
      matrix[i + j][len - i - 1] = matrix[i][i + j];
      matrix[i][i + j] = temp;
      temp = matrix[len - i - 1][len - i - j - 1];
      matrix[len - i - 1][len - i - j - 1] = matrix[i][i + j];
      matrix[i][i + j] = temp;
      temp = matrix[len - i - j - 1][i];
      matrix[len - i - j - 1][i] = matrix[i][i + j];
      matrix[i][i + j] = temp;
    }
  }
};
// @lc code=end

