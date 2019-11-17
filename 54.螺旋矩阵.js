/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let m = matrix.length;
  if (m === 0) return [];
  let n = matrix[0].length;
  if (n === 0) return [];
  let result = [];
  let halfM = m / 2, halfN = n / 2;
  let quan = Math.min(halfM, halfN);
  for (let i = 0; i < quan; i++) {
    for (let j = 0; j < n - i - i - 1; j++) {
      result.push(matrix[i][i + j]);
    }
    for (let j = 0; j < m - i - i - 1; j++) {
      result.push(matrix[i + j][n - i - 1]);
    }
    for (let j = 0; j < n - i - i - 1; j++) {
      result.push(matrix[m - i - 1][n - i - j - 1]);
    }
    for (let j = 0; j < m - i - i - 1; j++) {
      result.push(matrix[m - i - j - 1][i]);
    }
  }
  if (quan !== ~~quan) {
    if (halfM === halfN) result.push(matrix[~~quan][~~quan]);
    else {
      for (let i = 0; i < Math.abs(m - n) - 1; i++) {
        result.pop();
      }
    }
  }
  return result;
};
// @lc code=end

