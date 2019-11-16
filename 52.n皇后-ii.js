/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let pResult = [];
  (function rec(i, queens) {
    if (i === n) pResult.push(queens);
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        rec(1, [[j, 0]]);
      } else if (queens.every(point => point[0] !== j && Math.abs(point[0] - j) !== i - point[1])) {
        rec(i + 1, [[j, i], ...queens]);
      }
    }
  })(0, []);
  return pResult.length;
};
// @lc code=end

