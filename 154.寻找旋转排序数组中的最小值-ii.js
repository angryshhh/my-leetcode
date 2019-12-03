/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // Your runtime beats 71.43 % of javascript submissions
  // Your memory usage beats 71.43 % of javascript submissions (33.8 MB)
  let start = 0, end = nums.length - 1;
  let endNum = nums[end];
  while (start < end - 1) {
    if (nums[start] >= endNum) start = ~~((start + end) / 2);
    else break;
  }
  while (start > 0 && nums[start - 1] <= endNum) start--;
  while (nums[start] >= endNum && start < end) start++;
  return nums[start];
};
// @lc code=end

