/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H指数 II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let i = 0;
  while (
    i < citations.length &&
    citations[i] + i < citations.length
  ) i++;
  return citations.length - i;
};
// @lc code=end

