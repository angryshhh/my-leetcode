/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let towardsLeft = [];
  let towardsRight = [];
  for (let asteroid of asteroids) {
    if (asteroid > 0) {
      towardsRight.push(asteroid);
    } else {
      let sum = -1;
      while (towardsRight.length) {
        sum = towardsRight[towardsRight.length - 1] + asteroid;
        if (sum <= 0) {
          towardsRight.pop();
        }
        if (sum >= 0) {
          break;
        }
      }
      if (sum < 0) {
        towardsLeft.push(asteroid);
      }
    }
  }
  return [...towardsLeft, ...towardsRight];
};
// @lc code=end

