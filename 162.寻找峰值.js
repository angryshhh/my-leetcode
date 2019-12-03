/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if (nums.length === 1) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (
      (i === 0 && nums[i] > nums[i + 1]) ||
      (i === nums.length - 1 && nums[i] > nums[i - 1]) ||
      (nums[i] > nums[i + 1] && nums[i] > nums[i - 1])
    ) {
      return i;
    }
  }
};
// @lc code=end

