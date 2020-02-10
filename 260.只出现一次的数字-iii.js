/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    if (!count[nums[i]]) count[nums[i]] = 1;
    else delete count[nums[i]];
  }
  return Object.keys(count);
};
// @lc code=end

