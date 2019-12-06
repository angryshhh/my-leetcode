/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // Your runtime beats 93.35 % of javascript submissions
  // Your memory usage beats 73.27 % of javascript submissions (37.3 MB)
  let m = grid.length;
  if (m === 0) return 0;
  let n = grid[0].length;
  let count = 0;
  function paintAllConnected(i, j, number) {
    if (i < 0) return;
    if (i === m) return;
    if (j < 0) return;
    if (j === n) return;
    if (grid[i][j] === '1') {
      grid[i][j] = number;
      paintAllConnected(i - 1, j, number);
      paintAllConnected(i, j - 1, number);
      paintAllConnected(i + 1, j, number);
      paintAllConnected(i, j + 1, number);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        paintAllConnected(i, j, count + 1);
        count++;
      }
    }
  }
  return count;
};
// @lc code=end

