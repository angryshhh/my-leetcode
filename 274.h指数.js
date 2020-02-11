/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let sorted = citations.sort((a, b) => b - a);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] < i + 1) {
      return i;
    }
  }
  return citations.length;
};
// @lc code=end

