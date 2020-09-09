/*
 * @lc app=leetcode.cn id=789 lang=javascript
 *
 * [789] 逃脱阻碍者
 */

// @lc code=start
/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
  let distance = Math.abs(target[0]) + Math.abs(target[1]);
  // for (let i = 0; i < ghosts.length; i++) {
  //   if (Math.abs(ghosts[i][0] - target[0]) + Math.abs(ghosts[i][1] - target[1]) <= distance) {
  //     return false;
  //   }
  // }
  // return true;
  return !ghosts.some(ghost => Math.abs(ghost[0] - target[0]) + Math.abs(ghost[1] - target[1]) <= distance);
};
// @lc code=end

