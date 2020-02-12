/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // let len = nums.length;
  // for (let i = 0; i < len; i++) {
  //   if (nums[i] === 0) {
  //     nums.splice(i, 1);
  //     i--;
  //     len--;
  //     nums.push(0);
  //   }
  // }
  let zeros = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      zeros.push(0);
    } else {
      nums.push(nums[i]);
    }
  }
  nums.splice(nums.length, 0, ...zeros);
  nums.splice(0, len);
};
// @lc code=end

