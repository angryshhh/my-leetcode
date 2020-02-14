/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (matrix.length === 0) return 0;
  this.sums = [new Array(matrix[0].length + 1).fill(0)];
  for (let i = 0; i < matrix.length; i++) {
    let temp = [0];
    for (let j = 0; j < matrix[i].length; j++) {
      temp.push(temp[j] + matrix[i][j]);
    }
    for (let j = 0; j < temp.length; j++) {
      temp[j] += this.sums[i][j];
    }
    this.sums.push(temp);
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.sums[row2 + 1][col2 + 1] + this.sums[row1][col1]
    -this.sums[row2 + 1][col1] - this.sums[row1][col2 + 1];
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

