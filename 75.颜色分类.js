/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let count = [0, 0, 0];
  for (let i = 0; i < nums.length; i++) count[nums[i]]++;
  for (let i = 0; i < 3; i++) {
    let start = 0;
    if (i === 1) start = count[0];
    else if (i === 2) start = count[0] + count[1];
    for (let j = 0; j < count[i]; j++) nums[start + j] = i;
  }
};
// @lc code=end

