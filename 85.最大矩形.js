/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (matrix.length === 0) return 0;
  let m = matrix.length;
  let n = matrix[0].length;
  let left = new Array(n).fill(0);
  let right = new Array(n).fill(n);
  let height = new Array(n).fill(0);
  let max = 0;
  for (let i = 0; i < m; i++) {
    let currLeft = 0, currRight = n;

    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        height[j]++;
      } else {
        height[j] = 0;
      }
    }

    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        left[j] = Math.max(left[j], currLeft);
      } else {
        left[j] = 0;
        currLeft = j + 1;
      }
    }

    for (let j = n - 1; j >= 0; j--) {
      if (matrix[i][j] === '1') {
        right[j] = Math.min(right[j], currRight);
      } else {
        right[j] = n;
        currRight = j;
      }
    }

    for (let j = 0; j < n; j++) {
      max = Math.max(max, height[j] * (right[j] - left[j]));
    }
  }
  
  return max;
};
// @lc code=end

