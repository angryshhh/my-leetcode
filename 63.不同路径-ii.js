/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  if (obstacleGrid[m - 1][n - 1]) return 0;
  // return (function rec(i, j) {
  //   if (i === m - 1 && j === n - 1) return 1;
  //   if (i === m || j === n) return 0;
  //   if (obstacleGrid[i][j] === 1) return 0;
  //   return rec(i + 1, j) + rec(i, j + 1);
  // })(0, 0);

  let min = Math.min(m, n);
  let max = Math.max(m, n);
  let total = m + n - 1;

  let i = 1;
  while (i <= total) {
    if (i === 1) {
      if (obstacleGrid[m - 1][n - 1] === 1) return 0;
      else {
        obstacleGrid[m - 1][n - 1] = -1;
        i++;
        continue;
      }
    }
    let count = 1;
    if (i < min) count = i;
    else if (min <= i && i <= max) count = min;
    else count = total - i + 1;
    let startX = 1, startY = 1;
    if (i <= n) {
      startY = m - 1;
      startX = n - i;
    } else {
      startY = total - i;
      startX = 0;
    }
    for (let j = 0; j < count; j++) {
      let y = startY - j, x = startX + j;
      if (obstacleGrid[y][x] === 0) {
        if (y === m - 1) obstacleGrid[y][x] = obstacleGrid[y][x + 1];
        else if (x === n - 1) obstacleGrid[y][x] = obstacleGrid[y + 1][x];
        else obstacleGrid[y][x] = -(
          (obstacleGrid[y + 1][x] === 1 ? 0 : -obstacleGrid[y + 1][x]) +
          (obstacleGrid[y][x + 1] === 1 ? 0 : -obstacleGrid[y][x + 1])
        );
      }
    }
    i++;
  }
  return obstacleGrid[0][0] >= 0 ? 0 : -obstacleGrid[0][0];
};
// @lc code=end

