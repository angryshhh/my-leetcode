/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  // Your runtime beats 84.38 % of javascript submissions
  // Your memory usage beats 81.72 % of javascript submissions (34.8 MB)
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let temp = 1;
    for (let j = i; j < nums.length; j++) {
      temp *= nums[j]
      if (temp > max) max = temp;
    }
    if (temp > 0) break;
  }
  return max;
};
// @lc code=end

