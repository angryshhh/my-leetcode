/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  for (let i = 0; i < k - 1; i++) {
    let len = nums.length - i - 1;
    for (let j = 0; j < len; j++) {
      nums[j] = Math.max(nums[j], nums[j + 1]);
    }
  }
  return nums.slice(0, nums.length - k + 1);
};
// @lc code=end

