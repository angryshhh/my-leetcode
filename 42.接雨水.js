/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let prevLow = 0;
  let head = 0, tail = height.length - 1;
  let total = 0;
  while (head < tail) {
    let headHeight = height[head];
    let tailHeight = height[tail];
    let currLow = Math.min(headHeight, tailHeight);
    if (prevLow < currLow) {
      total += ((currLow - prevLow) * (tail - head + 1));
      if (headHeight === currLow) {
        total -= headHeight;
        head++;
      }
      if (tailHeight === currLow) {
        total -= tailHeight;
        tail--;
      }
      prevLow = currLow;
    } else {
      if (headHeight <= prevLow) {
        total -= headHeight;
        head++;
      }
      if (tailHeight <= prevLow) {
        total -= tailHeight;
        tail--;
      }
    }
  }
  if (head === tail) {
    return total - Math.min(prevLow, height[head]);
  } else {
    return total;
  }
};
// @lc code=end

