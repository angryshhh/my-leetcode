/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let maxLen = 1;
  let lastLen = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      lastLen++;
      if (lastLen > maxLen) {
        maxLen = lastLen;
      }
    } else {
      lastLen = 1;
    }
  }
  return maxLen;
};
// @lc code=end

