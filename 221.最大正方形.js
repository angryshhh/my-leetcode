/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (matrix.length === 0) return 0;
  if (matrix[0].length === 0) return 0;
  let dp = [new Array(matrix[0].length + 1).fill(0)];
  for (let i = 0; i < matrix.length; i++) {
    dp.push(new Array(matrix[i].length + 1).fill(0));
  }
  let i = 1, j = 1;
  let maxLen = 0;
  for (; i <= matrix.length; i++) {
    for (; j <= matrix[i - 1].length; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1],
          dp[i - 1][j],
          dp[i][j - 1]
        ) + 1;
        if (maxLen < dp[i][j]) {
          maxLen = dp[i][j];
        }
      } else {
        dp[i][j] = 0;
      }
    }
    j = 1;
  }
  return maxLen * maxLen;
};
// @lc code=end

