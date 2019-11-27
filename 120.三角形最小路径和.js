/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  for (let i = triangle.length - 1; i >= 0; i--) {
    let row = triangle[i];
    for (let j = 0; j < row.length - 1; j++) {
      triangle[i - 1][j] += Math.min(triangle[i][j], triangle[i][j + 1]);
    }
  }
  return triangle[0][0];
};
// @lc code=end

