/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // Your runtime beats 78.42 % of javascript submissions
  // Your memory usage beats 66.67 % of javascript submissions (33.6 MB)
  let start = 0, end = nums.length - 1;
  let endNum = nums[end];
  while (start < end - 1) {
    if (nums[start] > endNum) start = ~~((start + end) / 2);
    else break;
  }
  while (start > 0 && nums[start - 1] <= endNum) start--;
  while (nums[start] > endNum && start < end) start++;
  return nums[start];
};
// @lc code=end

