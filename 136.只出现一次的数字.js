/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // ^ 按位异操作符，2个相同的得0，最后就只剩单独的那个数
  for (let i = 1; i < nums.length; i++) {
    nums[0] ^= nums[i];
  }
  return nums[0];
};
// @lc code=end

