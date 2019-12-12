/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  let len = nums.length;
  let max = nums[0];
  let maxNeg = nums[0];
  for (let i = 0; i < len; i++) {
    let sum = 0;
    if (nums[i] < 0 && nums[i] > maxNeg) maxNeg = nums[i];
    while (sum + nums[i] >= 0) {
      sum += nums[i];
      max = Math.max(max, sum);
      i++;
    }
  }
  if (max < 0) return maxNeg;
  else return max;
};
// @lc code=end

