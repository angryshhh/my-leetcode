/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let n = nums.length;
  let sum = (n + 1) * n / 2;
  for (let i = 0; i < n; i++) sum -= nums[i];
  return sum;
};
// @lc code=end

