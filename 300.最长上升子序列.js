/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let maxCount = 1;
  let counts = [];
  for (let i = 0; i < nums.length; i++) {
    counts.push(1);
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i] && count < counts[j]) {
        count = counts[j];
      }
    }
    count++;
    counts[i] = count;
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
};
// @lc code=end

