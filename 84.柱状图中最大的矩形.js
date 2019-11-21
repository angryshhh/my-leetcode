/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let len = heights.length;
  if (len === 0) return 0;
  let max = 0;
  for (let i = 0; i < len; i++) {
    let a = heights[i];
    let b = 1;
    for (let j = 1; j <= i && heights[i - j] >= a; j++) b++;
    for (let j = 1; j + i < len && heights[i + j] >= a; j++) b++;
    if (max < a * b) max = a * b;
  }
  return max;
};
// @lc code=end

