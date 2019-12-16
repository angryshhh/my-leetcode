/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= k && i + j < nums.length; j++) {
      if (nums[i] === nums[i + j]) return true;
    }
  }
  return false;
};
// @lc code=end

