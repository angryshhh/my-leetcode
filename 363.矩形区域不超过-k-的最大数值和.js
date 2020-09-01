/*
 * @lc app=leetcode.cn id=363 lang=javascript
 *
 * [363] 矩形区域不超过 K 的最大数值和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  let max = -99999;
  let areaSum = [new Array(matrix[0].length + 1).fill(0)];
  for (let i = 0; i < matrix.length; i++) {
    areaSum.push(new Array(matrix[0].length + 1).fill(0))
    let rowSum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === k) {
        return k;
      } else if (matrix[i][j] > max && matrix[i][j] < k) {
        max = matrix[i][j];
      }
      rowSum += matrix[i][j];
      areaSum[i + 1][j + 1] = rowSum + areaSum[i][j + 1];

      for (let m = 0; m <= i; m++) {
        for (let n = 0; n <= j; n++) {
          let area = areaSum[i + 1][j + 1] - areaSum[i + 1][n] - areaSum[m][j + 1] + areaSum[m][n];
          if (area === k) {
            return k;
          } else if (area > max && area < k) {
            max = area;
          }
        }
      }
    }
  }

  return max;
};
// @lc code=end

