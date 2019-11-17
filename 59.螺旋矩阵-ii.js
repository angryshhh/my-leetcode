/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let result = [];
  for (let i = 0; i < n; i++) result.push(new Array(n).fill(n * n));
  let half = n / 2;
  let num = 1;
  for (let i = 0; i < half; i++) {
    let count = n - i - i - 1;
    for (let j = 0; j < count; j++) result[i][i + j] = num++;
    for (let j = 0; j < count; j++) result[i + j][n - i - 1] = num++;
    for (let j = 0; j < count; j++) result[n - i - 1][n - i - j - 1] = num++;
    for (let j = 0; j < count; j++) result[n - i - j - 1][i] = num++;
  }
  return result;
};
// @lc code=end

