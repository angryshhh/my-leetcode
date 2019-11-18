/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // 从左到右遍历每个从左下到右上的斜线上的点，每个点更新为该点的上、左点中最小值和该点值之和，最后输出右下角的值
  let m = grid.length;
  if (m === 0) return 0;
  let n = grid[0].length;
  let total = m + n - 1;
  let min = Math.min(m, n);
  let max = Math.max(m, n);
  let i = 2;
  while (i <= total) {
    let count = 0;
    if (i <= min) count = i;
    else if (min < i && i < max) count = min;
    else count = total - i + 1;
    let startY = 0, startX = 0;
    if (i <= m) {
      startY = i - 1;
      startX = 0;
    } else {
      startY = m - 1;
      startX = i - m;
    }
    for (let j = 0; j < count; j++) {
      let y = startY - j, x = startX + j;
      if (y === 0) grid[y][x] += grid[y][x - 1];
      else if (x === 0) grid[y][x] += grid[y - 1][x];
      else grid[y][x] += Math.min(grid[y - 1][x] ,grid[y][x - 1]);
    }
    i++;
  }
  return grid[m - 1][n - 1];
};
// @lc code=end

