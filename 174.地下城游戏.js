/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  let m = dungeon.length;
  let n = dungeon[0].length;
  let dp = [];
  for (let i = 0; i <= m; i++) dp.push(new Array(n + 1).fill(0));
  dp[m][n - 1] = 1;
  dp[m - 1][n] = 1;
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const right = dp[i][j + 1];
      const down = dp[i + 1][j];
      let min;
      if (right > 0 && down > 0) min = Math.min(right, down);
      else if (right === 0) min = down;
      else min = right;

      if (dungeon[i][j] >= min) dp[i][j] = 1;
      else dp[i][j] = min - dungeon[i][j];
    }
  }
  return dp[0][0];
};
// @lc code=end

