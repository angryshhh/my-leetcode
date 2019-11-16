/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 * 
 * 即任意两皇后不能在同一行，同一列或同一斜线上
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
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
  if (pResult.length === 0) return [];
  let result = [];
  for (let points of pResult) {
    let sArray = new Array(n);
    for (let point of points) {
      let dArray = new Array(n).fill('.');
      dArray[point[1]] = 'Q';
      let str = dArray.join('');
      sArray[point[0]] = str;
    }
    result.push(sArray);
  }
  return result;
};
// @lc code=end

