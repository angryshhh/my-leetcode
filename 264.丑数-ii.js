/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  
  let result = [1];
  let twoIndex = 0, threeIndex = 0, fiveIndex = 0;
  for (let i = 1; i < n; i++) {
    result.push(Math.min(2 * result[twoIndex], 3 * result[threeIndex], 5 * result[fiveIndex]));
    if (result[i] >= 2 * result[twoIndex])
      twoIndex++;
    if (result[i] >= 3 * result[threeIndex])
      threeIndex++;
    if (result[i] >= 5 * result[fiveIndex])
      fiveIndex++;
  }
  return result[n - 1];
};
// @lc code=end

