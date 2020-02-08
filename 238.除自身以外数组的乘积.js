/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // let result = [1];
  // let left = 1, right = 1;
  // for (let i = 1; i < nums.length; i++) {
  //   left *= nums[i - 1];
  //   result.push(left);
  // }
  // for (let i = nums.length - 2; i >= 0; i--) {
  //   right *= nums[i + 1];
  //   result[i] *= right;
  // }
  // return result;

  let result = new Array(nums.length).fill(1);
  let left = 1, right = 1;
  let len = nums.length;
  for (let i = 1; i < len; i++) {
    left *= nums[i - 1];
    right *= nums[len - i];
    result[i] *= left;
    result[len - i - 1] *= right;
  }
  return result;
};
// @lc code=end

