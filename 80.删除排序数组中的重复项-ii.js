/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 2) return nums.length;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[j] = nums[i];
    j++;
    if (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      nums[j] = nums[i + 1];
      j++;
      i++;
    }
    while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return j;
};
// @lc code=end

