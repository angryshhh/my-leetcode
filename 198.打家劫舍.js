/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // if (nums.length === 0) return 0;
  // if (nums.length === 1) return nums[0];
  // if (nums.length === 2) return Math.max(...nums);
  // return Math.max(nums[0] + rob(nums.slice(2)), nums[1] + rob(nums.slice(3)));

  let prevMax = 0, currMax = 0;
  for (let x of nums) {
    let temp = currMax;
    currMax = Math.max(prevMax + x, currMax);
    prevMax = temp;
  }
  return currMax;
};
// @lc code=end

